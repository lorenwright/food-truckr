import React from 'react'
import Modal from 'react-bootstrap/Modal';
import {setSelectedModalVendor} from '../../store/vendorSlice'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useDispatch, useSelector} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const VendorModal = () => {
    const dispatch = useDispatch();
    const selectedModalVendor = useSelector((state) => state.vendors.selectedModalVendor)

    return (
        <Modal show={selectedModalVendor} fullscreen={true}>
            <Modal.Body>
                <Row>
                    <Col>
                        <a onClick={() => dispatch(setSelectedModalVendor(null))}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                            All Vendors
                        </a>
                    </Col>
                </Row>
                <Row style={{ marginTop: 200 }}>
                    <Col>
                        <h1>{selectedModalVendor.Applicant}</h1>
                        <p>{selectedModalVendor.Status}</p>
                    </Col>
                    <Col>
                        <p>{selectedModalVendor.Address}</p>
                        <p>{selectedModalVendor.FoodItems}</p>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
}
export default VendorModal