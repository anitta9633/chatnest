
import { Container, Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as formik from "formik";
import * as yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { editLipstick } from "../redux/lipstickSlice";

function EditLipstick() {
    const { Formik } = formik;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    // Get notes from Redux
    const { lipsticks } = useSelector((state) => state.lipstickState);

    // Find note using URL id
    const lipstick = lipsticks.find(
        (li) => li.id === Number(id)
    );

    const schema = yup.object().shape({
        lipstickName: yup
            .string()
            .required("Enter lipstick name"),

       lipstickDescription: yup
            .string()
            .required("Enter lipstick description"),

        lipstickPrice: yup
            .number()
            .typeError("Enter a valid price")
            .required("Enter lipstick price"),

        lipstickPhoto: yup
            .string()
            .required("Add photo"),
    });

    // Handle Edit Note
    const handleEditLipstick = (values) => {
        const updatedLipstick = {
            ...values,
            id: Number(id),
        };

        dispatch(editLipstick(updatedLipstick));

        toast.success("lipstick updated successfully");

        navigate("/admin/list-lipstick");
    };

    // If note doesn't exist
    if (!lipstick) {
        return (
            <h4 className="text-center mt-4">
                lipstick not found!
            </h4>
        );
    }

    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col md={4}>

                    <h4 className="text-center mb-4">
                        Edit  Lipstick
                    </h4>

                    <Formik
                        validationSchema={schema}
                        onSubmit={handleEditLipstick}
                        initialValues={{
                            lipstickName:lipstick.lipstickName,
                            lipstickDescription: lipstick.lipstickDescription,
                            lipstickPrice: lipstick.lipstickPrice,
                            lipstickPhoto: lipstick.lipstickPhoto,
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

                                {/* Note Name */}
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

                                {/* Note Description */}
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        controlId="lipstickDescription"
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

                                {/* Note Price */}
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
                                            value={values.lipstickPrice}
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

                                {/* Note Photo */}
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
                                        Update Lipstick
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

export default EditLipstick;

