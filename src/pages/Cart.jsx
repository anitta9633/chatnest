
import { useState } from "react";
import { Button, Col, Container, Form, Image, InputGroup, Modal, Row, Table } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { decrementItemQuantity, deleteLipstick, incrementItemQuantity, removeCartItem } from "../redux/lipstickSlice";
import { toast } from "react-toastify";
import "./Cart.css"

const Cart = () => {
    const [show, setShow] = useState(false);
    const [removeLipstickId, setRemoveLipstickId] = useState(null);

    const { cartItems } = useSelector((state) => state.lipstickState);
    const dispatch = useDispatch();

    const handleClose = () => setShow(false);

    const handleRemoveCartItem = (lipstickId) => {
        console.log("lipstickId------>", lipstickId);
        setRemoveLipstickId(lipstickId);
        setShow(true);
    };

    const confirmRemove = () => {
        dispatch(removeCartItem(removeLipstickId));
        toast.success("Item removed from cart!");
        setShow(false);
    };

    const handleQuantityincrement = (itemId)=>{
        dispatch(incrementItemQuantity(itemId));

    }
    const handleQuantitydecrement= (itemId)=>{
        dispatch(decrementItemQuantity(itemId));
        
    }
    
    const cartTotal = cartItems.reduce((total,item)=>total  +item.productPrice*item.quantity,0)

    return (
        <Container className="mt-4">

            <Row>
                <Col className="d-flex justify-content-between">
                    <h4>Cart Items</h4>
                </Col>
            </Row>

            {cartItems.length > 0 ? (
                <Row className="mt-3">
                    <Col>
                        <Table striped bordered hover>

                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Lipstick Photo</th>
                                    <th>Lipstick Name</th>
                                    <th>Lipstick Price</th>
                                    <th className="w-12">Quantity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {cartItems.map((item, i) => (
                                    <tr key={i}>

                                        <td>{i + 1}</td>

                                        <td>
                                            <Image
                                                style={{ width: "80px" }}
                                                src={item.lipstickPhoto}
                                                alt={item.lipstickName}
                                            />
                                        </td>

                                        <td>{item.lipstickName}</td>

                                        <td>{item.lipstickPrice}</td>

                                        <td className="cart"> <InputGroup className="mb-3">
                                            <Button disabled={item.quantity < 2 ? true:false} variant="danger" onClick={()=>handleQuantitydecrement(item.id)}>
                                                -
                                            </Button>
                                            <Form.Control
                                               value={item.quantity}
                                               readOnly
                                            />
                                            <Button variant="success" onClick={()=>handleQuantityincrement(item.id)}>
                                                +
                                            </Button>
                                        </InputGroup></td>

                                        <td>
                                           <MdDelete onClick={() =>handleRemoveCartItem(item.id)}
                                                size={28}
                                                style={{ cursor: "pointer" }}
                                            />
                                        </td>

                                    </tr>
                                ))}
                                <tr>
                                <td colspan={6} className="text-end">
                                        Total price :{cartTotal}
                                    </td>
                                    </tr>
                            </tbody>

                        </Table>
                    </Col>
                </Row>
            ) : (
                <Row className="mt-3">
                    <Col>
                        <h4 className="text-center">
                            Your cart is empty
                        </h4>
                    </Col>
                </Row>
            )}

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Remove cart Item</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Are you sure you want to remove this item?
                </Modal.Body>

                <Modal.Footer>

                    <Button
                        variant="secondary"
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>

                    <Button
                        variant="danger"
                        onClick={confirmRemove}
                    >
                        Remove
                    </Button>


                </Modal.Footer>

            </Modal>

        </Container>
    );
};

export default Cart;

