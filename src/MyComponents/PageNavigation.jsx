import { Button } from "react-bootstrap";
import "../style/style.css";

const PageNavigation = (props) =>{
    return(
        <div className="container d-flex justify-content-between" style={{maxHeight:"95px"}}>
        <Button disabled={props.pageNo==1} className="btn-lg my-4 noHover" variant="dark" type="button" style={{margin:"8px !important"}} onClick={()=>{props.setpageNo(props.pageNo-1);props.setisItTrueLeonard(true)}}>Prev</Button>
        
        <div>
          {/* {props.pageNo>2 && <Button className="btn-lg my-4 mx-2 noHover" variant="dark" type="button" onClick={()=>{props.setpageNo(props.pageNo-2);props.setisItTrueLeonard(true)}}>{props.pageNo-2}</Button>} */}
          {props.pageNo>1 && <Button className="btn-lg my-4 mx-2 noHover" variant="dark" type="button" onClick={()=>{props.setpageNo(props.pageNo-1);props.setisItTrueLeonard(true)}}>{props.pageNo-1}</Button>}
          <Button className="btn-lg my-4 mx-2 page-item active noHover" variant="dark" type="button">{props.pageNo}</Button>
          {props.pageNo<12 && <Button className="btn-lg my-4 mx-2 noHover" variant="dark" type="button" onClick={()=>{props.setpageNo(props.pageNo+1);props.setisItTrueLeonard(true)}}>{props.pageNo+1}</Button>}
          {/* {props.pageNo<11 && <Button className="btn-lg my-4 mx-2 noHover" variant="dark" type="button" onClick={()=>{props.setpageNo(props.pageNo+2);props.setisItTrueLeonard(true)}}>{props.pageNo+2}</Button>} */}
        </div>
        
        <Button disabled={props.pageNo==12} className="btn-lg my-4 noHover" variant="dark" type="button" onClick={()=>{props.setpageNo(props.pageNo+1);props.setisItTrueLeonard(true)}}>Next</Button>
      </div>
    )
}

export default PageNavigation;