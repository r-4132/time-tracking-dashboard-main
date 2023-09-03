import React, { useState, useEffect } from 'react';
import jeremyImg from '../assets/image-jeremy.png'


export default function Main() {
    const [data, setData] = useState([]);
    const [selectBtn, setselectBtn] = useState('weekly');

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
            <main className='flex justify-center items-center phone:h-screen phone:w-screen py-[5rem]'>
                <div className='main-wrapper grid grid-cols-1 gap-6 rounded-lg w-[80%] phone:grid-cols-4 phone:w-[60%]'>
                    <div className='card-container grid phone:row-span-2 rounded-lg bg-darkBlue '>
                        <div className="card flex flex-row justify-center content-center rounded-lg bg-Blue space-y-8 pb-[1rem] space-x-5 phone:flex-col phone:pb-[3rem] phone:space-x-8 h-[7rem] phone:space-y-5 phone:h-[16.5rem]">
                            <img className='w-[50px] h-[50px] border-2 rounded-full mt-[2rem] phone:ml-[2rem] phone:w-[70px] phone:h-[70px]' src={jeremyImg} alt='jeremy-image' />
                            <p className='text-left flex flex-col text-[12px]  text-gray-400'>Report for<span className='text-[20px] leading-[38px] font-light text-white phone:text-[36px]'> Jeremy Robson</span></p>
                        </div>
                        <div className='card-bottom flex flex-row items-start text-white justify-evenly p-[1rem] phone:flex-col phone:space-y-3 phone:text-[14px]'>
                            <button className={`hover:opacity-100 ${selectBtn === 'daily' ? 'opacity-100' : 'opacity-50'}`} onClick={() => handleBtn('daily')}>Daily</button>
                            <button className={`hover:opacity-100 ${selectBtn === 'weekly' ? 'opacity-100' : 'opacity-50'}`} onClick={() => handleBtn('weekly')}>Weekly</button>
                            <button className={`hover:opacity-100 ${selectBtn === 'monthly' ? 'opacity-100' : 'opacity-50'}`} onClick={() => handleBtn('monthly')}>Monthly</button>
                        </div>
                    </div>
                    {
                        data.map((item, index) => {
                            return (
                                <div className='container grid rounded-lg h-[10rem] phone:h-[11rem]' key={index}>
                                    <div className='wrap self-end rounded-lg h-[75%] bg-darkBlue translate-y-1 cursor-pointer hover:bg-Blue px-[1rem] py-[1rem] phone:h-[80%]'>
                                        <div className='flex justify-between'>
                                            <h4>{item.title}</h4>
                                            <button className='flex text-white items-center w-[20px] h-[20px] text-[20px] '>...</button>
                                        </div>
                                        <h4 className="data-cur text-[42px] font-light">{selectDaily(item.title)}hrs</h4>
                                        <p className='absolute bottom-12 right-0 left-13 text-[12px] opacity-50 font-light pr-[1.2rem] phone:relative phone:bottom-0'>Last week - <span className="data-prev">{selectPrev(item.title)}hrs</span></p>
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
