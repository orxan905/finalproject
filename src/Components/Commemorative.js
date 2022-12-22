import './Coins.css';
import { Link } from 'react-router-dom';

function Commemorative(){
    let anyName = "Commemorative coins";
    return(
        <div className="Commemorative">
            <h2>Commemorative coins</h2>
            <div className='coins'>
                <Link to={`/coinlists/${anyName}`}>
                <a href='#' className='text-dark'>Show all</a>
                </Link>
                <i className="fa-solid fa-chevron-right"></i> 
            </div>
            <img src="CategoryImage/Commemorative.png"></img>
        </div>
    )
}

export default Commemorative;