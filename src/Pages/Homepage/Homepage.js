import "./Homepage.css";
import Bullion from '../../Components/Bullion';
import Exclusive from '../../Components/Exclusive';
import Commemorative from '../../Components/Commemorative';

import "bootstrap/dist/css/bootstrap.min.css";

import Header from '../../Components/Header';

function Homepage(){
    
    return(
        <div className="Homepage">
            <header>
                <div>
                <h1>Homepage</h1>
                </div>  
                <Header />
            </header>
            <main>
                <Bullion />
                <Exclusive />
                <Commemorative />
            </main>
        </div>
    )
}

export default Homepage;