import React, { useState, useEffect } from 'react';
import jeremyImg from '../assets/image-jeremy.png'


export default function Main() {
    const [data, setData] = useState([]);
    const [selectBtn, setselectBtn] = useState('daily');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/data.json');
                if (!res.ok) {
                    console.log('error')
                }
                const jsonData = await res.json();
                setData(jsonData)
            }
            catch (error) {
                console.log('error')
            }
        }

        fetchData()
    }, []);
    const handleBtn = (select) => {
        setselectBtn(select);
    }
    const selectDaily = (title) => {

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
    const selectPrev = (title) => {

        if (selectBtn === 'daily') {
            const matchingItem = data.find(item => item.title === title);
            if (matchingItem) {
                return matchingItem.timeframes.daily.previous;
            }
        }
        else if (selectBtn === 'weekly') {
            const matchingItem = data.find(item => item.title === title);
            if (matchingItem) {
                return matchingItem.timeframes.weekly.previous;
            }
        }
        else if (selectBtn === 'monthly') {
            const matchingItem = data.find(item => item.title === title);
            if (matchingItem) {
                return matchingItem.timeframes.monthly.previous;
            }
        }
        return 'Title not found';
    }

    return (
        <>
            <main className='flex justify-center items-center h-screen w-screen'>
                <div className='main-wrapper grid grid-cols-4 gap-6 rounded-lg h-[55%] w-[60%]'>
                    <div className='card-container grid row-span-2 rounded-lg bg-darkBlue '>
                        <div className="card grid rounded-lg h-[90%] bg-Blue ">
                            <img className='w-[30%] border-2 rounded-full m-8' src={jeremyImg} alt='jeremy-image' />
                            <p className='text-left px-8 mb-8 text-[12px] text-gray-400'>Report for<br></br><span className='text-[32px] leading-[38px] font-light text-white'> Jeremy Robson</span></p>
                        </div>
                        <div className='card-bottom flex flex-col items-start px-8 text-white space-y-4'>
                            <button className='hover:opacity-100  opacity-50' onClick={() => handleBtn('daily')}>Daily</button>
                            <button className='hover:opacity-100  opacity-50' onClick={() => handleBtn('weekly')}>Weekly</button>
                            <button className='hover:opacity-100  opacity-50' onClick={() => handleBtn('monthly')}>Monthly</button>
                        </div>

                    </div>
                    {
                        data.map((item, index) => {
                            return (
                                <div className='container grid rounded-lg h-[98%]' key={index}>
                                    <div className='wrap self-end rounded-lg h-[80%] p-5 bg-darkBlue translate-y-1 cursor-pointer hover:bg-Blue'>
                                        <div className='flex justify-between mb-[10px'>
                                            <h4>{item.title}</h4>
                                            <button className='flex text-white items-center w-[20px] h-[20px] text-[20px] '>...</button>
                                        </div>
                                        <h4 className="data-cur text-[42px] font-light">{selectDaily(item.title)}hrs</h4>
                                        <p className='text-[12px] opacity-50 font-light'>Last week - <span className="data-prev">{selectPrev(item.title)}hrs</span></p>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </main>
        </>
    )
}
