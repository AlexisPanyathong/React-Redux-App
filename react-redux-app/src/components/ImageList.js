import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getData } from './actions';
import Image from './Image';

const ImageList = props => {
    return (
        <>
        <h1>Welcome</h1>
        <button onClick={props.getData}>
            {props.isLoading ?
            (<Loader
               type="Watch"
               color="#00BFFF"
               height="40"
               width="40"
             /> ) : 
             ('Get Image Data')}
        </button>

        <Image />
        </>

    );
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
    };
};

export default connect(mapStateToProps, { getData })(ImageList);