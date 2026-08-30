import { useState } from 'react';
import { Container, Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userLogin } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Get users array from Redux
    const users = useSelector((state) => state.userState.users);

    const [validated, setValidated] = useState(false);

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (event) => {

        event.preventDefault();

        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }

        // Find user
        const user = users.find(
            (u) => u.email === loginData.email
        );

        if (!user) {
            toast.error("User not found!");
            return;
        }

        // Check password
        if (user.password !== loginData.password) {
            toast.error("Invalid credentials!");
            return;
        }

        // Login user
        dispatch(userLogin(user));

        toast.success("User logged successfully");

        navigate("/");
    };

    const handleChange = (event) => {

        setLoginData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }));

    };

    console.log("loginData ------>", loginData);
    console.log("users ------>", users);

    return (
        <Container className="mt-4">

            <Row className="justify-content-center">

                <Col md={4}>

                    <h4 className="text-center mb-4">
                        User Login
                    </h4>

                    <Form
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >

                        <Row className="mb-3">

                            <Form.Group
                                as={Col}
                                controlId="validationCustom01"
                            >

                                <Form.Label>
                                    Email
                                </Form.Label>

                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    value={loginData.email}
                                    onChange={handleChange}
                                />

                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>

                                <Form.Control.Feedback type="invalid">
                                    Enter Email
                                </Form.Control.Feedback>

                            </Form.Group>

                        </Row>

                        <Row className="mb-3">

                            <Form.Group
                                as={Col}
                                controlId="validationCustom02"
                            >

                                <Form.Label>
                                    Password
                                </Form.Label>

                                <Form.Control
                                    required
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={loginData.password}
                                    onChange={handleChange}
                                />

                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>

                                <Form.Control.Feedback type="invalid">
                                    Enter Password
                                </Form.Control.Feedback>

                            </Form.Group>

                        </Row>

                        <div className="d-grid">

                            <Button type="submit">
                                Login
                            </Button>

                        </div>

                    </Form>

                    <Row>

                        <Col className="mt-3 text-center">

                            If you don't have an account,{' '}

                            <Link to="/register">
                                Register now
                            </Link>

                        </Col>

                    </Row>

                </Col>

            </Row>

        </Container>
    );
}

export default Login;