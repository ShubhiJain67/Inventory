import React, {useState} from "react";
import './App.css';
import Header from './components/header';
import AddItemForm from './components/addItemForm';
import ItemCardList from "./components/itemCardList";

const App = () => {
  const axios = require('axios').default;
  const[customSearchInput, setCustomSearchInput] = useState('')
  const[ID, setID] = useState('')
  const[name, setName] = useState('')
  const[description, setDescription] = useState('')
  const[price, setPrice] = useState('')
  const[count, setCount] = useState('')
  const[imageLink, setImageLink] = useState('')
  const[editItem, setEditItem] = useState(null)
  
  /*const[itemList, setItemList] = useState(
    [
      {
        id:1,
        name:"Title 1",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 20,
        count: 2,
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/440px-Glass_of_Milk_%2833657535532%29.jpg",
      },
      {
        id:2,
        name:"Title 2",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        price: 200,
        count: 2,
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/440px-Glass_of_Milk_%2833657535532%29.jpg",
      },
      {
        id:3,
        name:"Title 3",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 1800,
        count: 2,
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/440px-Glass_of_Milk_%2833657535532%29.jpg",
      },
      {
        id:4,
        name:"Title 2",
        description: "Description 2",
        price: 200,
        count: 2,
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/440px-Glass_of_Milk_%2833657535532%29.jpg",
      },
      {
        id:5,
        name:"Title 3",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 1800,
        count: 2,
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/440px-Glass_of_Milk_%2833657535532%29.jpg",
      }
    ]
  );*/
  const[itemList, setItemList] = useState([]);
  const[dbItemList, setDbItemList] = useState(itemList)
  console.log("Fetching!")
  axios.get('http://localhost:8000/items').then(function (response) {
    // handle success
    if(response.status === 200){
      console.log(response.data);
      setItemList(response.data)
      setDbItemList(response.data)
    }
  })
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
                    itemList={itemList}
                    dbItemList={dbItemList}
                    setItemList={setItemList}
                    setDbItemList={setDbItemList}
                    setCustomSearchInput={setCustomSearchInput}
                  />
                  <AddItemForm 
                    ID={ID}
                    name={name} 
                    description={description} 
                    price={price} 
                    count={count}
                    imageLink={imageLink}
                    dbItemList={dbItemList}

                    setID={setID}
                    setName={setName} 
                    setDescription={setDescription} 
                    setPrice={setPrice} 
                    setCount={setCount}
                    setImageLink={setImageLink}
                    setItemList={setItemList}
                    setDbItemList={setDbItemList}

                    editItem={editItem}
                    setEditItem={setEditItem}
                    />
                </div>
                <div className="col-4"></div>
                <div className="col-8">
                  <ItemCardList
                    itemList={itemList} 

                    setID={setID}
                    setTitle={setName} 
                    setDescription={setDescription} 
                    setPrice={setPrice} 
                    setCount={setCount}
                    setImageLink={setImageLink}
                    setItemList={setItemList}
                    setDbItemList={setDbItemList}
                    setEditItem={setEditItem}
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
