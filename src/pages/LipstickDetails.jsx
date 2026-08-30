import React from 'react';
import { Button, Col, Container, Image, ListGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const LipstickDetails = ({ lipsticks }) => {
    const { id } = useParams();

    const lipstick = lipsticks.find((lr) => lr.id === Number(id));

    console.log("lipstick--------->", lipstick);

    return (
        <Container className="mt-4">
            <Row>
                <Col md={3}>
                    <Image
                        src={lipstick.lipstickPhoto}
                        alt={lipstick.lipstickName}
                    />
                </Col>

                <Col md={9}>
                    <ListGroup variant="flush">

                        <ListGroup.Item>
                            <h2>{lipstick.lipstickName}</h2>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h4>{lipstick.lipstickPrice}</h4>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            {lipstick.lipstickDescription}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Button>
                                Add to cart
                            </Button>
                        </ListGroup.Item>

                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default LipstickDetails;