import React from 'react'
import Col from 'react-bootstrap/Col';
import Vendor from './Vendor'

const Vendors = (props) => {
    if (props.loading) return <Col>Loading...</Col>;
    if (props.error) return <Col>Error</Col>;

    if (!props.vendors.vendors.length) return (
        <div className={'vendors-container p-4'}>
            <h3>Whoops, there are no vendors found matching your criteria</h3>
        </div>
    )

    return (
        <Col>
            <div className={'vendors-container'}>
                {props.vendors.vendors.map((vendor) => (
                    <Vendor vendor={vendor} key={vendor.locationid} />
                ))}
            </div>
        </Col>
    );
}

export default Vendors;