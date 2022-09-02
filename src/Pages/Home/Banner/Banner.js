import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='overlay flex justify-center items-center '>
                <div className='w-1/2 text-center'>
                    <h1 className="text-4xl text-white banner-title py-3"
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        Auto Parts Online Store
                    </h1>
                    <p
                        className="text-white banner-subTitle pb-5"
                        data-aos="fade-right"
                        data-aos-duration="1500"
                    >
                        Special offer for auto parts for electric cars and hybrid
                        vehicles. To select the spare part you need, use the filter
                        presented above or the advanced filter.
                    </p>
                    <button class="btn btn-outline btn-primary"> Get Start</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;