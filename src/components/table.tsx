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
                        <th className="table-header">Open Price</th>
                        <th className="table-header">High Price</th>
                        <th className="table-header">Low Price</th>
                        <th className="table-header">Current Price</th>
                        <th className="table-header">Previous Close Price</th>
                        <th className="table-header">Time</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((key:any, index:any) => (
                        <tr key={index}>
                            <td className="table-object">{key.o}</td>
                            <td className="table-object">{key.h}</td>
                            <td className="table-object">{key.l}</td>
                            <td className="table-object">{key.c}</td>
                            <td className="table-object">{key.pc}</td>
                            <td className="table-object">{key.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )







}


export default Table