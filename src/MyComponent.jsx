// updater function - aloows update based on previous data
// c- previous count represent

import React, {useState} from 'react'

function MyComponent () {

  const [foods,setFoods] = useState(['apple','banana','orange','kiwi']);

  function handleAddChange () {
    const newFood = document.querySelector('#foodinput').value;
    document.querySelector('#foodinput').value = '';

    setFoods(f=>[...f, newFood]);
  }

  function handleRemoveChange (index) {
    setFoods(foods.filter((_, i) => i !== index));
  }
  

  
  return (
    <div>
    <h2>List of Food</h2>
    <ul>
      {foods.map((food,index) => 
      <li key={index} onClick={() => handleRemoveChange (index)}> 
      {food}
       </li>)}
    </ul>
    <input type='text' id='foodinput' placeholder='enter food name'/>
    <button  onClick={handleAddChange}>Add Food</button>
    </div>
  )

}

export default MyComponent