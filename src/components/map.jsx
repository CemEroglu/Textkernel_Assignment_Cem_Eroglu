import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const Map = (props) => {
    return (
        <div style={{ marginLeft: "50px" }} className="ml-3">
            <MapContainer id={props.job_title} style={{ width: "250px", height: "200px" }} center={[38, -100]} zoom={2} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={props.coordinates}>
                    <Popup>
                        {props.title}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
export default Map;
