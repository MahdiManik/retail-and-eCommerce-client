import image1 from "../../assets/VeMoBros-3.3-sale.jpg";
import image3 from "../../assets/screen-0.webp";
import image2 from "../../assets/Inquirer-Advertorial.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFlip,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeroSlider = () => {
  return (
    <div className="bg-blue-900 ">
      <div className="w-full h-full relative overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFlip]}
          spaceBetween={50}
          effect="flip"
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <img src={image1} alt="Image 1" className="w-full h-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="Image 2" className="w-full h-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="Image 3" className="w-full h-full" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;
