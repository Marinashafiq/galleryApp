import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
// import { requestSearchPhotos } from '../../store/actions';
import Header from '../../components/header/Header';
import KeywordChip from '../../components/keyword-chip/KeywordChip';
import '../search/Search.scss';
import './Home.scss';
import history from '../../routes/history';

class Home extends React.Component {

    searchWithChips = (keyword) => {
        history.push(`/search/${keyword}`);       
    }

    renderChips = () => {
        const keywords = ['love' , 'wallpaper' , 'Nature' , 'Current Events' , 'Film' , 'Dark' , 'Black & White' , 'Travel' , 'fashion' , 'Kids']
        return keywords.map(keyword => {
            return(
                <KeywordChip 
                    key={keyword} 
                    name={keyword}
                    searchWithChips={this.searchWithChips}/>
            )
        })
    }


    render() {
        return (
            <div className="homeBg">
                <Container className="text-center d-flex h-100 align-items-center">
                    <div className="w-100">
                        <Header />
                        {this.renderChips()}
                    </div>
                </Container>
            </div>
        )
    }
}



export default connect(null)(Home);