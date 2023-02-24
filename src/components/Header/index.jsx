import { Link } from "react-router-dom"
import { HeaderStyle } from "./style"

export const Header = ({handleClick, theme}) => {
    return(
        <HeaderStyle className="element">
            <div className="container">
                <div className="logo">
                    <a href="#">Where in the word?</a>
                </div>
                <div className="theme">
                   <button onClick={handleClick}>{theme}</button>
                </div>
            </div>
        </HeaderStyle>
    )
}