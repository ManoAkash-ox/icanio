import React, { useState } from 'react';

const SortableTable = () => {
    const [sortConfig, setSortConfig] = useState({ key: 'upvotes', direction: 'descending' });

    const data = [
        { title: 'A message to our customers', upvotes: 12, date: '2020-01-24' },
        { title: 'Alphabet earnings', upvotes: 22, date: '2019-11-23' },
        { title: 'Artificial Mountains', upvotes: 2, date: '2019-11-22' },
        { title: 'What\'s SAP', upvotes: 1, date: '2019-11-21' },
        { title: 'the Emu War', upvotes: 24, date: '2019-10-21' },
        { title: 'Scaling to 100k Users', upvotes: 72, date: '2019-01-21' },
        { title: 'Simple text editor has 15k monthly users', upvotes: 7, date: '2010-12-31' },
    ];

    const sortedData = [...data].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') { 
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return ( 
        <div>
            <div className="sort-buttons">
               <button onClick={() => requestSort('upvotes')}>Most Upvoted</button>
                <button onClick={() => requestSort('date')}>Most Recent</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Upvotes</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.upvotes}</td>
                            <td>{item.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SortableTable;
