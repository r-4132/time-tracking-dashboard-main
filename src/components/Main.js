import React, { useState, useEffect } from 'react';


export default function Main() {
    const [data, setData] = useState([]);
    const [selectBtn, setselectBtn] = useState('daily');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/data.json');
                if (!res.ok) {
                    console.log('error');
                }

                const jsonData = await res.json();
                setData(jsonData)
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);
    const handleBtn = (select) => {
        setselectBtn(select);
    }
    const selectTime = (title) => {
        
        if (selectBtn === 'daily') {
            const matchingItem = data.find(item => item.title === title);
            if (matchingItem) {
                return matchingItem.timeframes.daily.current;
            }
        }
        else if (selectBtn === 'weekly') {
            const matchingItem = data.find(item => item.title === title);
            if (matchingItem) {
                return matchingItem.timeframes.weekly.current;
            }
        }
        else if (selectBtn === 'monthly') {
            const matchingItem = data.find(item => item.title === title);
            if (matchingItem) {
                return matchingItem.timeframes.monthly.current;
            }
        }
        return 'Title not found';
    }

    return (
        <>
            <main>
                <div className="card">
                    <p>Report for<span> Jeremy Robson</span></p>
                    <button onClick={() => handleBtn('daily')}>Daily</button>
                    <button onClick={() => handleBtn('weekly')}>Weekly</button>
                    <button onClick={() => handleBtn('monthly')}>Monthly</button>
                </div>
                {data.map((item, index) => (
                    <div className="card" key={index}>
                        <div className="wrap">
                            <h4>{item.title}</h4>
                            <div className="data-cur"></div>
                            <p>Last week - <span className="data-prev">{selectTime(item.title)}</span></p>
                        </div>
                    </div>
                ))}
            </main>
        </>
    )
}
