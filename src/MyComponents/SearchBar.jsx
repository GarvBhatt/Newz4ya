import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";

const SearchBar = (props) => {
  const [tempInput, setTempInput] = useState("");

  const inputHandler = (e) => {
    if (e.target.value) {
      setTempInput(e.target.value);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    props.setq(tempInput);
  };

  const handleKeyPress = (e) => {
    if (e.code === "Enter") {
      props.setq(tempInput);
      handleSearch(e);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{marginLeft:"11px", marginBottom:"5px", marginTop:"135px"}}>
      <Row>
        <Col className="px-0" xs="auto">
          <Form.Control
            type="text"
            style={{border:"inset black 1px",width:"285px"}}
            onChange={inputHandler}
            onKeyDown={handleKeyPress}
            placeholder="Enter any keyword"
            className="mr-sm-2"
          />
        </Col>
        <Col className="px-2" xs="auto">
          <Button style={{width:"87px"}} type="button" onClick={handleSearch}>
            Search
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBar;