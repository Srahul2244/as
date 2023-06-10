import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export const MyLineChart = ({ data }) => {
    return (
      <div className='rounded-[32px] bg-[#EDEDF6] box-border border-1 border-[#F6F6FB]'>
        <div className='flex items-center justify-between px-[38px] pt-[22px]'>
          <h1 className='text-center text-[#000000] '>Total visits</h1>
          <p className='text-[#7166F9] text-[32px] font-bold'>42,43M</p>
        </div>

        <div className='h-[0.8px] bg-[#C4C4C4] mx-[38px] my-[22px]'></div>
        <div className='w-full px-[30px] pb-[22px]'>
          <LineChart width={400} height={300}  data={data}  margin={{
              top: 5,
              right: 40,
              left: 30,
              bottom: 5
            }}>
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="totalVisits" stroke="#8884d8" strokeWidth={4} />
              <Line type="monotone" dataKey="visitors" stroke="#8884d8" strokeWidth={4}/>
          </LineChart>
        </div>
      </div>
    );
  };
  