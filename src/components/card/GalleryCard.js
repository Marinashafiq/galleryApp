import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltDown ,faHeart } from '@fortawesome/free-solid-svg-icons'
import { useAlert } from 'react-alert'
import LazyImage from "react-lazy-progressive-image";
import Loader from '../loader/Loader';
import {Modal , ModalDialog  , ModalHeader  , ModalTitle  , ModalBody ,ModalFooter , Button } from 'react-bootstrap'
import './GalleryCard.scss';

const GalleryCard = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const alert = useAlert();
    function download() {
        props.downloadImageId(props.id)
        alert.show('Thanks , Wait Downloading');
    }

    function MyVerticallyCenteredModal(props) {
        // console.log(props);
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {/* <FontAwesomeIcon onClick={download} icon={faLongArrowAltDown} className="text-warning downloadIcon"/> */}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-0">
                <div className="backgroundImg" style={{ backgroundImage: 'url(' + props.imageurl + ')' }}> </div>
            </Modal.Body>
          </Modal>
        );
      }

    return (
        <div>
            <Card className="border-0 shadow mb-3" onClick={() => setModalShow(true)}>
                <div className="zoom-in-image">
                <LazyImage               
                    placeholder={"https://cdn.dribbble.com/users/2046015/screenshots/6015680/08_404.gif"}
                    src={props.url}
                >
                    {(src, loading, isVisible) =><Card.Img variant="top"  src={src} />
}
                </LazyImage>
                </div>
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                        <div className="userData">
                            <Image src={props.user.profile_image.small} roundedCircle />
                            <small className="mx-2">{props.user.name}</small>
                        </div>
                    <FontAwesomeIcon onClick={download} icon={faLongArrowAltDown} className="text-warning downloadIcon"/>
                    </Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <small className="text-muted">{props.created_at}</small>
                    <small className="text-muted">
                        <FontAwesomeIcon icon={faHeart} className="mr-1"/>
                        {props.likes}
                    </small>
                </Card.Footer>
            </Card>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                imageurl = {props.url}
            />
        </div>
    )
}

export default GalleryCard;
