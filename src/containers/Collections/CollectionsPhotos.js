import React from 'react';
import { connect } from 'react-redux';
import { requestCollectionPhotos, requestCollectionId, requestDownloadPhoto, requestRelatedCollections, requestPagination } from '../../store/actions/index';
import GalleryCard from '../../components/card/GalleryCard';
import { Container, Row, Col } from 'react-bootstrap';
import CardColumns from 'react-bootstrap/CardColumns';
import Pagination from '../pagination/Pagination';
import CollectionCard from '../../components/collection-card/CollectionCard';
import CardDeck from 'react-bootstrap/CardDeck';
import Navigation from '../../containers/navigation/Navigation';
import NavElement from '../../components/navbar/Navbar';

class CollectionsPhotos extends React.Component {

    componentDidMount() {
        const { requestCollectionPhotos, requestCollectionId, requestRelatedCollections , requestPagination } = this.props;
        requestCollectionPhotos(1, this.props.computedMatch.params.id);
        requestCollectionId(this.props.computedMatch.params.id);
        requestRelatedCollections(1, this.props.computedMatch.params.id);
        requestPagination(1);
    }

    downloadImage = (imageId) => {
        const { requestDownloadPhoto } = this.props;
        requestDownloadPhoto(imageId);
    }

    componentDidUpdate(prevProps) {
        const { requestCollectionPhotos, requestCollectionId, requestRelatedCollections, requestPagination } = this.props;
        if (
            prevProps.computedMatch.params.id !== this.props.computedMatch.params.id
        ) {
            requestCollectionPhotos(1, this.props.computedMatch.params.id);
            requestPagination(1);
            requestCollectionId(this.props.computedMatch.params.id);
            requestRelatedCollections(1, this.props.computedMatch.params.id);
        }
    }

    renderPhotosList = () => {
        const { collectionPhotos } = this.props;
        if (!collectionPhotos) {
            return (
                <div>Loading ...</div>
            )
        }
        return collectionPhotos.map(photo => {
            photo.created_at = this.convertTime(photo.created_at)
            return (
                <GalleryCard
                    id={photo.id}
                    key={photo.id}
                    url={photo.urls.full}
                    name={photo.id}
                    created_at={photo.created_at}
                    description={photo.description}
                    likes={photo.likes}
                    user={photo.user}
                    downloadImageId={this.downloadImage}

                />
            )
        });
    }

    renderRelatedCollections = () => {
        const { relatedCollections } = this.props;
        if (!relatedCollections) {
            return (
                <div className="text-white"> Still Loading ... </div>
            )
        }
        else {
            return relatedCollections.map(photo => {
                return (
                    <Col xs={12} key={photo.id}>
                        <CollectionCard
                            id={photo.id}
                            key={photo.id}
                            previewPhotos={photo.preview_photos}
                            tags={photo.tags}
                            title={photo.title}
                            totalPhotos={photo.total_photos}
                            description={photo.description}
                        />
                    </Col>
                )

            })
        }
    }

    convertTime(createdAt) {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let created_at_date = new Date(createdAt).toLocaleDateString('en-US', options);
        return created_at_date;
    }

    render() {
        return (
            <div>
                <NavElement />
                <div className="photosContainer my-5">
                    <Row>
                        <Col md={3}>
                        <h5 className="text-warning mb-4">Related Collections</h5>
                            <Row>                               
                                {this.renderRelatedCollections()}
                            </Row>
                        </Col>
                        <Col md={9}>
                            <h2 className="text-white">Collection's Photos</h2>
                            <blockquote className="blockquote mb-0 text-white">
                                <small>
                                    {' '}
                                    The picture that you took with your camera is the imagination you want to create with reality.{' '}
                                </small>
                                <footer className="blockquote-footer text-left">
                                    Scott Lorenzo
                                </footer>
                            </blockquote>
                            
                            
                            <CardColumns className="my-5">
                                {this.renderPhotosList()}
                            </CardColumns>
                            <Pagination />
                        </Col>
                    </Row>


                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        collectionPhotos: Object.values(state.collectionPhotos),
        relatedCollections: Object.values(state.relatedCollections)
    };
}

export default connect(mapStateToProps, { requestPagination, requestCollectionPhotos, requestCollectionId, requestDownloadPhoto, requestRelatedCollections })(CollectionsPhotos);