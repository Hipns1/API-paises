import React, { useEffect, useState } from 'react'

const Home = () => {

    //consumir api
    const [data, setData] = useState();
    const [counter, setCounter] = useState(10);
    const urlAll = "https://restcountries.com/v3.1/all";

    const getData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        const dataSlice = data.slice(0, counter);
        setData(dataSlice);
    }

    const showMore = () => {
        setCounter(counter + 10);
    }

    useEffect(() => {
        getData(urlAll);
    }, [counter]);


    return (
        <div>
            <div>
                {data ?
                    data && data.map((item, index) => (
                        <div key={index}>
                            <img src={item.flags.svg} />
                        </div>
                    ))
                    : <h1>Cargando...</h1>
                }
            </div>
            <div>
                <button onClick={() => showMore()}>Show more...</button>
            </div>
        </div>
    )
}

export default Home;