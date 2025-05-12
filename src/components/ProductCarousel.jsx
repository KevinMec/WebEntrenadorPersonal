import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import "./ProductCarousel.css";

const imageNames = [
  "logo_hybrid_colágeno.png",
  "logo_hybrid_proteína.png",
  "logo_hybrid_creatina.png",
  "logo_hybrid_pre-entreno.png",
  "logo_hybrid_multivitamínico.png",
  "logo_hybrid_bcaa.png",
  "logo_hybrid_omega_3.png",
  "logo_hybrid_termogénico.png",
  "logo_hybrid_ganador_de_peso.png",
  "logo_hybrid_glutamina.png"
];

function ProductCarousel() {
  return (
    <div className="carousel-container">
      <h2>Mis productos</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {imageNames.map((name, idx) => (
          <SwiperSlide key={idx}>
            <div className="carousel-slide">
              <img src={`/assets/img/Carrusel productos/${name}`} alt={name} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductCarousel;
