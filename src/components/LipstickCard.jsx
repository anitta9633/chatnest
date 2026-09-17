import { useState } from "react";
import { Button, Card, Col } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/lipstickSlice";

const LipstickCard = ({ handleIncrement, lipstick}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(lipstick));
    toast.success("Note added to cart");
  };
    
    // console.log("cartCount----->,cartCount");
    console.log("lipstick------>",lipstick);
    return (
        <Col md={6} lg={4} xl={3} className='mt-3'>
            
            <Card>
              <Link to={`/product/${lipstick.id}`}>
                <Card.Img variant="top" src={lipstick.lipstickPhoto} />
</Link>
                <Card.Body>
                    <Card.Title>{lipstick.lipstickName}</Card.Title>
                    <Card.Text>
                        {lipstick.lipstickDescription}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>handleAddToCart(lipstick)}>add to cart</Button>
                </Card.Body>

            </Card>
            </Col>
            )
        }

export default LipstickCard