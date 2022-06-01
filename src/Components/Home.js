import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import load from "../Styles/Images/load.gif";
import Filters from './Filters';

const Home = () => {

    const [data, setData] = useState();
    const [counter, setCounter] = useState(12);
    const [realData, setRealData] = useState([]);
    const [detail, setDetail] = useState([]);
    const urlAll = "https://restcountries.com/v3.1/all";

    const getData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        const dataSlice = data.slice(0, counter);
        setRealData(data);
        setData(dataSlice);
    }

    const showMore = () => {
        setCounter(counter + 12);
    }

    useEffect(() => {
        getData(urlAll);
    }, [counter]);

    return (
        <div className='home_container'>
            <Filters dataFilters={setData} data={realData} cont={counter} />
            <div className='home_card__container'>
                {data
                    ? data && data.map((item, index) => (
                        <Link 
                        onClick={() => setDetail(item)}
                        to={`/detail/${item.cca3}`} 
                        key={index} >
                            <div className='home_card'>
                                <div className='home_card__image'>
                                    <img src={item.flags.svg} />
                                </div>
                                <div className='home_card__text'>
                                    <h1>{item.name.official}</h1>
                                    <h2>Population: <span>{item.population}</span></h2>
                                    <h2>Region: <span>{item.region}</span></h2>
                                    <h2>Capital: <span>{item.capital ? item.capital : "None"}</span></h2>
                                </div>
                            </div>
                        </Link>
                    ))

                    : <div>
                        <img src={load} />
                    </div>
                }
                {
                    data
                        ? <div className='home_btn'>
                            <button onClick={() => showMore()}>
                                <i className="fa-solid fa-angle-down"></i>
                                Show more...
                            </button>
                        </div>
                        : null
                }
            </div>

        </div >
    )
}

export default Home;