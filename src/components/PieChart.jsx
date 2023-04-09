import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Basic Tees', value: 55 },
  { name: 'Custom Short Pants', value: 31 },
  { name: 'Super Hoodies', value: 14 },
];

const COLORS = ['#98D89E', '#F6DC7D', '#EE8484'];

const PieChartComponent = () => {
  return (
      <PieChart width={200} height={200}>
      <Pie
        data={data}
        cx={100}
        cy={100}
        labelLine={false}
        startAngle={-270}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        paddingAngle={0}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default PieChartComponent;
