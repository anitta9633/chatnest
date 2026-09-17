import { Col, Container, Form, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { userRoleChange, userStatusChange } from "../redux/userSlice";

const ListUsers = () => {

    const { users } = useSelector((state) => state.userState);

    const dispatch = useDispatch();

    const handleUserRoleChange = (userId, event) => {

        dispatch(
            userRoleChange({
                id: userId,
                role: event.target.value
            })
        );

        toast.success("User role updated");
    };
    const handleUserStatusChange = (userId) => {
        console.log("userId------->",userId)
        dispatch(userStatusChange(userId));
        toast.success("user status updated");
    }

    return (
        <Container className="mt-4">

            <Row>
                <Col>
                    <h4>List Users</h4>
                </Col>
            </Row>

            {users && users.length > 0 ? (

                <Row className="mt-3">

                    <Col>

                        <Table striped bordered hover>

                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Fullname</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Role</th>
                                </tr>
                            </thead>

                            <tbody>

                                {users.map((user, i) => (

                                    <tr key={user.id || i}>

                                        <td>{i + 1}</td>

                                        <td>
                                            {user.fullname}
                                        </td>

                                        <td>
                                            {user.email}
                                        </td>

                                        <td>
                                            <Form.Check // prettier-ignore
                                            type="switch"
                                            defaultChecked={user.status}
                                           
                                            label={user.status ? "Active" : "Inactive"}
                                            onChange={()=>handleUserStatusChange(user.id)}
                                        />
                                        </td>

                                        <td>

                                            <Form.Select
                                                value={user.role || "user"}
                                                onChange={(event) =>
                                                    handleUserRoleChange(
                                                        user.id,
                                                        event
                                                    )
                                                }
                                            >

                                                <option value="admin">
                                                    Admin
                                                </option>

                                                <option value="seller">
                                                    Seller
                                                </option>

                                                <option value="user">
                                                    User
                                                </option>

                                            </Form.Select>

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
                            Users not found
                        </h4>

                    </Col>

                </Row>

            )}

        </Container>
    );
};

export default ListUsers;