import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import dataJson from '../../utils/data.json';
import { HomeStyle } from "./style";
import { BsSearch } from 'react-icons/bs'
import { DropDown } from "../../components/DropDown";
export const Home = () => {
    const [countries, setCountries] = useState(dataJson)
    const [isSelect, setIsSelect] = useState("")
    
    return(
        <HomeStyle>
            <div className="form">
                <div className="inputSe element">
                    <div className="btnSearch">
                        <BsSearch className="color" size={20}/>
                    </div>
                    <input type="text" className="color" placeholder="Search for a country..."/>
                </div>
                <div className="select">
                    <DropDown isSelect={isSelect} setIsSelect={setIsSelect}/>
                </div>
            </div>
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