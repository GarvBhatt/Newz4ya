import Header from "./MyComponents/Header.jsx";
import SearchBar from "./MyComponents/SearchBar.jsx";
import NewsBox from "./MyComponents/NewsBox.jsx";
import PageNavigation from "./MyComponents/PageNavigation.jsx";
import Footer from "./MyComponents/Footer.jsx";
import About from "./MyComponents/About.jsx";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

let App = () =>{
  const [isItTrueLeonard, setisItTrueLeonard] = useState(true);
  const [q, setq] = useState("Taylor-Swift");
  const [pageNo, setpageNo] = useState(1);

  document.title = `Newz4ya - ${q}`;

  return (
      <div>
        <Router>
          <Header title={" Newz4ya"} setq={setq}/>
          <Routes>
            <Route path="/Newz4ya" element={
              <>
                <SearchBar setisItTrueLeonard={setisItTrueLeonard} setq={setq}/>
                <NewsBox isItTrueLeonard={isItTrueLeonard} q={q} setisItTrueLeonard={setisItTrueLeonard} pageNo={pageNo}/>
                <PageNavigation pageNo={pageNo} setpageNo={setpageNo} setisItTrueLeonard={setisItTrueLeonard}/>
              </>
            }/>
            <Route path="/about" element={<About/>}/>
          </Routes>
          <Footer/>
        </Router>
      </div>
    );
}

export default App;