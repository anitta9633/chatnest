import { useState } from "react";
import { Button, Col, Container, Image, Modal, Row, Table } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteLipstick} from "../redux/lipstickSlice";
import { toast } from "react-toastify";

const ListLipsticks = () => {
    const [show, setShow] = useState(false);

    const[deleteLipstickId,setdeleteLipstickId] = useState(null)
    const { lipsticks } = useSelector((state) => state.lipstickState);
    const dispatch = useDispatch()
    const handleClose = () => setShow(false);

    const handleLipstickDelete = (lipstickId) => {
        console.log("lipstickId------>",lipstickId)
        setdeleteLipstickId(lipstickId)
        setShow(true);

    }
    const confirmDelete =()=>{
        dispatch(deleteLipstick(deleteLipstickId))
        toast.success("lipstick deleted!")
        setShow(false);
    }
    return (
        <Container className="mt-4">
            <Row>
                <Col className="d-flex justify-content-between">
                    <h4>
                        List lipsticks
                    </h4>
                    <Link className="btn btn-primary" to={"/admin/add-product"}>
                        Add lipstick
                    </Link>
                </Col>
            </Row>
            {lipsticks.length > 0 ? (<Row className="mt-3">
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Lipstick Photo</th>
                                <th>Lipstick Name</th>
                                <th>Lipstick Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lipsticks.map((product, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td><Image style={{ width: "80px" }} src={lipstick.lipstickPhoto} alt={lipstick.lipstickName} /></td>
                                    <td>{lipstick.lipstickName}</td>
                                    <td>{lipstick.lipstickPrice}</td>
                                    <td>
                                        <Link to={`/admin/edit-lipstick/${lipstick.id}`}>
                                            <FaEdit size={28} />
                                        </Link>
                                    </td>
                                    <td>
                                        <MdDelete onClick={()=>handleProductDelete(lipstick.id)} size={28} />
                                    </td>
                                </tr>
                            ))}


                        </tbody>
                    </Table>
                </Col>
            </Row>
            ) : (
                <Row className="mt-3">
                    <Col>
                        <h4 className="text-center">
                            lipsticks not found
                        </h4>
                    </Col>
                </Row>
            )}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are u sure u want to delete this item!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={confirmDelete}>
                        delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>

    )
}
export default ListLipsticks;