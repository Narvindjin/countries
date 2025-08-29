import React from 'react';
import type {OutletInterface} from '../../blocks/wrapper/wrapper';
import { useOutletContext } from 'react-router';
import Loader from "../../components/loader/loader";
import DetailBlock from "../../blocks/detailBlock/detailBlock";


const DetailPage = () => {
    const outletContext = useOutletContext<OutletInterface>()
    return (
        <>
        {outletContext.isLoading?
            <Loader/>:
            <DetailBlock/>
        }
        </>
    )
}

export default DetailPage