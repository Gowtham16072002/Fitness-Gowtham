// import React from "react";
// import "../Styles/Testimonials.css";
// import feedback1 from "../assets/feedback1.jpg";
// import feedback2 from "../assets/feedback2.jpg";
// import feedback4 from "../assets/feedback4.jpg";
// import feedback5 from "../assets/feedback5.jpg";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// function Testimonials() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div>
//       <section className="testimonials">
//         <h2>What Our Clients Say</h2>

//         <Slider {...settings}>
//           <div className="testimonial-card">
//             <img src={feedback4} />
//             <h3>Rahul Sharma</h3>
//             <p>Lost 10kg in 3 months! Amazing trainers.</p>
//             <div className="stars">★★★★★</div>
//           </div>

//           <div className="testimonial-card">
//             <img src={feedback5} />
//             <h3>Priya Patel</h3>
//             <p>Best fitness program I ever joined.</p>
//             <div className="stars">★★★★★</div>
//           </div>

//           <div className="testimonial-card">
//             <img src={feedback1} />
//             <h3>Arjun Mehta</h3>
//             <p>Great transformation results!</p>
//             <div className="stars">★★★★★</div>
//           </div>

//           <div className="testimonial-card">
//             <img src={feedback2} />
//             <h3>Sneha Kapoor</h3>
//             <p>Professional coaching and diet plan.</p>
//             <div className="stars">★★★★★</div>
//           </div>
//         </Slider>
//       </section>
//     </div>
//   );
// }

// export default Testimonials;





import React, { useEffect, useState } from "react";
import "../Styles/Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { API_BASE_URL } from "../config";

function Testimonials() {
  const [testimonialData, setTestimonialData] = useState({
    hero: {
      title: "What Our Clients Say",
      subtitle: "",
    },
    displayLimit: 4,
    testimonials: [],
  });

  useEffect(() => {
    fetchTestimonialContent();
  }, []);

  const fetchTestimonialContent = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/testimonial-content`);

      if (res.data.success) {
        setTestimonialData(res.data.data);
      }
    } catch (error) {
      console.log("Failed to fetch testimonial content");
    }
  };

  const visibleTestimonials = testimonialData.testimonials.slice(
    0,
    testimonialData.displayLimit || 4
  );

  const settings = {
    dots: true,
    infinite: visibleTestimonials.length > 3,
    speed: 500,
    slidesToShow: Math.min(3, visibleTestimonials.length),
    slidesToScroll: 1,
    autoplay: visibleTestimonials.length > 3,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: visibleTestimonials.length > 1,
        },
      },
    ],
  };

  const renderStars = (rating) => {
    const starCount = Number(rating) || 5;
    return "★".repeat(starCount);
  };

  return (
    <section className="testimonials">
      <h2>{testimonialData.hero.title}</h2>

      {testimonialData.hero.subtitle && (
        <p className="testimonial-subtitle">{testimonialData.hero.subtitle}</p>
      )}

      {visibleTestimonials.length > 0 && (
        <Slider {...settings}>
          {visibleTestimonials.map((item, index) => (
            <div className="testimonial-card" key={item._id || index}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <span className="testimonial-role">{item.role}</span>
              <p>{item.review}</p>
              <div className="stars">{renderStars(item.rating)}</div>
            </div>
          ))}
        </Slider>
      )}
    </section>
  );
}

export default Testimonials;