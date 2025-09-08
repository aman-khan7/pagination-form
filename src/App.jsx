import { useState } from "react"

function App() {

   const [currentPage, setCurrentPage] = useState(1);
   const [postPerPage, setPostPerPage] = useState(10)


const items = Array.from({length:100},
    (_,i) => `Item ${i+1}`)

    const selectedPageHandler = (selectedPage) => {
      if(selectedPage >= 1 &&
        selectedPage <= ItemsPerPage &&
        selectedPage !== currentPage
      )
      setCurrentPage(selectedPage)
    }

  const lastPostindex = currentPage * postPerPage;
  const firstPostIndex = lastPostindex - postPerPage;
  const currentPosts = items.slice(firstPostIndex,lastPostindex) 
  console.log(currentPosts)
  const ItemsPerPage  = Math.ceil(items.length/postPerPage)

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
  <label>Items Per Page
  <select value={postPerPage} onChange = {(e) => {setPostPerPage(e.target.value),setCurrentPage(1)}}  >
    <option  value={setPostPerPage}>10</option>
    <option  value={setPostPerPage}>20</option>
    <option value={setPostPerPage}>30</option>
    <option value={setPostPerPage}>40</option>
    <option value={setPostPerPage}>50</option>
  </select>
  </label>
<div className="pr-10 pl-10 gap-5 border-black  flex justify-between items-center bg-gray-100 cursor-pointer">
  <span className={currentPage > 1? "cursor-pointer p-2 bg-violet-600 rounded-md text-white" : "opacity-1"}  onClick={() => {selectedPageHandler(currentPage-1)}}>previous</span>
  {
   [...Array(ItemsPerPage)].map((_,i) => {
    return <span key={i} className= {currentPage === i+1 ? "text-white  bg-blue-600" : ""}

     onClick={() => {selectedPageHandler(i+1)}}><div className= "  p-2 cursor-pointer  hover:bg-blue-800  hover:text-white">{i+1}</div></span>
   })
  }
  <span  onClick={() => {selectedPageHandler(currentPage+1)}} className={currentPage < ItemsPerPage? "cursor-pointer p-2 bg-violet-600 rounded-md text-white" : "opacity-0"}
  >next</span>
</div>
<div>
  </div>
  </div>  
      </div>  
      </div>  
  )
}
export default App