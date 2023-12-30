import React, { useEffect, useState } from 'react'
import "./style.css"

const getLocalData = ()=>{
  const lists = localStorage.getItem("myTodoList");

  if(lists){
    return JSON.parse(lists);
  }
  else{
    return [];
  }
};

const Todo = () => {
  const [inputData, setInputData] = useState("")
  // const [items, setItems] = useState([]);
  const [items, setItems] = useState(getLocalData());

  const [isEditItem, setIsEditItem] = useState();
  const [toggleButton , setToggleButton] = useState(false)


  const addItem = ()=>{
      if(!inputData){
        alert("Please fill your task!!!");
      }
      else if(inputData && toggleButton){
        setItems(
          items.map((curElem)=>{
            if(curElem.id === isEditItem){
              return {...curElem, name:inputData}
            }
            return curElem;
          })
        )
        setInputData("");
        setIsEditItem(null);
        setToggleButton(false);
      }
      else{

        const myNewInputData = {
          id: new Date().getTime().toString(),
          name: inputData,
        };
        setItems([...items, myNewInputData]);
        setInputData("");
      }
  };

  const editItem = (index)=>{
    const editedItem = items.find((val)=>{
      return val.id === index;
    })

    setInputData(editedItem.name);
    setIsEditItem(index);
    setToggleButton(true);
  }


  const deleteItem = (index)=>{
    const updatedItems = items.filter((val)=>{
      return val.id !== index;
    })

    setItems(updatedItems);
  }

  const removeAll = ()=>{
    setItems([]);
  }

  useEffect(() => {
    localStorage.setItem("myTodoList", JSON.stringify(items))
  }, [items])
  

  return (
    <>
    <div className="main-div">
        <div className="child-div">
            <figure>
                <img src="./images/todo.svg" alt="icon" />
                <figcaption>Add your List Here</figcaption>
            </figure>
            <div className="addItems">
              <input 
              type="text" 
              placeholder="Add Item" 
              className="form-control"
              
                value={inputData}
                onChange={(e)=>setInputData(e.target.value)}
              />


              {/* ternary operator */}
              {toggleButton ? <i className="fa-solid fa-pen-to-square" onClick={addItem}></i> : <i className="fa fa-plus add-btn" onClick={addItem}></i>}
              
            </div>

            <div className="showItems">
              {
                items.map((curElem, index)=>{
                  return (
                  <div className="eachItem" key={index}>
                  <h3>{curElem.name}</h3>
                  <div className="todo-btn">
                  <i className="fa-solid fa-pen-to-square" 
                  onClick={()=>editItem(curElem.id)}></i>

                  <i class="fa-solid fa-trash" 
                  onClick={()=>deleteItem(curElem.id)}></i>
                  
                  </div>
                  </div> )
                })
              }
            </div>

            <div className="showItems">
              <button className="btn effect04"
              data-sm-link-text="REMOVE ALL"

              onClick={removeAll}
              ><span>CHECK LIST</span></button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Todo