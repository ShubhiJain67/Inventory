import React from "react";
import {v4 as uuidv4} from "uuid";

const AddItemForm = ({ID, name, description, price, count, imageLink, dbItemList, setID, setName, setDescription, setPrice, setCount, setImageLink, setItemList, setDbItemList, editItem, setEditItem}) => {

    const onNameChange = (event) => {
        setName(event.target.value)
    }
    const onDescriptionChange = (event) => {
        setDescription(event.target.value)
    }
    const onPriceChange = (event) => {
        setPrice(event.target.value)
    }
    const onCountChange = (event) => {
        setCount(event.target.value)
    }
    const onImageLinkChange = (event) => {
        setImageLink(event.target.value)
    }
    const onIDChange = (event) => {
        setID(event.target.value)
    }

    const HandleReset = () => {
        console.log("Reseting Form")
        setEditItem(null)
        setID('')
        setName('')
        setDescription('')
        setCount('')
        setPrice('')
        setImageLink('')
    }

    const HandleSubmit = (event) => {
        console.log("Submitting Form")
        event.preventDefault();
        if(editItem){
            console.log("Updating an Item")
            var edited = false;
            setItemList(
                dbItemList.map((item) => {
                    if(item.id === ID){
                        console.log("Find Item with the Editing ID")
                        edited = true;
                        return {
                            id:`${ID}`,
                            name:`${name}`,
                            description: `${description}`,
                            price: `${price}`,
                            count: `${count}`,
                            imageLink: `${imageLink}`,
                        } 
                    }else{
                        return item
                    }
                })
            )
            if(!edited){
                setEditItem(null)
            }
            setDbItemList(dbItemList)
        }
        if(!editItem){
            console.log("Adding a new Item")
            dbItemList.push(
                {
                    id:uuidv4(),
                    name:`${name}`,
                    description: `${description}`,
                    price: `${price}`,
                    count: `${count}`,
                    imageLink: `${imageLink}`,
                }
            )
            setItemList(dbItemList)
            setDbItemList(dbItemList)
            /*fetch('http://localhost:8000/items', {
                method: 'POST',
                body: JSON.stringify({
                    id:uuidv4(),
                    name:`${name}`,
                    description: `${description}`,
                    price: {price},
                    count: {count},
                    imageLink: `${imageLink}`,
                })
            })*/
        }
        setEditItem(null)
        setID('')
        setName('')
        setDescription('')
        setCount('')
        setPrice('')
        setImageLink('')
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
                        onChange={onIDChange}
                    />
                </div>
                <div className="full-width">
                    <input 
                        type="text" 
                        placeholder="Name"
                        className="task-input"
                        required
                        value={name}
                        onChange={onNameChange}
                    />
                </div>
                <div className="full-width">
                    <input 
                        type="text" 
                        placeholder="Description" 
                        className="task-input"
                        value={description}
                        onChange={onDescriptionChange}
                    />
                </div>
                <div className="full-width">
                    <input 
                        type="text" 
                        placeholder="Price" 
                        className="task-input"
                        value={price}
                        onChange={onPriceChange}
                    />
                </div>
                <div className="full-width">
                    <input 
                        type="text" 
                        placeholder="Count" 
                        className="task-input"
                        value={count}
                        onChange={onCountChange}
                    />
                </div>
                <div className="full-width">
                    <input 
                        type="text" 
                        placeholder="Image Link" 
                        className="task-input"
                        value={imageLink}
                        onChange={onImageLinkChange}
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