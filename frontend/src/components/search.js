import React from 'react'
import axios from 'axios'

const api = axios.create({
    baseURL : 'http://localhost:8000/items'
  })

const Search = ({customSearchInput, setItemList, setCustomSearchInput, setUpdateDBItemList}) => {

    const HandleSearch = (event) => {
        event.preventDefault()
        console.log("Searching : " + customSearchInput)
        try{
        api.get(
                `/${customSearchInput}`
                ,
                {
                    headers: {'Access-Control-Allow-Origin': '*'},
                    proxy: {
                      host: 'localhost',
                      port: 800
                    }
                })
                .then((response) => {
                response.status >= 200 && response.status < 300 ? 
                setItemList([response.data]) : 
                console.log("Error Occurred while searching the data : " + response.status)
            })
        }
        catch(exeception){
            console.log("Exception occurred when tried to hit the get using id api : " + exeception)
        }
        setCustomSearchInput('')
    }

    const HandleReset = () => {
        console.log("Reseting Search Input")
        setCustomSearchInput('')
        setUpdateDBItemList("true")
    }

    return (
        <div className="form-wrapper">
            <form onSubmit={HandleSearch}>
                <div className="full-width">
                    <input 
                        type="text" 
                        placeholder="Item ID"
                        className="task-input"
                        required
                        value={customSearchInput}
                        onChange={(event) => {setCustomSearchInput(event.target.value)}}
                    />
                </div>
                <div className="incline-content">
                    <button className="button" onClick={() => HandleReset()}>Reset</button>
                    <button className="button" type="submit">Search</button>
                </div>
            </form>
        </div>
    )
}

export default Search
