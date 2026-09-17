import { Container, Row ,Col, Card} from "react-bootstrap"
import { useSelector } from "react-redux"

const AdminDashboard = () => {
    const {lipsticks} = useSelector((state)=>state.lipstickState);
     const {users} = useSelector((state)=>state.userState);
    return (
        <Container>
            <Row>
                <Col>
                    <h4>
                        Dashboard
                    </h4>
                </Col>
            </Row>
            <Row>

                <Col md={3}>
                    <Card bg='primary' text='light'>
                        <Card.Body>
                            <Card.Title>Total lipstick</Card.Title>
                            <h1>
                                {lipsticks?.length}
                            </h1>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
             <Row>

                <Col md={3}>
                    <Card bg='secondary' text='light'>
                        <Card.Body>
                            <Card.Title>Total users</Card.Title>
                            <h1>
                                {users?.length}
                            </h1>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default AdminDashboard