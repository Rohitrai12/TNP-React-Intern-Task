// Testimonial.jsx

import React from 'react';
import '../../src/Testimonials.css'; // Import your CSS file for styling

const instructors = [
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhAu72pB24JrKJpqABtlUUqV02c4W-BaPyBQ&s',
    name: 'John Carter',
    role: 'Student',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image:
      'https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg',
    name: 'Sophie Moore',
    role: 'UI/UX Designer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image:
      'https://image.cdn2.seaart.ai/2024-01-04/cmb4i6le878c73c91a60/5402ca0ec6cb3301716151940df4db6f7286ea08_high.webp',
    name: 'Norma Hicks',
    role: 'iOS Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhAu72pB24JrKJpqABtlUUqV02c4W-BaPyBQ&s',
    name: 'John Carter',
    role: 'Student',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image:
      'https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg',
    name: 'Sophie Moore',
    role: 'UI/UX Designer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image:
      'https://image.cdn2.seaart.ai/2024-01-04/cmb4i6le878c73c91a60/5402ca0ec6cb3301716151940df4db6f7286ea08_high.webp',
    name: 'Norma Hicks',
    role: 'iOS Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const Testimonial = () => {
  return (
    <div className="testimonials-container">
      <h2>Kind words from <span>Satisfied Clients</span></h2>
      <div className="testimonial-wrapper">
        {instructors.map((instructor, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-header">
              <img src={instructor.image} alt={instructor.name} className="testimonial-image" />
              <div className="testimonial-info">
                <p className="testimonial-name">{instructor.name}</p>
                <p className="testimonial-role">{instructor.role}</p>
              </div>
            </div>
            <p className="testimonial-description">{instructor.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
