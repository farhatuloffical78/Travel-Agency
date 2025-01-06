import React from 'react';
import img from '../assets/aboutus.jpg'

const ContactUs = () => {
  const teamMembers = [
    {
      name: 'Sabrina Chowdhury',
      role: 'CEO',
      description: 'Visionary CEO with extensive experience in leading tech startups and managing business operations.',
      photo: 'https://media.istockphoto.com/id/1371934584/photo/portrait-of-a-confident-mature-businesswoman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=NF_IO6IEXY3HifRIhRqP0KDFJFdlFwaMwo3zfOOvKnQ=',
    },
    {
      name: 'Mahmudul Hasan',
      role: 'CTO',
      description: 'Chief Technology Officer specializing in cloud computing, big data, and emerging technologies.',
      photo: 'https://media.istockphoto.com/id/504709773/photo/suiting-up-for-success.jpg?s=612x612&w=0&k=20&c=8-iwsA0ZhyZRtA0jDyKqdiyA-gGYyB1GHxrNLYKJ7L8=',
    },
    {
      name: 'Mimi Islam',
      role: 'COO',
      description: 'Chief Operating Officer with expertise in operations, logistics, and scaling businesses effectively.',
      photo: 'https://img.freepik.com/premium-photo/confident-african-american-female-ceo-business-suit-portrait_1105604-81222.jpg',
    },
    {
      name: 'Zubair Ali',
      role: 'CFO',
      description: 'Chief Financial Officer with a strong background in financial strategy, management, and accounting.',
      photo: 'https://www.shutterstock.com/image-photo/handsome-hispanic-senior-business-man-600nw-2343004193.jpg',
    },
    {
      name: 'Ahmed Rahman',
      role: 'Project Manager',
      description: 'Experienced project manager with a strong background in web development and leadership.',
      photo: 'https://www.shutterstock.com/image-photo/portrait-smiling-mid-adult-businessman-600nw-2203234427.jpg',
    },
    {
      name: 'Shakib Al Hasan',
      role: 'Lead Developer',
      description: 'A highly skilled developer specializing in React and JavaScript with years of experience in the tech industry.',
      photo: 'https://vonbaer.com/cdn/shop/articles/Middle_aged_business_man_in_suit_resized_photo.jpg?v=1600171425',
    },
    {
      name: 'Rashida Begum',
      role: 'UI/UX Designer',
      description: 'Creative UI/UX designer focused on building intuitive and engaging user interfaces.',
      photo: 'https://www.shutterstock.com/image-photo/portrait-successful-business-woman-suit-600nw-2468636115.jpg',
    },
    {
      name: 'Nazmul Hossain',
      role: 'Backend Developer',
      description: 'Backend specialist with a deep understanding of server-side technologies and API development.',
      photo: 'https://static.vecteezy.com/system/resources/thumbnails/008/358/129/small_2x/delighted-male-ceo-wears-elegant-formal-suit-stands-outdoor-on-street-has-gentle-positive-smile-rejoices-success-in-his-career-successful-young-businessman-finishes-work-on-business-project-photo.JPG',
    },
  ];

  return (
    <div className='container mx-auto'>
      {/* Background Section for Team Details */}
      <div 
        style={{ backgroundImage: `url(${img})` }} 
        className="justify-center flex h-[500px] bg-center items-center relative mb-10"
      >
        <div className="p-10 bg-black text-white bg-opacity-60 flex flex-col justify-center items-center absolute w-10/12 mx-auto">
          <h1 className="text-4xl font-bold mb-4 ">Meet Our Team</h1>
          <p className="text-lg text-center">Get to know the talented individuals who drive our mission forward.</p>
        </div>
      </div>

      {/* Team Member Cards */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-gray-500 text-center">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
