import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import "./ProductCarousel.css";

import colageno from "../assets/img/carrusel-productos/logo_hybrid_colágeno.png";
import proteina from "../assets/img/carrusel-productos/logo_hybrid_proteína.png";
import creatina from "../assets/img/carrusel-productos/logo_hybrid_creatina.png";
import preEntreno from "../assets/img/carrusel-productos/logo_hybrid_pre-entreno.png";
import multivitaminico from "../assets/img/carrusel-productos/logo_hybrid_multivitamínico.png";
import bcaa from "../assets/img/carrusel-productos/logo_hybrid_bcaa.png";
import omega3 from "../assets/img/carrusel-productos/logo_hybrid_omega_3.png";
import termogenico from "../assets/img/carrusel-productos/logo_hybrid_termogénico.png";
import ganadorPeso from "../assets/img/carrusel-productos/logo_hybrid_ganador_de_peso.png";
import glutamina from "../assets/img/carrusel-productos/logo_hybrid_glutamina.png";

const productImages = [
  colageno,
  proteina,
  creatina,
  preEntreno,
  multivitaminico,
  bcaa,
  omega3,
  termogenico,
  ganadorPeso,
  glutamina,
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
        {productImages.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="carousel-slide">
              <img src={img} alt={`Producto ${idx + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductCarousel;
