import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import dataJson from '../../utils/data.json';
import { HomeStyle } from "./style";

export const Home = () => {
    const [countries, setCountries] = useState(dataJson)
    
    console.log(countries)
    return(
        <HomeStyle>
            <div className="container">
                {countries.map((countrie, index) => (
               <Card key={index}
                countrie={countrie.name} 
                img={countrie.flags.png} 
                capital={countrie.capital}
                population={countrie.population}
                region={countrie.region}
               />
            ))}
            </div>
        </HomeStyle>
    )
};