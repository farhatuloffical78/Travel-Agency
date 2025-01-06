import React from 'react';
import Marquee from 'react-fast-marquee';

const Review = () => {
    const reviews = [
        {
            id: 1,
            name: "Ahmed Ali",
            location: "Dhaka, Bangladesh",
            rating: 5,
            comment: "It was a life-changing experience. The guides were amazing and the services were top-notch!",
            image: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            id: 2,
            name: "Fatima Rahman",
            location: "London, UK",
            rating: 4,
            comment: "A wonderful journey with great support throughout. The package was well worth the price!",
            image: "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
            id: 3,
            name: "Zahid Khan",
            location: "New York, USA",
            rating: 5,
            comment: "An unforgettable experience. Everything was well-organized, and the staff was so welcoming.",
            image: "https://randomuser.me/api/portraits/men/3.jpg"
        },
        {
            id: 4,
            name: "Nadia Ahmed",
            location: "Dubai, UAE",
            rating: 4,
            comment: "An incredible spiritual experience. I felt at peace throughout the trip. Would definitely recommend!",
            image: "https://randomuser.me/api/portraits/women/4.jpg"
        },
        {
            id: 5,
            name: "Omar Siddique",
            location: "Karachi, Pakistan",
            rating: 5,
            comment: "The attention to detail was exceptional, and I felt truly cared for throughout my journey. 10/10!",
            image: "https://randomuser.me/api/portraits/men/5.jpg"
        },
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>

                {/* Marquee effect using react-fast-marquee */}
                <Marquee speed={50}>
                    {reviews.map((review) => (
                        <div key={review.id} className="inline-block mr-8 p-6 border border-gray-300 rounded-lg shadow-md w-full max-w-xs">
                            <div className="flex items-center mb-4">
                                <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full object-cover" />
                                <div className="ml-4">
                                    <h3 className="text-xl font-semibold text-gray-800">{review.name}</h3>
                                    <p className="text-gray-500">{review.location}</p>
                                </div>
                            </div>

                            {/* Rating with neutral color */}
                            <div className="mb-4 flex justify-center">
                            <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-red-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-400" />
</div>
                            </div>

                            <p className="text-gray-600 mb-4">{review.comment}</p>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Review;
