import React from 'react'
import ItemCard from './itemCard'

const ItemCardList = ({itemList, setID, setName, setDescription, setPrice, setCount, setImageLink, setItemList, setDbItemList, setEditItem}) => {
    
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
                setItemList = {setItemList}
                setDbItemList={setDbItemList}
                setEditItem = {setEditItem}
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
