import DataMain from "../dataMain.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";



function Header(props) {

    

    let CountryList = [];
    DataMain.map((e, index) => {
        CountryList.push(e.tableData["Issuing Country"]);
        })
    
        CountryList.unshift("All");

    const UniqueArray = new Set(CountryList);
    CountryList = Array.from(UniqueArray);
    let MetalList = [];
    DataMain.map((e, index) => {
        MetalList.push(e.tableData["Composition"]);
    })
    MetalList.unshift("All");
    const SecArray = new Set(MetalList);
    MetalList = Array.from(SecArray);
    let QualityList = [];
    DataMain.map((e, index) => {
        QualityList.push(e.tableData["Quality"]);
    })
    QualityList.unshift("All")
    const ThirdArray = new Set(QualityList);
    QualityList = Array.from(ThirdArray);



    const [filter, setFilter] = useState(false);
    const [search, setSearch] = useState('');
    const [select, setSelect] = useState("All");
    const [metal, setMetal] = useState("All");
    const [minPrice, setMinPrice] = useState(1);
    const [maxPrice, setMaxPrice] = useState(150);
    const [minYear, setMinYear] = useState(1);
    const [maxYear, setMaxYear] = useState(2022);

    const navigate = useNavigate()
    function filteredMethod() {
        setFilter(!filter);
        props.f(filter)
    }

    const inputFunction =(e) => {
        setSearch(e.target.value);
    }

    const selectFunction = (e) => {
        setSelect(e.target.value);
    }

    const metalFunction = (e) => {
        setMetal(e.target.value)
    }

    const minPriceFunction = (e) => {
        setMinPrice(e.target.value)
    }

    const maxPriceFunction = (e) => {
        setMaxPrice(e.target.value)
    }

    const minYearFunction = (e) => {
        setMinYear(e.target.value);
    }

    const maxYearFunction = (e) => {
        setMaxYear(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/coinlist`)

        const any = DataMain.filter((e) => {
            let inputName = e.name.toLowerCase().includes(search.toLowerCase());
            let country = select != "All" ? e.tableData["Issuing Country"] === select:e;
            let metalion = metal != "All" ? e.tableData["Composition"] === metal:e;
            let minimumPrice = minPrice < Number(e.tableData["Price"].slice(0, e.tableData["Price"].indexOf("$")));
            let maximumPrice = maxPrice > Number(e.tableData["Price"].slice(0, e.tableData["Price"].indexOf("$")));
            let minimumYear = minYear < Number(e.tableData["Year"]);
            let maximumYear = maxYear > Number(e.tableData["Year"]);

            return country && metalion && minimumPrice && maximumPrice && minimumYear && maximumYear && inputName;
        })
        props.t(any)
    }

    const [input, setInput] = useState(false);
    function filteredMethod() {
        setInput(!input);
        console.log(input);
    }

    return (
        <div className="header">
            <div className="Input">
                <form onSubmit={handleSubmit}>
                    <label>Input field</label>
                    <div>
                        <input onChange={inputFunction}></input>
                        <button type="submit" >Search</button>
                    </div>
                    <div>
                        <a href="#" onClick={filteredMethod} className="text-dark">Advanced filter</a>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    {input && 
                    <div className="Filter" >
                        <div className="inFilter">
                            <div className="Left">
                                <div>
                                    <label>Issuing country</label>
                                    <select onChange={selectFunction}>

                                        {CountryList.map((e, index) => {
                                            return <option key={index}>{e}</option>
                                        })}
                                    </select>

                                </div>
                                <div>
                                    <label>Metal</label>
                                    <select onChange={metalFunction}>
                                        {MetalList.map((e, index) => {
                                            return <option key={index}>{e}</option>
                                        })}
                                    </select>
                                </div>
                                <div>
                                    <label>Quality of the coin</label>
                                    <select>
                                        {QualityList.map((e, index) => {
                                            return <option key={index}>{e}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="Right">
                                <div>
                                    <label>Price</label>
                                    <label>
                                        from
                                        <input onChange={minPriceFunction}>
                                        </input>
                                        to
                                        <input onChange={maxPriceFunction}>
                                        </input>
                                    </label>
                                </div>
                                <div>
                                    <label>Year of issue</label>
                                    <label>
                                        from
                                        <input onChange={minYearFunction}>
                                        </input>
                                        to
                                        <input onChange={maxYearFunction}>
                                        </input>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div> }
                </form>
            </div>

        </div>
    )
}


export default Header;