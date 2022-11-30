import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setStatusType} from '../../store/filterSlice'
import {setSelectedVendor} from '../../store/vendorSlice'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Filters = () => {
    const statusType = useSelector((state) => state.filters.statusType)
    const dispatch = useDispatch()

    const handleChangeStatusType = (type) => {
        if (statusType === type) {
            dispatch(setStatusType(null))
        } else {
            dispatch(setStatusType(type))
        }
        dispatch(setSelectedVendor(null))
    }

    return (
        <div>
            <Row>
                <Col>
                    <Button
                        className={`mx-1 ${statusType === 'APPROVED' ? 'active' : ''}`}
                        onClick={() => handleChangeStatusType('APPROVED')}
                        variant="outline-default"
                    >
                        Approved
                    </Button>
                    <Button
                        className={`mx-1 ${statusType === 'REQUESTED' ? 'active' : ''}`}
                        onClick={() => handleChangeStatusType('REQUESTED')}
                        variant="outline-default"
                    >
                        Requested
                    </Button>
                    <Button
                        className={`mx-1 ${statusType === 'EXPIRED' ? 'active' : ''}`}
                        onClick={() => handleChangeStatusType('EXPIRED')}
                        variant="outline-default"
                    >
                        Expired
                    </Button>
                </Col>
            </Row>
        </div>
    );
};
export default Filters;