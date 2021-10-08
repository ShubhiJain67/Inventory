import React from 'react'
import axios from 'axios'

const api = axios.create({
    baseURL : 'http://localhost:8000/'
  })

const Search = ({customSearchInput, setItemList, setCustomSearchInput, setUpdateDBItemList}) => {
    const onSearchInputChange = (event) => {
        setCustomSearchInput(event.target.value)
    }

    const HandleSearch = (event) => {
        event.preventDefault()
        console.log("Searching : " + customSearchInput)
        try{
            api.get(
                `/items/${customSearchInput}`
                ,
                {
                    headers: {'Access-Control-Allow-Origin': '*'}
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
    }

    const HandleReset = () => {
        console.log("Reseting Search Input")
        setUpdateDBItemList(true)
        setCustomSearchInput('')
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
                        value={customSearchInput.customSearchInput}
                        onChange={onSearchInputChange}
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
