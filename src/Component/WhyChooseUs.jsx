import React from 'react';
import image1 from '../assets/tourguid.png'
import image2 from '../assets/afordable.png'
import image3 from '../assets/experenc.png'

const WhyChooseUs = () => {
    return (
        <section className="py-16 p-3 mt-10 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
                <p className="text-lg text-gray-600 mb-10">Experience a unique and fulfilling journey with us. Here are some reasons why we stand out:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
                        <img src={image1} alt="Expert Guides" className="mb-4 h-16 w-16"/>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Guides</h3>
                        <p className="text-gray-600">Our experienced and knowledgeable guides ensure a smooth and insightful journey.</p>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
                        <img src={image2} alt="Affordable Packages" className="mb-4 h-16 w-16"/>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Affordable Packages</h3>
                        <p className="text-gray-600">We offer various packages to suit all budgets while maintaining high-quality service.</p>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
                        <img src={image3} alt="Personalized Experience" className="mb-4 h-16 w-16"/>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized Experience</h3>
                        <p className="text-gray-600">Every journey is customized to cater to your preferences, ensuring a memorable experience.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
