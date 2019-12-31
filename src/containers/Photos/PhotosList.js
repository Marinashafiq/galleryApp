import React from 'react';
import { connect } from 'react-redux';
import { requestPhotos, requestDownloadPhoto , requestPagingType } from '../../store/actions/index';
import GalleryCard from '../../components/card/GalleryCard';
import history from '../../routes/history';

class PhotosList extends React.Component {
    componentDidMount() {
        if(history.location.pathname == '/photos'){
            const { requestPhotos , requestPagingType } = this.props ;
            requestPhotos(1);
            requestPagingType('photos')
        }
    }

    downloadImage = (imageId) => {
        const { requestDownloadPhoto } = this.props ;
        requestDownloadPhoto(imageId);
    }

    renderPhotosList = () => {
        return this.props.photos.map(photo => {
            const { id , urls , description , likes , user } = photo ;
            let { created_at } = photo ;
            created_at = this.convertTime(photo.created_at);
            return (
                <GalleryCard
                    id={id}
                    key={id}
                    url={urls.full}
                    name={id}
                    created_at={created_at}
                    description={description}
                    likes={likes}
                    user={user}
                    downloadImageId={this.downloadImage}
                />
            )
        })
    }

    convertTime(createdAt) {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let created_at_date = new Date(createdAt).toLocaleDateString('en-US', options);
        return created_at_date;
    }



    render() {
        return (
            <div>
                {this.renderPhotosList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        photos: Object.values(state.photos)
    }
}


export default connect(mapStateToProps, { requestPhotos, requestDownloadPhoto , requestPagingType})(PhotosList);