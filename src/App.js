import React, {useState, useEffect} from 'react'

const App = () => {
const url = 'https://jsonplaceholder.typicode.com/users'
const [todos, setTodos] = useState()
const fetchApi = async ()=>{
const response = await fetch(url)
console.log(response.status)
const responseJSON = await response.json()
setTodos(responseJSON)
console.log(responseJSON)
}
useEffect(() => {
  fetchApi()
}, [])
    return (
        <div className='flex flex-wrap  px-2 py-1 space-x-0.5 > * + * ' >
           
            
            { !todos ? 'Cargando...':
                todos.map((todo,index)=>{
                    return (
                  <div className='w-1/1 my-8 lg:my-12 p-2 bg-gray-200 rounded-md shadow-inner '>
                       <ul className='rounded-md border border-gray-300 p-3 text-blue-900 bg-blue-200  text-center mr-0.5	 '>
                        <li>{todo.id}</li>
                        <li className='text-white text-xl font-serif'>Name: {todo.name}</li>
                       
                        <li>Username: {todo.username}</li>
                        <li>Email: {todo.email}</li>
                        <li>Address:</li>
                        <li>Street: {todo.address.street}</li>
                        <li>City: {todo.address.city}</li>
                        <li>Suite: {todo.address.suite}</li>
                        <li>Zipcode: {todo.address.zipcode}</li>
                        <li>Lat: {todo.address.geo.lat}</li>
                        <li>Lng:{todo.address.geo.lng}</li>
                   </ul>
                   </div>

                    )
                })
            }
            
        
        </div>
    )
}

export default App
