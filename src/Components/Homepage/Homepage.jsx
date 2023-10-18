import React from 'react';
import Banner from '../Banner/Banner';
import BrandIntro from '../Brand Intro/BrandIntro';
import AffiliatedBrand from '../Affiliated/AffiliatedBrand';
import Gallery from '../CarGallery/Gallery';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <AffiliatedBrand></AffiliatedBrand>
            <BrandIntro></BrandIntro>
            <Gallery></Gallery>
        </div>
    );
};

export default Homepage;