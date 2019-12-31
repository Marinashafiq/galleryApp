import React from 'react';
import { connect } from 'react-redux';
import { requestCollection , requestPagingType} from '../../store/actions';
import CollectionCard from '../../components/collection-card/CollectionCard';
import '../search/Search.scss';
import history from '../../routes/history';
import Loader from '../../components/loader/Loader';

class CollectionList extends React.Component {
    componentDidMount() {
        if(history.location.pathname == '/collections'){
            const { requestCollection , requestPagingType } = this.props ;
            // requestCollection(1);
            requestPagingType('collections')
        }
    }

    renderCollectionList = () => {
        const { collections } = this.props;
        if (!collections) {
            return (
               <Loader />
            )
            
        }
        else {
            return collections.map(photo => {
                const { id , preview_photos , tags , title , total_photos , description } = photo ;
                return (
                    <CollectionCard
                        id={id}
                        key={id}
                        previewPhotos={preview_photos}
                        tags={tags}
                        title={title}
                        totalPhotos={total_photos}
                        description={description}
                    />
                )

            })
           
        }

    }


    render() {
        return (
            <div>
                {this.renderCollectionList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        collections: Object.values(state.collections)
    }
}


export default connect(mapStateToProps, { requestCollection , requestPagingType})(CollectionList);