import React from 'react';
// import { Carousel } from '3d-react-carousal';
import './SampleWorksCarousel.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// const slides = [
//     <img src="https://img.techpowerup.org/201014/carousel-1.png" height="400px" alt="1" />,
//     <img src="https://img.techpowerup.org/201014/carousel-2.png" height="400px" alt="2" />,
//     <img src="https://img.techpowerup.org/201014/carousel-4.png" height="400px" alt="3" />,
//     <img src="https://img.techpowerup.org/201014/carousel-5.png" height="400px" alt="4" />
// ];


const WorksCarousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className="sample-works-carousel">
            <Slider {...settings}>
                <div>
                    <img src="https://img.techpowerup.org/201014/carousel-1.png" className="img-fluid" alt="1" />
                </div>
                <div>
                    <img src="https://img.techpowerup.org/201014/carousel-2.png" className="img-fluid" alt="2" />
                </div>
                <div>
                    <img src="https://img.techpowerup.org/201014/carousel-4.png" className="img-fluid" alt="3" />
                </div>
                <div>
                    <img src="https://img.techpowerup.org/201014/carousel-5.png" className="img-fluid" alt="4" />
                </div>
                <div>
                    <img src="https://img.techpowerup.org/201014/carousel-2.png" className="img-fluid" alt="2" />
                </div>
                <div>
                    <img src="https://img.techpowerup.org/201014/carousel-1.png" className="img-fluid" alt="1" />
                </div>
                <div>
                    <img src="https://img.techpowerup.org/201014/carousel-4.png" className="img-fluid" alt="3" />
                </div>
            </Slider>
        </div>
    );
};

export default WorksCarousel;




// import React from "react";
// import Slider from "react-slick";
// import image from "../../../images/carousel-2.png"


// const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2,
//                 initialSlide: 2
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//     ]
// };


// const WorksCarousel = () => {
//     return (
//         <div>
//             <Slider {...settings}>
//                 <div>
//                     <img src={image} height="200px" alt="" />
//                 </div>
//                 <div>
//                     <img src={image} height="200px" alt="" />
//                 </div>
//                 <div>
//                     <img src={image} height="200px" alt="" />
//                 </div>
//                 <div>
//                     <img src={image} height="200px" alt="" />
//                 </div>
//             </Slider>
//         </div>
//     );
// };

// export default WorksCarousel;