import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const data = [
    { week: '', set1: 100, set2: 200 },
    { week: 'week1', set1: 400, set2: 385 },
    { week: 'week2', set1: 150, set2: 200 },
    { week: 'week3', set1: 440, set2: 300 },
    { week: 'week4', set1: 180, set2: 220 },
    { week: '', set1: 250, set2: 440 },
];

const SplineChart = () => {
    return (
        <LineChart width={1000} height={270} data={data}>
            <CartesianGrid stroke="#ccc" strokeOpacity={0.5} vertical={false}/>
            <XAxis dataKey="week" axisLine={false}/>
            <YAxis type="number" axisLine={false} domain={[0, 500]} ticks={[0, 100, 200, 300, 400, 500]} />
            <Line type="monotone" dataKey="set1" stroke="#9BDD7C" strokeWidth="3" dot={false} />
            <Line type="monotone" dataKey="set2" stroke="#E9A0A0" strokeWidth="3" dot={false} />
        </LineChart>

    );
};

export default SplineChart;
