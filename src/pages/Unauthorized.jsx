import { Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom";

const Unauthorized = () => {
    return (
        <Container className="text-center mb-4">
            <Row>
                <Col>
                    <Card>
                      
                        <Card.Body>
                            <Card.Title className="dispay-3 text-danger">403</Card.Title>
                            <Card.Text>
                                u dont have permission to access this resource.
                            </Card.Text>
                            <Link className="btn btn-primary">Go to Home page</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default Unauthorized;