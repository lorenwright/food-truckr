import React from 'react'
import mapIcon from '../../assets/images/food-truck.png'
import {setSelectedVendor} from '../../store/vendorSlice'
import {useDispatch, useSelector} from 'react-redux'

const MapMarker = (props) => {

    const selectedVendor = useSelector((state) => state.vendors.selectedVendor)
    const dispatch = useDispatch()
    const handleClickMarker = () => {
        dispatch(setSelectedVendor(props.vendor.locationid))
    }

    const isActiveVendor= () => {
        if (selectedVendor === props.vendor.locationid) {
            return true
        }
        return false
    }

    return (
        <div onClick={handleClickMarker}>
            <img src={mapIcon} width={40} alt={props.vendor.Applicant} style={{marginLeft: -20, marginTop: -20}} />
        </div>
    );
};
export default MapMarker;