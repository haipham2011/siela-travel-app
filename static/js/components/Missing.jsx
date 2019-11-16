import React from "react";
import mapboxgl from 'mapbox-gl'

export default class Missing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        mapboxgl.accessToken = 'pk.eyJ1IjoiaGFpcGhhbTIwMTEiLCJhIjoiY2sxYzkyb2JvMGhkNDNucGdid3Ztc2sxMSJ9.U2V2_4_kkc46K7ICPLbb_w';
        var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-96, 37.8], // starting position
        zoom: 3 // starting zoom
        });
         
        // Add geolocate control to the map.
        map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        trackUserLocation: true
        }));
    }
    render() {
        
        return (
            <>
                <div>
                <div id='map'></div>
                </div>
            </>
        );
    }
}