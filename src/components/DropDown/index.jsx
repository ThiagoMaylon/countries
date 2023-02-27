import { DropStyle } from "./style"
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useState } from "react"
export const DropDown = ({isSelect, setIsSelect}) => {
    const [isActive, setIsActive] = useState(false);
    const continents = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

    const HandleClick = (ev) => {
        setIsSelect(ev.target.textContent)
        setIsActive(false)
    }

    return(
        <DropStyle >
            <div className="dropBtn element color" onClick={() => setIsActive(!isActive)}>
                {isSelect == "" ? 'Filter by Region' : isSelect}
                <RiArrowDropDownLine className="color" size={20}/>
            </div>
            
                {isActive && (
                    <div className="DropOptions element color">
                        {continents.map((continent, index) => (
                            <div key={index} 
                            className="option color"
                            onClick={HandleClick}>
                                {continent}
                            </div>
                        ))}
                    </div>
                )}
                
            
        </DropStyle>
    )
}