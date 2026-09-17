
import { Button, Card, Col, Container, Row, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import * as formik from "formik";
import * as yup from "yup";
import { userProfileUpdate } from "../redux/userSlice";
import { toast } from "react-toastify";

const Profile = () => {
    const { Formik } = formik;

    const { user } = useSelector((state) => state.userState);

    console.log("user------>", user);

    const [isEdit, setIsEdit] = useState(false);
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

    const handleUpdateProfile = (values) => {
        values.id = user.id;
       dispatch(userProfileUpdate(values));
       toast.success("profile updated");
       setIsEdit(false);
    };

    const handleEditStatus = () => {
        setIsEdit(true);
    };
const cancelEdit = ()=>{
    setIsEdit(false)
}
    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col md={4}>

                    <Row>
                        <Col>
                            <h3>User Profile</h3>
                        </Col>
                    </Row>

                    {/* Profile View */}
                    {!isEdit ? (
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            {user?.fullname}
                                        </Card.Title>

                                        <h5>
                                            Email: {user?.email}
                                        </h5>

                                        <Button
                                            variant="primary"
                                            onClick={handleEditStatus}
                                        >
                                            Edit Profile
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    ) : (

                        /* Edit Profile Form */
                        <Row>
                            <Col>
                                <Formik
                                    validationSchema={schema}
                                    onSubmit={handleUpdateProfile}
                                    initialValues={{
                                        fullname: user.fullname,
                                        email:  user.email,
                                        password: user.password,
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
                                                        Full Name
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
                                                <Button
                                                    type="submit"
                                                    variant="primary"
                                                >
                                                    Update Profile
                                                </Button>
                                            </div>
                                             <div className="d-grid mt-3">
                                                <Button
                                                    type="button"
                                                    onClick={cancelEdit}
                                                    variant="secondary"
                                                >
                                                    cancel
                                                </Button>
                                            </div>

                                        </Form>
                                    )}
                                </Formik>
                            </Col>
                        </Row>
                    )}

                </Col>
            </Row>
        </Container>
    );
};

export default Profile;

