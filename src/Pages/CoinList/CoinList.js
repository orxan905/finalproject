import "bootstrap/dist/css/bootstrap.min.css";
import "./CoinList.css";
import { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import DataMain from "../../dataMain.json"
import Header from "../../Components/Header"


function CoinList(){
    const [input,setInput] = useState(true);
    const [selectValue,setselectValue] = useState(DataMain);

    function newFunction(e){
        setInput(e);
    }

    function selectValueFunction(b){
        setselectValue(b);
    }
    
    const {category} = useParams();
    const categoryFilter = category && DataMain.filter((e)=> {
        return e.tableData["category"]  === category
    })
        
    console.log(selectValue)
    return(
        
        <div className="Coin">
        <div className="CoinList">
            <header>
                <h1>List of the coin</h1>
                    <Link to="../">
                    <p className="text-dark">Homepage — List of the coins</p> 
                    </Link>
                    <Header f={newFunction} t={selectValueFunction}/>
            </header>
        </div>

        {category && categoryFilter.map((a)=>{
                return   (<div className="coin" key={a.id}>
                <div className="d-flex flex-row">
                <Link to={`/description/${a.id}`}>
                    <img src={`../${a.tableData["imgUrlFront"]}`} alt="urlfront" />
                </Link>
                    <div>
                        <h3>{a.name}</h3>
                        <p>{a.description["firstParagraph"]}</p>
                    </div>
                </div>
               </div>)
           }) 
        }
        {!category && selectValue && selectValue.map((e) => {
                return (<div className="coin" key={e.id}>
                    <div className="d-flex flex-row">
                        <Link to={`/description/${e.id}`}>
                            <img src={`../${e.tableData["imgUrlFront"]}`} alt="imgFr" />
                        </Link>
                        <div>
                            <h3>{e.name}</h3>
                            <p>{e.description["firstParagraph"]}</p>
                            <mark>{e.tableData["Price"]}</mark><br/>
                            <mark>{e.tableData["Issuing Country"]}</mark><br/>
                            <mark>{e.tableData["Year"]}</mark><br/>
                            <mark>{e.tableData["Composition"]}</mark>
                        </div>
                    </div>
                </div>)
            })
        }
        </div>
    )
}

export default CoinList;