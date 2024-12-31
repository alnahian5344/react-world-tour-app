import { useState } from 'react';
import './Country.css'
const Country = ({ country }) => {
    // console.log(country);
    const { name, flags, area, population } = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited)
    }
    return (
        <div className='country'>
            <h2>Name : {name?.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population : {country.population}</p>
            <p>Area : {country.area}</p>
            <button onClick={handleVisited} >
                {visited ? 'Visited' : 'Going'}</button>
            {visited ? 'i Have visited' : 'i want to visited'}

        </div>
    );
};

export default Country;