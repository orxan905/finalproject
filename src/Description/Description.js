import "./Description.css";
import { useParams } from "react-router-dom";

function Description(props){
    const {id} = useParams();
    console.log(id);

    return(
        <div className="description">
            {props.data.filter((e,index)=>{
                return e.id == id;
            }).map((e,index)=>{
                return(
                    <div className="item" key={index}>
                <div className="images">
                    <img src={`../${e.tableData["imgUrlFront"]}`}></img>
                    <img src={`../${e.tableData["imgUrlBack"]}`}></img>
                </div>
                <aside>
                    <h1>{e.name}</h1>
                    <p>{e.description["firstParagraph"]}</p>   
                    <p>{e.description["secondParagraph"]}</p> 
                    <p>{e.description["thirdParagraph"]}</p>                      
                <table>
                    <tr>
                        <td>Issuing Country</td>
                        <td>{e.tableData["Issuing Country"]}</td>
                    </tr>
                    <tr>
                        <td>Composition</td>
                        <td>{e.tableData["Composition"]}</td>
                    </tr>
                    <tr>
                        <td>Quality</td>
                        <td>{e.tableData["Quality"]}</td>
                    </tr>
                    <tr>
                        <td>Denomination</td>
                        <td>{e.tableData["Denomination"]}</td>
                    </tr>
                    <tr>
                        <td>Year</td>
                        <td>{e.tableData["Year"]}</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>{e.tableData["Weight"]}</td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>{e.tableData["Price"]}</td>
                    </tr>
                </table>

                <a href="../">Back to the list</a>
                </aside>
            </div>
                )
            })}
            
        </div>
    )
}

export default Description;