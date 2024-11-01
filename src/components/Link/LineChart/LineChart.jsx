
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {

    const data = [
        { id: 1, name: 'Alice', student: '1', Math: 85, Physics: 78, Chemistry: 92 },
        { id: 2, name: 'Bob', student: '2', Math: 90, Physics: 88, Chemistry: 84 },
        { id: 3, name: 'Charlie', student: '3', Math: 76, Physics: 85, Chemistry: 80 },
        { id: 4, name: 'David', student: '4', Math: 88, Physics: 90, Chemistry: 91 },
        { id: 5, name: 'Emma', student: '5', Math: 92, Physics: 95, Chemistry: 89 },
        { id: 6, name: 'Frank', student: '6', Math: 79, Physics: 81, Chemistry: 85 },
        { id: 7, name: 'Grace', student: '7', Math: 84, Physics: 83, Chemistry: 88 },
        { id: 8, name: 'Hannah', student: '8', Math: 91, Physics: 89, Chemistry: 94 },
        { id: 9, name: 'Ian', student: '9', Math: 77, Physics: 82, Chemistry: 79 },
        { id: 10, name: 'Jasmine', student: '10', Math: 85, Physics: 87, Chemistry: 86 },
      ];

    return (
        <div>
            <LChart width={500} height={400} data={data} >
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Line  dataKey="Math" stroke='red'></Line>
            <Line dataKey="Physics" stroke='blue'></Line>
            <Line dataKey="Chemistry" stroke='green'></Line>
            </LChart>
            
        </div>
    );
};

export default LineChart;