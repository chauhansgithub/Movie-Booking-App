import React from "react";
import {ReactComponent as ReactLogo} from '../../assets/logo.svg';
import './Header.css';

class Header extends React.Component{
     render(){
          return (
               <div>
                    <div className='header'>
                         <ReactLogo className='movielogo'/>                    
                    </div>
                    <div className='upcoming'>
                         <span>Upcoming Movies</span>
                    </div>                    
               </div>
               
          ) 
     }
}

export default Header;