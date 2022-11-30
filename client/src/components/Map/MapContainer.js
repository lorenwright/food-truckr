import React, { useEffect, useState } from 'react'
import GoogleMapReact, { fitBounds } from 'google-map-react';
import MapMarker from './MapMarker';
import Col from "react-bootstrap/Col";

const MapContainer = (props) => {

    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    const defaultProps = {
        center: {
            lat: 37.773972,
            lng: -122.431297
        },
        zoom: 1
    };

    const apiKey = 'AIzaSyA54Ll5q3JFWGLpZb6lWILlcfGaOv_J0SI'

    const desktopSize = {
        width: 750, // Map width in pixels
        height: 650, // Map height in pixels
    }

    const mobileSize = {
        width: 400,
        height: 250
    }

    const getSize = () => {
        return isMobile ? mobileSize : desktopSize
    }

    if (props.loading) return <Col>Loading...</Col>;
    if (props.error) return <Col>Error</Col>;

    let coords = props.vendors.vendors.map(vendor => {
        return {lat: vendor.Latitude, lng: vendor.Longitude}
    })

    coords = coords.filter(x => x.lat !== '0' || x.lng !== '0')

    const neLng = Math.max(...coords.map(x => x.lng))
    const neLat = Math.max(...coords.map(x => x.lat))
    const swLng = Math.min(...coords.map(x => x.lng))
    const swLat = Math.min(...coords.map(x => x.lat))

    let bounds = {}

    // When there are less than 2 markers, show the whole US
    if (coords.length < 2) {
        bounds = {
            ne: {
                lat: 37.81053,
                lng: -122.35446
            },
            sw: {
                lat: 37.70728,
                lng: -122.52355
            }
        }
    } else {
        bounds = {
            ne: {
                lat: neLat,
                lng: neLng
            },
            sw: {
                lat: swLat,
                lng: swLng
            }
        }
    }

    const {center, zoom} = fitBounds(bounds, getSize());

    return (
        // Important! Always set the container height explicitly
        <div className={'map'}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: apiKey }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                center={center}
                zoom={zoom}
            >
                {props.vendors.vendors.map((vendor) => (
                    <MapMarker
                        key={'map-marker' + vendor.locationid}
                        lat={vendor.Latitude}
                        lng={vendor.Longitude}
                        vendor={vendor}
                    />
                ))}
            </GoogleMapReact>
        </div>
    );
};
export default MapContainer;