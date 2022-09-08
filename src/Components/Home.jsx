import React from 'react'
import Category from "../Components/Category/Category";
import Main from "../Components/Main/Main";
import Navbar from "../Components/Navbar/Navbar";
import Searchbar from "../Components/Searchbar/Searchbar";

function Home() {
  return (
    <div>
         <Navbar />
      <Searchbar />
      <Category />
      <Main />
    </div>
  )
}

export default Home