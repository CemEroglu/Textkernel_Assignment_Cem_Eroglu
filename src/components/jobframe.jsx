import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import './jobframe.css'
import Map from './map'
const JobFrame = (props) => {
    return (
        <div className="frame mx-4 my-2 ">
            <div className="text-left my-2">👉{props.job_title}</div>
            <div className="text-left my-2">🏢 {props.organization_name ? props.organization_name : " Unkown"}</div>
            <div>
                <Map title={props.job_title} coordinates={props.location_coordinates}></Map>
            </div>
            <Button className="my-3" onClick={() => { props.deleteJob(props.job_title) }} variant="outline-danger">Ignore</Button>
        </div>
    );
}
export default JobFrame;

