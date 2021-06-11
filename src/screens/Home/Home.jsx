import React from "react";
import Header from '../../common/Header/Header';
import './Home.css';
import moviesData from '../../common/moviesData';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';


class Home extends React.Component {
     constructor() {
       super();
       this.state = {
         movies: moviesData,
       };
     }
     
     render() {
       function pingDate(date){
          let currentDate = new Date(date);
          var fd = currentDate.toDateString();
          return fd; 
       }
       return (
         <div>
           <Header />
           <div>
             <GridList
               style={{ margin: 0, flexWrap: "nowrap" }}
               cols={6}
               cellHeight={250}>
               {this.state.movies.map(movie => (
                 <GridListTile key={movie.id}>
                   <img src={movie.poster_url} alt={movie.title} />
                   <GridListTileBar title={movie.title} />
                 </GridListTile>
               ))}
             </GridList>
             <div className="flex-container">
               <div className="left">
                 <GridList cols={4} cellHeight={350}>
                   {this.state.movies.map(movie => (
                     <GridListTile key={movie.id} style={{ cursor: "pointer" }}>
                       <img src={movie.poster_url} alt={movie.title} />
                       <GridListTileBar
                         title={movie.title}
                         subtitle={<span>Release Date: {pingDate(movie.release_date)}</span>}                         
                       />
                     </GridListTile>
                   ))}
                 </GridList>
               </div>
               <div className="right"></div>
             </div>
           </div>
         </div>
       );
     }
}
   
export default Home;