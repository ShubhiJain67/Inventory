import React from 'react'
import axios from 'axios'

const api = axios.create({
    baseURL : 'http://localhost:8000/items'
  })

const ItemCard = ({item, itemList, setID, setName, setDescription, setPrice, setCount, setImageLink, setEditItem, setUpdateDBItemList}) => {
    
    const handleDelete = ({id}) => {
        console.log("Deleting an Item : " + id)
        try{
            api.delete(
                `/${id}`,
                {
                    headers: {
                    'Access-Control-Allow-Origin': '*',
                    }
                },
                {
                    headers: {'Access-Control-Allow-Origin': '*'}
                }
                ).then(function (response) {
                console.log("Deleting from database : " + response.data);
            })
        }
        catch(exeception){
            console.log("Exception occurred when tried to hit the delete api : " + exeception)
        }
        setUpdateDBItemList(true)
    }

    const handleEdit = ({id}) => {
        console.log("Editing an Item : " + id)
        const targetItemList = itemList.filter((i) => i.id === id)
        if(targetItemList && targetItemList.length > 0){
            const targetItem = targetItemList[0]
            setEditItem(targetItem)
            setID(targetItem.id)
            setName(targetItem.name)
            setDescription(targetItem.description)
            setPrice(targetItem.price)
            setCount(targetItem.count)
            setImageLink(targetItem.imageLink)
        }
    }
    return (
        <div className="item-card-wrapper" key={item.id}>
                <div className="item-card">
                    <h1 className="item-name">{item.name}</h1>
                    <img src={item.imageLink} alt={item.name} title={item.name} className="item-image"/>
                    <p className="item-description">{item.description}</p>
                    <div className="item-detail">
                        <div>Rs. {item.price} / pc</div>
                        <div>Count : {item.count}</div>
                    </div>
                    <div className="task-buttons">
                        <button className="button-edit task-button" onClick={() => handleEdit(item)}>
                            <i className="fa fa-edit"></i>
                        </button>

                        <button className="button-delete task-button" onClick={() => handleDelete(item)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default ItemCard
