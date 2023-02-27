import { CardStyle } from "./style"

export const Card = ({img, countrie, population, region, capital}) => {
    return(
        <CardStyle className="element">
            <div className="imagem">
                <img src={img}/>
            </div>
            <div className="content">
                <h2>{countrie}</h2>
                <p className="color"><span>Population:</span> {population}</p>
                <p className="color"><span>Region:</span> {region}</p>
                <p className="color"><span>Capital:</span> {capital}</p>
            </div>
        </CardStyle>
    )
}