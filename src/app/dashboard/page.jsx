import Counter from '../components/Counter';
import React from 'react';

const DashboardPage = () => {
    return (
        <div>
            <h2>Dashboard Page</h2>
            <ul>
                <li>Dashboard Item 1</li>
                <li>Dashboard Item 2</li>
                <li>Dashboard Item 3</li>
            </ul>
            <Counter></Counter>
        </div>
    );
};

export default DashboardPage;