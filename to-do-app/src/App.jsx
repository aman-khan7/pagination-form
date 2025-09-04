import { useState } from 'react' 
function App() {
  const [serchbox, setSerchBox] = useState("")
  const [items, setItems] = useState([])
 

const handleAdd = () => {
  if(!serchbox){
  return undefined
  }
  setItems([...items, {serchbox, iscompleted: false}])
  setSerchBox("")
}

const handleDelet = (index) => {
 
   
  let newItems = items.filter((_,i) => {
    return index !== i
  })
  setItems(newItems)
 
}
 
  return (
    <div>
     
      <div className='flex min-h-screen min-w-screen bg-white justify-center items-center ' >

        <div className='flex-col justify-center items-center h-1/2 w-1/2 bg-violet-50  pl-40 pb-5 rounded-2xl'>       
             <h1 className='flex justify-center text-3xl font-serif  text-violet-800 rounded-3xl mb-4 pr-40  '>My To Do List 
             </h1> 
              
        <input className='outline-violet-400 mr-2 w-1/2 bg-white font-serif text-1xl' placeholder='serchbox' type='text' value={serchbox} onChange={(e) => {setSerchBox(e.target.value)}}/>

        <button onClick={ handleAdd } className='cursor-pointer  bg-violet-700 text-white rounded-md text-1xl font-serif transform transition-transform duration-300  hover:bg-violet-800 hover:scale-x-120 hover:scale-y-120  pl-2 pr-2 '>Add</button>
     
        <ul>
          {
            items.map((item,index) => {
              return(
            
                 <li key={index} className=' flex justify-between  mt-5 w-80  min-w-80'>{item.serchbox}
                  <div className={item.iscompleted? "line-through": ""}>{item.items}</div>
                 <button onClick={(e) => {  handleDelet(index)}} className= 'cursor-pointer flex h-full  bg-violet-700 text-white rounded-md text-1xl font-serif transform transition-transform duration-300 hover:bg-violet-800 hover:scale-x-120 hover:scale-y-120  pl-2 pr-2 '>delete</button>
          
                 </li>
    
              )
            
            })
          
          }
        </ul>
        </div>
        
      </div>
    </div>
 

      
  )
}


export default App



