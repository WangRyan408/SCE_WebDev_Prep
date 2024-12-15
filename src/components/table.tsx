/* eslint-disable @typescript-eslint/no-explicit-any */
//import { useState } from 'react';
import '../styles/table.css';
//import '../App.tsx'


interface TableProps {
    data: {
      o: number;
      h: number;
      l: number;
      c: number;
      pc: number;
      time: string;
    }[];
  }
  

function Table({data}: TableProps) {


    if (!data || !Array.isArray(data)) {
        return <div>No data available</div>;
      }
        
    return (

        <div>
            <table id="table-data">
                <thead>
                    <tr>
                        <th className="table-object">Open Price</th>
                        <th className="table-object">High Price</th>
                        <th className="table-object">Low Price</th>
                        <th className="table-object">Current Price</th>
                        <th className="table-object">Previous Close Price</th>
                        <th className="table-object">Time</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((key:any, index:any) => (
                        <tr key={index}>
                            <td>{key.o}</td>
                            <td>{key.h}</td>
                            <td>{key.l}</td>
                            <td>{key.c}</td>
                            <td>{key.pc}</td>
                            <td>{key.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )







}


export default Table