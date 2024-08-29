import React from 'react';
import TourDetailsRight from './TourDetailsRight';
import Breadcrumb from '../common/breadcrumb/BreadCrumb';

const TourDetailsRightMain = ({ data }: { data: any }) => {
    return (
        <>
            <Breadcrumb titleOne={data.title} titleTwo={data.title} image={data.featuredImage.node.mediaDetails.file} />
            <TourDetailsRight infotour={data} />
        </>
    );
};

export default TourDetailsRightMain;