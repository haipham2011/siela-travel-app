import React from "react";
import mapboxgl from 'mapbox-gl'

export default class Missing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiaGFpcGhhbTIwMTEiLCJhIjoiY2sxYzkyb2JvMGhkNDNucGdid3Ztc2sxMSJ9.U2V2_4_kkc46K7ICPLbb_w';
        var map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [24.825155, 60.185616], // starting position
            zoom: 3 // starting zoom
        });

        // Add geolocate control to the map.
        map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        }));
        
        map.on('load', function () {
            map.addLayer({
                "id": "points",
                "type": "symbol",
                "source": {
                    "type": "geojson",
                    "data": {
                        "type": "FeatureCollection",
                        "features": [{
                            // feature for Mapbox DC
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [24.823009, 60.184741]
                            },
                            "properties": {
                                "title": "Service point",
                                "icon": "monument"
                            }
                        }, {
                            // feature for Mapbox DC
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [24.826314, 60.184763]
                            },
                            "properties": {
                                "title": "Service point",
                                "icon": "monument"
                            }
                        }]
                    }
                },
                "layout": {
                    // get the icon name from the source's "icon" property
                    // concatenate the name to get an icon from the style's sprite sheet
                    "icon-image": ["concat", ["get", "icon"], "-15"],
                    // get the title name from the source's "title" property
                    "text-field": ["get", "title"],
                    "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                    "text-offset": [0, 0.6],
                    "text-anchor": "top"
                }
            });
            console.log(map.getCenter());
            
        });
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