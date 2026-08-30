
import { Container, Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as formik from "formik";
import * as yup from "yup";

import { useDispatch } from "react-redux";
import { addLipstick } from "../../redux/lipstickSlice";

function AddLipstick() {
    const { Formik } = formik;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const schema = yup.object().shape({
        lipstickName: yup
            .string()
            .required("Enter item name"),

        lipstickDescription: yup
            .string()
            .required("Enter item description"),

       lipstickPrice: yup
            .number()
            .typeError("Enter a valid price")
            .required("Enter item price"),

        lipstickPhoto: yup
            .string()
            .required("Add photo"),
    });

    const handleAddLipstick = (values) => {
        const lipstick = {
            ...values,
            id: Date.now(),
        };

        dispatch(addLipstick(lipstick));

        toast.success("Lipstick added successfully");

        navigate("/admin/list-lipstick");
    };

    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col md={4}>

                    <h4 className="text-center mb-4">
                        Add Lipstick
                    </h4>

                    <Formik
                        validationSchema={schema}
                        onSubmit={handleAddLipstick}
                        initialValues={{
                            lipstickName: "",
                            lipstickDescription: "",
                            lipstickPrice: "",
                           lipstickPhoto: "",
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

                                {/* Item Name */}
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        controlId="lipstickName"
                                    >
                                        <Form.Label>
                                            Lipstick Name
                                        </Form.Label>

                                        <Form.Control
                                            type="text"
                                            name="lipstickName"
                                            value={values.lipstickName}
                                            onChange={handleChange}
                                            isValid={
                                                touched.lipstickName &&
                                                !errors.lipstickName
                                            }
                                            isInvalid={
                                                touched.lipstickName &&
                                                !!errors.lipstickName
                                            }
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.lipstickName}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                {/* Item Description */}
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        controlId="itemDescription"
                                    >
                                        <Form.Label>
                                            Lipstick Description
                                        </Form.Label>

                                        <Form.Control
                                            as="textarea"
                                            rows={5}
                                            name="lipstickDescription"
                                            value={values.lipstickDescription}
                                            onChange={handleChange}
                                            isValid={
                                                touched.lipstickDescription &&
                                                !errors.lipstickDescription
                                            }
                                            isInvalid={
                                                touched.lipstickDescription &&
                                                !!errors.lipstickDescription
                                            }
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.lipstickDescription}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                {/* Item Price */}
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        controlId="itemPrice"
                                    >
                                        <Form.Label>
                                            Lipstick Price
                                        </Form.Label>

                                        <Form.Control
                                            type="number"
                                            name="lipstickPrice"
                                            value={values.itemPrice}
                                            onChange={handleChange}
                                            isValid={
                                                touched.lipstickPrice &&
                                                !errors.lipstickPrice
                                            }
                                            isInvalid={
                                                touched.lipstickPrice &&
                                                !!errors.lipstickPrice
                                            }
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.lipstickPrice}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                {/* Item Photo */}
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        controlId="lipstickPhoto"
                                    >
                                        <Form.Label>
                                            Lipstick Photo
                                        </Form.Label>

                                        <Form.Control
                                            type="text"
                                            name="lipstickPhoto"
                                            value={values.lipstickPhoto}
                                            onChange={handleChange}
                                            isValid={
                                                touched.lipstickPhoto &&
                                                !errors.lipstickPhoto
                                            }
                                            isInvalid={
                                                touched.lipstickPhoto &&
                                                !!errors.lipstickPhoto
                                            }
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.lipstickPhoto}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                {/* Submit Button */}
                                <div className="d-grid mt-3">
                                    <Button type="submit">
                                        Add Lipstick
                                    </Button>
                                </div>

                            </Form>
                        )}
                    </Formik>

                </Col>
            </Row>
        </Container>
    );
}

export default AddLipstick;

