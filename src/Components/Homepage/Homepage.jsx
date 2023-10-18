import React from 'react';
import Banner from '../Banner/Banner';
import BrandIntro from '../Brand Intro/BrandIntro';
import CarGallery from '../CarGallery/CarGallery';
import AffiliatedBrand from '../Affiliated/AffiliatedBrand';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <AffiliatedBrand></AffiliatedBrand>
            <BrandIntro></BrandIntro>
            <CarGallery></CarGallery>
        </div>
    );
};

export default Homepage;