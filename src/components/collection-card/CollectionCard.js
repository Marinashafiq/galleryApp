import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './CollectionCard.scss';
import Badge from 'react-bootstrap/Badge';
import { Link } from "react-router-dom";


const CollectionCard = (props) => {
    if (props.previewPhotos !== undefined) {
        var previewImages = props.previewPhotos.map((request) => <Col xs={6} key={request.urls.thumb}> <div className="backgroundImg" style={{ backgroundImage: 'url(' + request.urls.thumb + ')' }}> </div></Col>)
        var tags = props.tags.map((tag) => <Badge pill variant="warning" className="mr-2" key={tag.title}>{tag.title}</Badge>)
    }

    return (
        <div>
            <Link to={`/collections/${props.id}`} >
                <Card className="border-0 shadow mb-3">
                    <Container>
                        <Row>
                            {previewImages}
                        </Row>
                    </Container>
                    <Card.Body>
                        <Card.Title>
                            {/* <Image src={props.previewPhotos} roundedCircle /> */}
                            <small className="text-secondary">Collection</small>
                            <strong className="d-block">{props.title}</strong>
                        </Card.Title>
                        <Card.Text>
                            {props.description}
                        </Card.Text>
                        {tags}
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between">
                        <small className="text-muted">Total Photos : {props.totalPhotos}</small>
                    </Card.Footer>
                </Card>
            </Link>
        </div>
    )
}

export default CollectionCard;
