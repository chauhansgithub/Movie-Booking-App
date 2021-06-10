import React from "react";
import {ReactComponent as ReactLogo} from '../../assets/logo.svg';
import './Header.css';

class Header extends React.Component{
     render(){
          return (
               <div className='header'>
                    <ReactLogo className='movielogo'/>

               </div>
          ) 
     }
}

export default Header;