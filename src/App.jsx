import Header from "./MyComponents/Header.jsx";
import NewsBox from "./MyComponents/NewsBox.jsx";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import SearchBar from "./MyComponents/SearchBar.jsx";

let App = () =>{
    const [isItTrueLeonard, setisItTrueLeonard] = useState(true);
    const [q, setq] = useState("taylor-swift");
    const [pageNo, setpageNo] = useState(1);

    return (
      <div>
        <Header />
        <SearchBar setisItTrueLeonard={setisItTrueLeonard} setq={setq}/>
        <NewsBox isItTrueLeonard={isItTrueLeonard} q={q} setisItTrueLeonard={setisItTrueLeonard} pageNo={pageNo}/>
        <div className="container d-flex justify-content-between">
          <Button disabled={pageNo==1} className="btn-lg m-4 px-5" variant="dark" type="button" onClick={()=>{setpageNo(pageNo-1);setisItTrueLeonard(true)}}>Prev</Button>
          
          <div>
            {pageNo>2 && <Button className="btn-lg my-4 mx-2 px-4" variant="dark" type="button" onClick={()=>{setpageNo(pageNo-2);setisItTrueLeonard(true)}}>{pageNo-2}</Button>}
            {pageNo>1 && <Button className="btn-lg my-4 mx-2 px-4 " variant="dark" type="button" onClick={()=>{setpageNo(pageNo-1);setisItTrueLeonard(true)}}>{pageNo-1}</Button>}
            <Button className="btn-lg my-4 mx-2 px-4 page-item active" variant="dark" type="button">{pageNo}</Button>
            {pageNo<12 && <Button className="btn-lg my-4 mx-2 px-4" variant="dark" type="button" onClick={()=>{setpageNo(pageNo+1);setisItTrueLeonard(true)}}>{pageNo+1}</Button>}
            {pageNo<11 && <Button className="btn-lg my-4 mx-2 px-4" variant="dark" type="button" onClick={()=>{setpageNo(pageNo+2);setisItTrueLeonard(true)}}>{pageNo+2}</Button>}
          </div>
          
          <Button disabled={pageNo==12} className="btn-lg m-4 px-5" variant="dark" type="button" onClick={()=>{setpageNo(pageNo+1);setisItTrueLeonard(true)}}>Next</Button>
        </div>
      </div>
    );
}

export default App;