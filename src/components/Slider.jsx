import "../styles.scss";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useState } from "react";
import data from "./SlideData";
const Slider = () => {
   const [current, setCurrent] = useState(0);

   const nextSlide = () => {
      setCurrent(current === data.length - 1 ? 0 : current + 1);
   };
   const prevSlide = () => {
      setCurrent(current === 0 ? data.length - 1 : current - 1);
   };

   return (
      <div className="slider">
         <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
         <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
         {data.map((d, index) => {
            return current === index ? (
               <div key={index} className="slide">
                  <img src={d.image} alt="images" />
               </div>
            ) : null;
         })}
      </div>
   );
};
export default Slider;
