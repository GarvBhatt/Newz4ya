import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

let NewsCard = (props) => {
  return (
    <Card>
      <span className="position-absolute top-0 start-80 translate-middle badge rounded-pill bg-danger" style={{left:"90%", zIndex:"1"}}>
        {props.newsObj.source.name}
      </span>
        <Card.Img style={{height:"271px"}} variant="top" src={props.newsObj.imgUrl} />

        <Card.Body>

          <Card.Title>{props.newsObj.title.substring(0,75)}{props.newsObj.title.length>75 && "..."}</Card.Title>

          <Card.Text>{props.newsObj.cardText.substring(0,85)+"..."}</Card.Text>

          <ListGroup className="list-group-flush">

            <ListGroup.Item></ListGroup.Item>
            <ListGroup.Item><b>Author</b> : {(!props.newsObj.author || props.newsObj.author.substring(0, 4)==="http")?"unknown":props.newsObj.author}</ListGroup.Item>
            <ListGroup.Item><b>Published at :</b> {new Date(props.newsObj.timeAndDate).toDateString()}</ListGroup.Item>

            <ListGroup.Item className="d-flex justify-content-center">
              <Button variant="dark" style={{width:"255px"}} onClick={()=>window.open(props.newsObj.url, "_blank")}>Read More</Button>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
    </Card>
  );
};

export default NewsCard;