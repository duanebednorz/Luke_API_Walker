import React, {useEffect, useState} from 'react';
import {navigate} from "@reach/router"
import axios from 'axios';


const ApiCall = (props) => {
// *****************************************************************************
    const [swStats, setSwStats] = useState({});
    const [dropKeys, setDropKeys] = useState([]);
    const [formInfo, setFormInfo] = useState({
        term: "people",
        idInput: '',
    })
// ******************************************************************************
    useEffect(() => {
        axios.get("https://swapi.dev/api/", {
            // headers: {"Access-Control-Allow-Origin": '*'}
        })
        .then(response=>{
            
            console.log("Here's the response format********************", response);
            // setSwStats(response.data.films.count);
            console.log("Here's another way to look at it **********")
            setDropKeys(Object.keys(response.data))
        })
            .catch(err=>{
            console.log("There's an error son!",err);
        });
    }, [formInfo]);
// ****************************************************************************
    const changeHandler = (e) =>{
        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
    }
// ****************************************************************************
    const submitHandle = (e) =>{
        e.preventDefault();
        navigate(`/${formInfo.term}/${formInfo.idInput}`)
    };

    // *************************************************************************
    return (
        <>
        <div>
            <form onSubmit = {submitHandle} >
                <p>Search for:<select onChange ={changeHandler} name="term" id="">
                    {
                    dropKeys.map((each, i) =>{
                        return <option key = {i} value={each}>{each}</option>
                    })
                    }
                    </select></p>
                <p>ID:<input type="text" onChange= {changeHandler} name="idInput" id=""/></p>
                <input className="btn-success" type="submit" value="Look at my Stuff!" />
            </form>
        </div>
        <hr/>
        <div>
            <h1>Man, that's some good stuff!</h1>
        </div>
        </>
    );
};


export default ApiCall;