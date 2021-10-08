import React, {useState, useEffect} from "react";
import './App.css';
import Header from './components/header';
import AddItemForm from './components/addItemForm';
import ItemCardList from "./components/itemCardList";
import axios from 'axios'

const api = axios.create({
  baseURL : 'http://localhost:8000/items'
})

const App = () => {
  const[customSearchInput, setCustomSearchInput] = useState('')
  const[ID, setID] = useState('')
  const[name, setName] = useState('')
  const[description, setDescription] = useState('')
  const[price, setPrice] = useState('')
  const[count, setCount] = useState('')
  const[imageLink, setImageLink] = useState('')
  const[editItem, setEditItem] = useState(null)
  const[itemList, setItemList] = useState([])
  const[updateDBItemList, setUpdateDBItemList] = useState(false)

  useEffect(() => {
    console.log("Fetching List from DB!")
    try{
      api.get('/',
      {
        headers: {'Access-Control-Allow-Origin': '*'},
        proxy: {
          host: 'localhost',
          port: 800
        }
      }
      ).then((response) => {
        if(response.status >= 200 && response.status < 300){
          setItemList(response.data)
        }
        else{
          console.log("Error Occurred while fetching the data : " + response.status)
        }
      })
    }
    catch(exeception){
        console.log("Exception occurred when tried to hit the get all api : " + exeception)
    }
  }, [updateDBItemList])

  return (
    <>
      <div className="app-container">
        <div className="app-wrapper">
          <div className="">
            <div className="row">
              <div className="app">
                <div className="col-4 sidenav">
                  <Header
                    customSearchInput={customSearchInput}
                    setItemList={setItemList}
                    setCustomSearchInput={setCustomSearchInput}
                    setUpdateDBItemList={setUpdateDBItemList}
                  />
                  <AddItemForm 
                    ID={ID}
                    name={name} 
                    description={description} 
                    price={price} 
                    count={count}
                    imageLink={imageLink}

                    setID={setID}
                    setName={setName} 
                    setDescription={setDescription} 
                    setPrice={setPrice} 
                    setCount={setCount}
                    setImageLink={setImageLink}

                    editItem={editItem}
                    setEditItem={setEditItem}
                    setUpdateDBItemList={setUpdateDBItemList}
                    />
                </div>
                <div className="col-4"></div>
                <div className="col-8">
                  <ItemCardList
                    editItem={editItem}
                    itemList={itemList} 

                    setID={setID}
                    setName={setName} 
                    setDescription={setDescription} 
                    setPrice={setPrice} 
                    setCount={setCount}
                    setImageLink={setImageLink}
                    setItemList={setItemList}
                    setEditItem={setEditItem}
                    setUpdateDBItemList={setUpdateDBItemList}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
