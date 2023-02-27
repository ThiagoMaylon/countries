import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import dataJson from '../../utils/data.json';
import { HomeStyle } from "./style";
import { BsSearch } from 'react-icons/bs'
import { DropDown } from "../../components/DropDown";
export const Home = () => {
    const [countries, setCountries] = useState(dataJson)
    const [isSelect, setIsSelect] = useState("")
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState([])

    const buscar = () => {
        setFilter(countries.filter((countrie) => countrie.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())));
        
    }
    const filtrar = () => {
        setFilter(countries.filter((countrie) => countrie.region.startsWith(isSelect)));
    }
    return(
        <HomeStyle>
            <div className="form">
                <div className="inputSe element">
                    <div className="btnSearch" onClick={buscar}>
                        <BsSearch className="color" size={20} />
                    </div>
                    <input type="text" className="color" placeholder="Search for a country..." onChange={e => setSearch(e.target.value)}/>
                </div>
                <div className="select">
                    <DropDown isSelect={isSelect} setIsSelect={setIsSelect} filtrar={filtrar}/>
                </div>
            </div>
            <div className="container">
                {filter == "" ? countries.map((countrie, index) => (
               <Card key={index}
                countrie={countrie.name} 
                img={countrie.flags.png} 
                capital={countrie.capital}
                population={countrie.population}
                region={countrie.region}
               />
            )) : filter.map((countrie, index) => (
                <Card key={index}
                 countrie={countrie.name} 
                 img={countrie.flags.png} 
                 capital={countrie.capital}
                 population={countrie.population}
                 region={countrie.region}
                />))}
            </div>
        </HomeStyle>
    )
};