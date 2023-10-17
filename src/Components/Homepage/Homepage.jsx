import React from 'react';
import Banner from '../Banner/Banner';
import BrandIntro from '../Brand Intro/BrandIntro';
import CarGallery from '../CarGallery/CarGallery';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <BrandIntro></BrandIntro>
            <CarGallery></CarGallery>
        </div>
    );
};

export default Homepage;