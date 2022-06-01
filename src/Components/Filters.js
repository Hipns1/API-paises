import React from 'react';

const Filters = ({ data, dataFilters, cont }) => {

    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.value;
        const filteredData = data.filter(item => item.name.official.toLowerCase().includes(search.toLowerCase()));
        if (filteredData.length > 0) {
            const dataSlice = filteredData.slice(0, cont);
            dataFilters(dataSlice);
        } else {
            dataFilters(filteredData);
        }
    }

    const handleFilter = async (e) => {
        const region = e.target.value;
        const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
        const data = await response.json();
        dataFilters(data);
    }


    return (
        <div className="filter_container">
            <div className='filter_search'>
                <form onChange={handleSearch}>
                    <input type="text" placeholder="Search for a country..." />
                </form>
            </div>
            <div className='filter_select'>
                <select onChange={handleFilter} defaultValue="" >
                    <option disabled value="">Filter by region...</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </div>
    )
}

export default Filters