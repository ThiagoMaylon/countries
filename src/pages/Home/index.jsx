import { useEffect, useState } from "react";
import dataJson from '../../utils/data.json';

export const Home = () => {
    const [countries, setCountries] = useState([dataJson])

    console.log(countries[0].name)
    return(
        <h1>home</h1>
    )
};