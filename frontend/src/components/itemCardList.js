import React from 'react'
import ItemCard from './itemCard'

const ItemCardList = ({itemList, setID, setName, setDescription, setPrice, setCount, setImageLink, setEditItem, setUpdateDBItemList}) => {
    
    const ItemCards = (itemList).map((item) => {
        return (
            <ItemCard 
                item = {item}
                itemList = {itemList}
                setID = {setID}
                setName = {setName}
                setDescription = {setDescription}
                setPrice = {setPrice}
                setCount = {setCount}
                setImageLink = {setImageLink}
                setEditItem = {setEditItem}
                setUpdateDBItemList = {setUpdateDBItemList}
            />
        )
    })

    return (
        <div className="item-card-list-wrapper">
            <div className="item-card-list">
                {ItemCards}
            </div>
        </div>
    )
}

export default ItemCardList
