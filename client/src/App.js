import React from "react";
import './assets/sass/App.sass'
import Filters from './components/Filters/Filters'
import MapContainer from './components/Map/MapContainer'
import Vendors from './components/Vendors/Vendors'
import VendorModal from './components/Vendors/VendorModal'
import { useQuery, gql } from '@apollo/client';
import {useSelector} from 'react-redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const GET_VENDORS = gql`
    query GetVendors{
        vendors {
            locationid,
            Applicant,
            Latitude,
            Longitude,
            Address,
            FoodItems,
            Status
        }
    }
`;

const App = () => {
    const selectedModalVendor = useSelector((state) => state.vendors.selectedModalVendor)

    const { loading, error, data } = useQuery(GET_VENDORS, {
        variables: {}
    });

    return (
        <Container>
            {/*<Filters />*/}
            <Row className={'mt-4 map-row g-0'}>
                <Col md={7}>
                    <MapContainer vendors={data} loading={loading} error={error} />
                </Col>
                <Col>
                    <Vendors vendors={data} loading={loading} error={error} />
                </Col>
            </Row>

            {selectedModalVendor &&
                <VendorModal/>
            }
        </Container>
    );
};
export default App;