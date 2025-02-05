import React, {useEffect, useState} from 'react'
import './App.css';

function App() {
    const handleData = ()=>{
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>console.log(json))
    };    
    const [inputField,setInputFields] = useState([{value: ""}]);
    // Function to update the value of input field  //
    const handleValueChange = (index,event ) => {
        const values = [...inputField];
        values[index].value = event.target.value;
        setInputFields(values);
    };
    // Function to add a new input field //
    const handleAddFields = ()=> {
        setInputFields([...inputField, {value: ""}]);
    };

    // Function to delete an input Field  //
      const handleRemoveFields = (index) => {
        const newInputFields = [...inputField]
        newInputFields.splice(index,1);
        setInputFields(newInputFields);
      };


  return <div className='container'>
    <h2>Dynamic Input Fields </h2>

    {inputField.map((inputField,index) => (
        <div className='input-container' key={index}>
            <input
            type='text'
            placeholder='Enter a value'
            value={inputField.value}
            onChange={(e) => handleValueChange(index,e)}
            />
            <buttton onClick={handleData}>Hello</buttton>
            <button className='delete-btn' onClick={() => handleRemoveFields(index)}>
            <span class="material-symbols-outlined delete-icon">delete</span> 
          </button>
            </div>
    ))}
    <button className='add-btn' onClick={handleAddFields}>
    <span class="material-symbols-outlined add-icon">add</span>Add Field
    </button>
  </div>

  
}

export default App