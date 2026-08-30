import { Container, Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as formik from "formik";
import * as yup from "yup";
import { userRegister } from "../redux/userSlice";
import { useDispatch } from "react-redux";

function Register() {
    const { Formik } = formik;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const schema = yup.object().shape({
        fullname: yup
            .string()
            .required("Enter fullname")
            .min(2, "Fullname should contain min 2 characters"),

        email: yup
            .string()
            .required("Enter email")
            .email("Enter a valid email"),

        password: yup
            .string()
            .required("Enter password")
            .min(6, "Password should contain at least 6 characters"),
    });

    const handleRegister = (values) => {
        values.id = Date.now();
        values.role = "user";
        values.status = true;

        dispatch(userRegister(values));

        toast.success("User registered successfully");

        navigate("/login");
    };

    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col md={4}>
                    
                    <Row>
                        <Col>
                            <h4 className="text-center mb-4">
                                User Register
                            </h4>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Formik
                                validationSchema={schema}
                                onSubmit={handleRegister}
                                initialValues={{
                                    fullname: "",
                                    email: "",
                                    password: "",
                                }}
                            >
                                {({
                                    handleSubmit,
                                    handleChange,
                                    values,
                                    touched,
                                    errors,
                                }) => (
                                    <Form
                                        noValidate
                                        onSubmit={handleSubmit}
                                    >
                                        {/* Full Name */}
                                        <Row className="mb-3">
                                            <Form.Group
                                                as={Col}
                                                controlId="validationFormik01"
                                            >
                                                <Form.Label>
                                                    Full name
                                                </Form.Label>

                                                <Form.Control
                                                    type="text"
                                                    name="fullname"
                                                    value={values.fullname}
                                                    onChange={handleChange}
                                                    isValid={
                                                        touched.fullname &&
                                                        !errors.fullname
                                                    }
                                                    isInvalid={
                                                        touched.fullname &&
                                                        !!errors.fullname
                                                    }
                                                />

                                                <Form.Control.Feedback type="invalid">
                                                    {errors.fullname}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>

                                        {/* Email */}
                                        <Row className="mb-3">
                                            <Form.Group
                                                as={Col}
                                                controlId="validationFormik02"
                                            >
                                                <Form.Label>
                                                    Email
                                                </Form.Label>

                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    isValid={
                                                        touched.email &&
                                                        !errors.email
                                                    }
                                                    isInvalid={
                                                        touched.email &&
                                                        !!errors.email
                                                    }
                                                />

                                                <Form.Control.Feedback type="invalid">
                                                    {errors.email}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>

                                        {/* Password */}
                                        <Row className="mb-3">
                                            <Form.Group
                                                as={Col}
                                                controlId="validationFormik03"
                                            >
                                                <Form.Label>
                                                    Password
                                                </Form.Label>

                                                <Form.Control
                                                    type="password"
                                                    name="password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    isValid={
                                                        touched.password &&
                                                        !errors.password
                                                    }
                                                    isInvalid={
                                                        touched.password &&
                                                        !!errors.password
                                                    }
                                                />

                                                <Form.Control.Feedback type="invalid">
                                                    {errors.password}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>

                                        {/* Submit Button */}
                                        <div className="d-grid mt-3">
                                            <Button type="submit">
                                                Register
                                            </Button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Register;