import './Coins.css';
import { Link } from 'react-router-dom';

function Exclusive(){
    let anyName = "Exclusive coins"
    return(
        <div className="Exclusive">
            <h2>Exclusive coins</h2>
            <div className='coins'>
                <Link to={`/coinlists/${anyName}`}>
                <a href='#' className='text-dark'>Show all</a>
                </Link>
                <i className="fa-solid fa-chevron-right"></i> 
            </div>
            <img src="CategoryImage/Exclusive.png"></img>
        </div>
    )
}

export default Exclusive;