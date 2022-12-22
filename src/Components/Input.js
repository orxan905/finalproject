import "./Input.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Input(props){
    const [filter,setFilter] = useState(false);
    const [search, setSearch] = useState();
    const navigate = useNavigate()
    function filteredMethod(){
        setFilter(!filter);
        props.f(filter)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(search) {
            navigate(`/coinlist?search=${search}`)
        } else {
            alert("Input must be contain at least one character")
        }
        props.s(search)
    }
    return(
        <div className="Input">
            <form onSubmit={handleSubmit}>
                <label>Input field</label>
                <div>
                    <input onChange={(e)=>setSearch(e.target.value)}></input>
                    <button type="submit" >Search</button>
                </div>
                <div>
                        <a href="#" onClick={filteredMethod} className="text-dark">Advanced filter</a>
                        <i className="fa-solid fa-chevron-down"></i>
                </div>
                
            </form>
        </div>
    )
}

export default Input;