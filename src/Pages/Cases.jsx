import {Swiper, SwiperSlide} from "swiper/react";
import Button from "../components/Button";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/_cases.scss";
import { Navigation, Pagination, A11y } from "swiper";
import SwiperNavButtons from "../components/SwiperNavButtons";

const Cases = ({ data }) => {
  const csc = data;
  return (
    <div className="cases">
      <div className="wrapper cases-inner">
        <h2>{csc.title}</h2>
        <Swiper className="case-items"
        slidesPerView='auto'
        spaceBetween={30}
        modules={[Pagination, Navigation, A11y]}
        >
          {
            csc.items && csc.items.map((item, index) => {
              return <SwiperSlide className="case-item" key={index}>
                <item.icon />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Button title={item.button} clname={"case-btn"}/>
              </SwiperSlide>
            })
          }
          <SwiperNavButtons/>
        </Swiper>
      </div>
    </div>
  );
};

export default Cases;
