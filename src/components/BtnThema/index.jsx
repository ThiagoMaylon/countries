import { BsFillSunFill } from 'react-icons/bs'
import { BsFillMoonFill } from 'react-icons/bs'
import { BtnThemaStyle } from './style'

export const BtnThema = ({theme}) => {
    return(
        <BtnThemaStyle>
            {theme == 'light' ? <BsFillSunFill className='color' size={20}/> : <BsFillMoonFill className='color' size={20}/>} 
            <button className={` color`}>
                {theme == 'light' ? "Light" : "Dark"} Mode
            </button>
        </BtnThemaStyle>
    )
}