import React from 'react';
import Banner from '../Component/Banner';
import TopHolidayPackages from '../Component/TopHolidayPackages';
import StatsSection from '../Component/StatsSection';
import HomeUmrahPakg from '../Component/HomeUmrahPakg';
import WhyChooseUs from '../Component/WhyChooseUs';
import Review from '../Component/Review';

const Homepages = () => {
    return (
 <section>
            <div className='container mx-auto  justify-center items-center'>
            <Banner></Banner>
            <TopHolidayPackages></TopHolidayPackages>
            <StatsSection></StatsSection>
            <HomeUmrahPakg></HomeUmrahPakg>
            <WhyChooseUs></WhyChooseUs>
            <Review></Review>
        </div>
          
 </section>
    );
};

export default Homepages;