import { Link, useParams } from "react-router-dom"
import { DetailStyle } from "./style";
import dataJson from '../../utils/data.json';
import { BiArrowBack } from 'react-icons/bi'
import { useState } from "react";

export const Detail = () => {
    const {id} = useParams()
    const [country, setCountry] = useState(dataJson[id])

    return(
        <DetailStyle>
            <div className="back">
                <Link to="/">
                    <div className="btn-back element color">
                            <BiArrowBack className="color" size={20}/> <span>Back</span>
                    </div>
                </Link>
            </div>

            <div className="container">
                <div className="flag">
                    <img src={country.flags.png} />
                </div>

                <div className="content">
                    <div className="name">
                        <h2>{country.name}</h2>
                    </div>

                    <div className="info">
                        <div className="info-left">
                            <p className="color"><span>Native Name: </span>{country.nativeName}</p>
                            <p className="color"><span>Population: </span>{country.population}</p>
                            <p className="color"><span>Region: </span>{country.region}</p>
                            <p className="color"><span>Sub Region: </span>{country.subregion}</p>
                            <p className="color"><span>Capital: </span>{country.capital}</p>
                            
                        </div>
                        <div className="info-right">
                            <p><span>Top Level Domain: </span>
                                {country.topLevelDomain.map((topLevelDomain, index) => (
                                    <span key={index} className="no">{topLevelDomain}</span>
                                ))}
                            </p>
                            <p><span>Currencies: </span>
                                {country.currencies.map((currencie, index) => (
                                    <span key={index} className="no">{currencie.code}</span>
                                ))}
                            </p>
                            <p><span>Languages: </span>
                                {country.languages.map((language, index) => (
                                    <span key={index} className="no">{language.name}, </span>
                                ))}
                            </p>
                        </div>
                    </div>
                    <div className="bor">
                        <p className="color">Border Countries</p>
                        <div className="borders">
                            {country.borders.map((border, index) => (
                            <div className="element color border" key={index}>{border}</div>
                        ))}
                        </div>
                        
                    </div>
                </div>
            </div>
        </DetailStyle>
    )
}