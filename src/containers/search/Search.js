import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './Search.scss';
import { connect } from 'react-redux';
import { 
    requestSearchPhotos, 
    requestPhotos, 
    requestSearchCollections, 
    requestCollection,
    requestPagination } from '../../store/actions';
import history from '../../routes/history';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.pagingType !== this.props.pagingType){
            this.setState({
                keyword : ""
            })
        }
    }

    handleChange = (e) => {
        // const { pagingType , requestPhotos , requestCollection } = this.props ;
        this.setState({
            keyword: e.target.value
        })
        if (e.target.value === "") {
            this.setState({
                keyword: ""
            })
        }
    }

    onSubmit = (e) => {
        this.setState({
            keyword: e.target.value
        })
        if(this.state.keyword){
            history.push(`/search/${this.state.keyword}`);       
        }
    }

    onKeypress = (e) =>{
        if(e.key == 'Enter'){
            history.push(`/search/${this.state.keyword}`);       
        }
    }

    renderSearchButton = () => {
        if(history.location.pathname == '/'){
            return(
                <Button variant="warning" onClick={(e) => this.onSubmit(e)} className="border-raduis-3 text-white font-weight-bold px-5 searchBtn">Search</Button>
            )
        }
        else {
            return(
                <Button variant="outline-warning" className="border-raduis-3" onClick={(e) => this.onSubmit(e)}><i className="fa fa-search"></i></Button>
            )
        }
    }

    render() {
        return (
            <div className="w-100">
                <div className={'d-flex ' + (history.location.pathname == '/' ? 'search-input' : '')}>
                <FormControl 
                    value = {this.state.keyword || ""}
                    onChange={e => this.handleChange(e)}
                    onKeyPress={e => this.onKeypress(e)}
                    placeholder="Search in Gallery" 
                    className="mr-2 border-0 shadow border-raduis-3" />
                    {this.renderSearchButton()}
                    {/* <InputGroup size="lg" className="mr-3 mt-4">
                        <FormControl
                            value = {this.state.keyword}
                            aria-label="Large"
                            onChange={e => this.handleChange(e)}
                            placeholder="Search for images with keywords ( Sky , love .. etc )"
                            className="border-0 shadow border-raduis-3"
                            aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>

                    <Button variant="warning" onClick={(e) => this.onSubmit(e)} className="border-raduis-3 text-white font-weight-bold px-5">Search</Button> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
        pagingType: state.pagingType , 
        searchKeyword: state.searchKeyword
    }
}

export default connect(mapStateToProps, { requestSearchPhotos, requestCollection, requestPhotos, requestSearchCollections , requestPagination })(Search);