/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react'
//const finnhub = require('finnhub');
import Table from './components/table.tsx'
import './App.css'


function App() {

  const [symbol, setSymbol] = useState("");
  const [tableData, setTableData] = useState<any[]>([]);
  const [timeInput, setTimeInput] = useState({'min': 0, 'sec': 0});
  const [submit, setSubmit] = useState(false);
  //Auth
  const API_KEY = 'ctei3shr01qt478m0jjgctei3shr01qt478m0jk0';

  const stockHandler = useCallback(async () => {
    const date = new Date();
    const data = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`);
    const response = await data.json();
    delete response['t'];
    response['time'] = date.toString().slice(0, 24);
    //setTickerData(response);
    return response;
  },[symbol]);

  const submitHandler = useCallback(async () => {
    const response = await stockHandler();
    setTableData(prevData => [...prevData, response]);
    setSubmit(!submit);
},[stockHandler, submit]);

  useEffect(() => {
    if (submit) {
      const totalTime = (timeInput['min'] * 60) + timeInput['sec'];
      setInterval(() =>{  
        submitHandler();
      }, totalTime * 1000);
    }
  }, [submitHandler, submit, timeInput]);


  return (
    <div>
      <div id="stockInput">
        <input type="text" id="min" name="min" placeholder='MIN' onChange={(e) => setTimeInput({...timeInput, 'min': parseInt(e.target.value)})}/>
        <input type="text" id="sec" name="sec" placeholder='SEC' onChange={(e) => setTimeInput({...timeInput, 'sec': parseInt(e.target.value)})}/>
        <input type="text" id="symbol" name="symbol" placeholder='SYMBOL' onChange={(e) => setSymbol(e.target.value)}/>
        <button type="button" className="submit" id="submit" onClick={submitHandler}>Submit</button>
      </div>
      <Table 
        data={tableData}
      />
    </div>
  )
}

export default App
