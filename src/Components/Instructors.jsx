import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../../src/Instructors.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const instructors = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhAu72pB24JrKJpqABtlUUqV02c4W-BaPyBQ&s",
    name: "John Carter",
    role: "Digital Marketer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image:
      "https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg",
    name: "Sophie Moore",
    role: "UI/UX Designer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image:
      "https://image.cdn2.seaart.ai/2024-01-04/cmb4i6le878c73c91a60/5402ca0ec6cb3301716151940df4db6f7286ea08_high.webp",
    name: "Norma Hicks",
    role: "iOS Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDuMG6o2m4d7sPZMbnAFG7JLP2oVSkL_SY4m-ZivM4cCPGiIYfPICkRUgm7I8DJ8Rwlk&usqp=CAU",
    name: "John Carter",
    role: "Digital Marketer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image:
      "https://cdn.openart.ai/stable_diffusion/54d1c77c8ee5a41f5f3fb3318f700264952d709f_2000x2000.webp",
    name: "Sophie Moore",
    role: "UI/UX Designer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2UFCAlG8lu0cPdfHIWSNjrxvjHSn0e5JzRzbebhd-QWxRCo5L1CYQ6jmyooJmzOvDz0w&usqp=CAU",
    name: "Norma Hicks",
    role: "iOS Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Instructors = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="instructors-section">
      <h2>Meet our <span className="pan">Instructors</span></h2>
      <p className="para">
        In publishing and graphic design, Lorem ipsum is a placeholder Lorem ipsum is a placeholderLorem ipsum is a  text
        commonly used to <br /> form of a document or a typeface
        without relying on.
      </p>
      <div className="slider-container">
        <Slider {...settings}>
          {instructors.map((instructor, index) => (
            <div key={index} className="instructor-card">
              <img
                src={instructor.image}
                alt={`${instructor.name}`}
                className="instructor-image"
              />
              <h3>{instructor.name}</h3>
              <h4>{instructor.role}</h4>
              <p>{instructor.description}</p>
              <button className="view-profile-button">View Profile</button>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaArrowRight
        style={{
          color: "white",
          fontSize: "24px",
          padding: "10px",
          background: "#003159",
          borderRadius: "50px",
        }}
      />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaArrowLeft
        style={{
          color: "white",
          fontSize: "24px",
          padding: "10px",
          background: "#003159",
          borderRadius: "50px",
        }}
      />
    </div>
  );
};

export default Instructors;
