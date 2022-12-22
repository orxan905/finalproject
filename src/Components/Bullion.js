import './Coins.css';
import { Link } from 'react-router-dom';

function Bullion(){
    let anyName = "Bullion coins";
    return(
        <div className="Bullion">
            <h2>Bullion coins</h2>
            <div className='coins'>
                <Link to={`/coinlists/${anyName}`}>
                <a href='#' className='text-dark'>Show all</a>
                </Link>
                <i className="fa-solid fa-chevron-right"></i>
            </div>
            <img src="CategoryImage/Bullion.png" alt='bullion'></img>
        </div>
    )
}

export default Bullion;