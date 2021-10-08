import React from "react";
import axios from 'axios'

const api = axios.create({
    baseURL : 'http://localhost:8000/items'
  })

const AddItemForm = ({ID, name, description, price, count, imageLink, setID, setName, setDescription, setPrice, setCount, setImageLink, editItem, setEditItem, setUpdateDBItemList}) => {
    const HandleReset = () => {
        console.log("Reseting Form")
        setEditItem(null)
        setID('')
        setName('')
        setDescription('')
        setCount('')
        setPrice('')
        setImageLink('')
        setUpdateDBItemList("true")
    }
    const AddItemInDB = () => {
        try{
            api.post('/',
            {
                "id":Math.floor(Math.random() * 1000001),
                "name":`${name}`,
                "description": `${description}`,
                "price": price,
                "count": count,
                "imageLink": `${imageLink}`,
            },
            {
                headers: {'Access-Control-Allow-Origin': '*'}
            }
            ).then((response) => {
                console.log(response)
                response.status >= 200 && response.status < 300 ?
                console.log("Sucessfully added the data" + response.status)
                : console.log("Error Occurred while adding the data : " + response.status)
            })
        }
        catch(exeception){
            console.log("Exception occurred when tried to hit the post api : " + exeception)
        }
    }
    const EditItemInDB = () => {
        try{
            api.put(`/${ID}`,
            {
                "id":ID,
                "name":`${name}`,
                "description": `${description}`,
                "price": price,
                "count": count,
                "imageLink": `${imageLink}`,
            },
            {
                headers: {'Access-Control-Allow-Origin': '*'}
            }
            ).then((response) => {
                response.status >= 200 && response.status < 300 ?
                console.log("Sucessfully edited the data : " + response.status)
                : console.log("Error Occurred while editing the data : " + response.status)
            })
        }
        catch(exeception){
            console.log("Exception occurred when tried to hit the put api : " + exeception)
        }
    }
    const HandleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting Form")
        if(editItem){
            console.log("Updating an Item : " + ID)
            var edited = false;
            EditItemInDB()
            if(!edited){
                setEditItem(null)
            }
        }
        if(!editItem){
            console.log("Adding a new Item")
            AddItemInDB()
        }
        HandleReset()
    }

    return (
        <div className="form-wrapper">
            <form onSubmit={HandleSubmit}>
                <div className="hidden">
                    <input 
                        type="text" 
                        placeholder="ID"
                        className="task-input"
                        value={ID}
                        onChange={(event) => {setID(event.target.value)}}
                    />
                </div>
                <div className="full-width">
                    <input 
                        type="text" 
                        placeholder="Name"
                        className="task-input"
                        required
                        value={name}
                        onChange={(event) => {setName(event.target.value)}}
                    />
                </div>
                <div className="full-width">
                    <input 
                        type="text" 
                        placeholder="Description" 
                        className="task-input"
                        value={description}
                        onChange={(event) => {setDescription(event.target.value)}}
                    />
                </div>
                <div className="full-width">
                    <input 
                        type="number" 
                        placeholder="Price" 
                        className="task-input"
                        value={price}
                        onChange={(event) => {setPrice(event.target.value)}}
                    />
                </div>
                <div className="full-width">
                    <input 
                        type="number" 
                        placeholder="Count" 
                        className="task-input"
                        value={count}
                        onChange={(event) => {setCount(event.target.value)}}
                    />
                </div>
                <div className="full-width">
                    <input 
                        type="text" 
                        placeholder="Image Link" 
                        className="task-input"
                        value={imageLink}
                        onChange={(event) => {setImageLink(event.target.value)}}
                    />
                </div>
                <div className="incline-content">
                    <button className="button" onClick={() => HandleReset()}>Reset</button>
                    <button className="button" type="submit">{!editItem? "Add Item" : "Update Item"}</button>
                </div>
            </form>
        </div>
    )
}

export default AddItemForm