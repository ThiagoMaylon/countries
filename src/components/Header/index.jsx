import { Link } from "react-router-dom"
import { HeaderStyle } from "./style"
import {BtnThema} from '../BtnThema'


export const Header = ({handleClick, theme}) => {
    return(
        <HeaderStyle className="element">
            <div className="container">
                <div className="logo">
                    <a href="#">Where in the word?</a>
                </div>
                <div className="theme" onClick={handleClick}>
                    {theme == 'light' ? <BtnThema theme={theme}/> : <BtnThema theme={theme}/>}
                </div>
            </div>
        </HeaderStyle>
    );
}