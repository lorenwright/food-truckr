import React, { useRef } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {setSelectedModalVendor} from '../../store/vendorSlice'
import {useDispatch, useSelector} from 'react-redux'

const Vendor = (props) => {
    const dispatch = useDispatch()
    const selectedVendor = useSelector((state) => state.vendors.selectedVendor)

    const vendorRef = useRef()

    const isActiveVendor = () => {
        if (selectedVendor === props.vendor.locationid) {
            if (vendorRef.current) {
                vendorRef.current.scrollIntoView({ behavior: 'smooth' })
                return true
            }
        }
        return false
    }

    return (
        <a
            onClick={() => dispatch(setSelectedModalVendor(props.vendor))}
            className={`vendor p-4 text-primary d-block ${isActiveVendor() ? 'active' : '' }`}
            key={props.vendor.locationid}
            ref={vendorRef}
        >
            <Row>
                <Col>
                    <h2>{props.vendor.Applicant}</h2>
                    <p>{props.vendor.Status}</p>
                    <p>{props.vendor.FoodItems}</p>
                </Col>
            </Row>
        </a>
    );
}

export default Vendor;