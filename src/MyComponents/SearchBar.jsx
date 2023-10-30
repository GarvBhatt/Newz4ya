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
    props.setisItTrueLeonard(true);
    props.setq(tempInput);
  };

  const handleKeyPress = (e) => {
    if (e.code === "Enter") {
      props.setq(tempInput);
      handleSearch(e);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center m-4">
      <Row>
        <Col xs="auto">
          <Form.Control
            type="text"
            style={{border:"inset black 1px"}}
            onChange={inputHandler}
            onKeyDown={handleKeyPress}
            placeholder="Enter any keyword"
            className="mr-sm-2"
          />
        </Col>
        <Col xs="auto">
          <Button type="button" onClick={handleSearch}>
            Search
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBar;