import React, {useState} from 'react';
import { connect } from 'react-redux';

import {getData, addSmurfs} from '../actions';


const SmurfForm = props => {

    const [smurf, setSmurf] = useState({ name: '', age: '', height: ''});

    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.addSmurfs(smurf);
    }

    const handleAddSmurfs = e => {
        e.preventDefault();
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
        {props.isFetchingData ? (
            <div>We are smurfing(fetching) the data</div>
        ) : (
            <div className = 'newsmurf-form'>
                <form onSubmit= {e => handleSubmit(e)}>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        onChange={e => handleAddSmurfs(e)}
                    />

                    <label htmlFor="age">Age</label>
                    <input
                        id="age"
                        type="text"
                        name="age"
                        onChange={e => handleAddSmurfs(e)}
                    />    

                    <label htmlFor="height">Height</label>
                    <input
                        id="height"
                        type="text"
                        name="height"
                        onChange={e => handleAddSmurfs(e)}
                    />
                    <button> SUBMIT THAT SMURF</button>        
                </form>

                <button className="button" onClick={handleGetData}>Get Smurfs</button>
            </div>
        )}
        </>
    );
};

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    };
};

export default connect(
    mapStateToProps,
    {getData, addSmurfs}
)(SmurfForm);
