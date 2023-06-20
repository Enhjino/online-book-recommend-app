import React from 'react';
export const SearchBar = () =>{
return (
      <div className="flex  justify-around w-1/2 h-10 border-4 border-white-400 leadinng-10  rounded-3xl bg-white">
          <input
            className=" outline-none w-5/6 h-full text-gray-500 "
            type="search"
            placeholder="Search book name here..."
            onChange={handleSearchChange}
            filter={filteredBooks}
          ></input>
          <button className=" w-1/8" onClick={()=>navigate('/search', {state : {value: searchField}} )} >
            <img className=" h-3/4 w-3/4" src={searchImage} alt="search" />
          </button>
        </div>
)
};