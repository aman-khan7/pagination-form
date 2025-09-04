import { useState } from "react"
 



function App() {

   const [currentPage, setCurrentPage] = useState(1);
   const [postPerPage, setPostPerPage] = useState(10)


const items = Array.from({length:100},
    (_,i) => `Item ${i+1}`)

    const selectedPageHandler = (selectedPage) => {
      if(selectedPage >= 1 &&
        selectedPage <= items.length/10 &&
        selectedPage !== currentPage
      )
      setCurrentPage(selectedPage)
    }


  const lastPostindex = currentPage * postPerPage;
  const firstPostIndex = lastPostindex - postPerPage;
  const currentPosts = items.slice(firstPostIndex,lastPostindex) 
  console.log(currentPosts)

  return (
    <div>
      <h1 className=" flex justify-center text-3xl font-bold">Pagination Example</h1>
      <div>
        <ul>
        {
          currentPosts.map((currentPosts,i) => {
            return(
              
              <div className="flex justify-center ">
                      
                 <li className="mb-2 bg-violet-50 rounded-md w-20" key={i}>{currentPosts}</li> 
           </div>
            )           
          })
        }           
</ul> 
<div>
<div className="pr-10 pl-10 gap-5 border-black  flex justify-center">
  <span className={currentPage > 1? "p-2 bg-violet-600 rounded-md text-white" : "opacity-0"}  onClick={() => {selectedPageHandler(currentPage-1)}}>left</span>
  {
   [...Array(items.length/10)].map((_,i) => {
    return <span key={i} className= {currentPage === i+1 ? " text-white pagination__selection bg-blue-600 p-2 cursor-pointer  " : ""}

     onClick={() => {selectedPageHandler(i+1)}}>{i+1}</span>
   })
  }
  <span  onClick={() => {selectedPageHandler(currentPage+1)}} className={currentPage < items.length/10? "p-2 bg-violet-600 rounded-md text-white" : "opacity-0"}
  >right</span>
</div>

<div>
  </div>
  </div>  


      </div>  
      </div>
     
      
  )
}



export default App