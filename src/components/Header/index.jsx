import { Link } from "react-router-dom"
import { HeaderStyle } from "./style"
import {BtnThema} from '../BtnThema'


export const Header = ({handleClick, theme}) => {
    return(
        <HeaderStyle className="element">
            <div className="container">
                <div className="logo">
                    <h1>Where in the word?</h1>
                </div>
                <div className="theme" onClick={handleClick}>
                    {theme == 'light' ? <BtnThema theme={theme}/> : <BtnThema theme={theme}/>}
                </div>
            </div>
        </HeaderStyle>
    );
}