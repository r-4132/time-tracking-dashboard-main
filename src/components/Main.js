import React, { useState, useEffect } from 'react';


export default function Main() {
    const [data, setData] = useState([]);

    useEffect(() =>{
        const fetchData = async () => {
            try{
                const res = await fetch('/data.json');
                if(!res.ok){
                    console.log('error');
                }
    
                const jsonData = await res.json();
                setData(jsonData)
            }
            catch(error){
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    },[]);
    return (
        <>
            <main>
                <div class="card">
                    <p>Report for<span> Jeremy Robson</span></p>
                    <button>Daily</button>
                    <button>Weekly</button>
                    <button>Monthly</button>
                </div>
                <div class="card">
                    <div class="wrap">
                        <h4>Work</h4>
                        <div class="data-cur"></div>
                        <p>Last week - <span class="data-prev">{data[0].timeframes.weekly.current} hours</span></p>
                    </div>
                </div>
                <div class="card">
                    <div class="wrap">
                        <h4>Play</h4>
                        <div class="data-cur"></div>
                        <p>Last week - <span class="data-prev">{data[1].timeframes.weekly.current} hours</span></p>
                    </div>
                </div>
                <div class="card">
                    <div class="wrap">
                        <h4>Study</h4>
                        <div class="data-cur"></div>
                        <p>Last week - <span class="data-prev">{data[2].timeframes.weekly.current} hours</span></p>
                    </div>
                </div>
                <div class="card">
                    <div class="wrap">
                        <h4>Exercise</h4>
                        <div class="data-cur"></div>
                        <p>Last week - <span class="data-prev">{data[3].timeframes.weekly.current} hours</span></p>
                    </div>
                </div>
                <div class="card">
                    <div class="wrap">
                        <h4>Social</h4>
                        <div class="data-cur"></div>
                        <p>Last week - <span class="data-prev">{data[4].timeframes.weekly.current} hours</span></p>
                    </div>
                </div>
                <div class="card">
                    <div class="wrap">
                        <h4>Self Care</h4>
                        <div class="data-cur"></div>
                        <p>Last week - <span class="data-prev">{data[5].timeframes.weekly.current} hours</span></p>
                    </div>
                </div>
            </main>
        </>
    )
}
