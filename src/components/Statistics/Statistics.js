import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const data = useLoaderData();
    const questionData = data.data;
    console.log(questionData);
    return (
        <div>
            <h1 className='statistic-title'>statistics</h1>
            <LineChart className='chart' width={800} height={400} data={questionData}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Statistics;