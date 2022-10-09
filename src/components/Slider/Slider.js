import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "./styles.modules.scss";
import { specialDiscount } from "../../Assets/data";

export default function Sliders() {
  return (
    <section className="ContainerSlider">
      <h1 className="text-white text-center pb-2">تخفیف ویژه</h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {specialDiscount.map((c, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={c.img} alt="c.title" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
