import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummery from './BusinessSummery/BusinessSummery';
import NavbarMini from './NavbarMini';
import Review from './Tools/Reviews/Review';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div className=''>
            <NavbarMini />
            <Banner />
            <Tools />
            <BusinessSummery />
            <Review />
        </div>
    );
};

export default Home;