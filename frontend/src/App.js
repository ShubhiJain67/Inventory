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
  
  const[itemList, setItemList] = useState(
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
        id: 6,
        name: "Milk",
        description: "Amul Milk",
        price: 18,
        count: 1,
        imageLink: "https://5.imimg.com/data5/JW/MJ/FG/ANDROID-75951370/product-jpeg-500x500.jpg"
      },
      {
        id: 7,
        name: "Chocolate",
        description: "Cadbury’s Chocolate",
        price: 20,
        count: 10,
        imageLink: "https://m.media-amazon.com/images/I/61NBWdPq-7L._SL1500_.jpg"
      },
      {
        id: 8,
        name: "Banana",
        description: "Right from farm",
        price: 30,
        count: 1,
        imageLink: "https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg"
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
        name:"Title 4",
        description: "Description 4",
        price: 200,
        count: 2,
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/440px-Glass_of_Milk_%2833657535532%29.jpg",
      },
      {
        id:5,
        name:"Title 5",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 1800,
        count: 2,
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/440px-Glass_of_Milk_%2833657535532%29.jpg",
      }
    ]
  );
  const[dbItemList, setDbItemList] = useState(itemList)
  // console.log("Fetching!")
  // axios.get('http://localhost:8000/items').then(function (response) {
  //   // handle success
  //   if(response.status === 200){
  //     // console.log(response.data);
  //     setItemList(response.data)
  //     setDbItemList(response.data)
  //   }
  // })
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
                    dbItemList={dbItemList}
                    setItemList={setItemList}
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
                    setName={setName} 
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
