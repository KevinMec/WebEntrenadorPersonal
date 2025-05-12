import './Services.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';

import entrenamiento from '../assets/img/EntrenamientoMrFrank.png';
import alimentacion from '../assets/img/Alimentacionfrank.png';
import seguimiento from '../assets/img/SeguimientoFrank.png';
import suplementos from '../assets/img/Suplementosfrank.png';
import quimica from '../assets/img/QuimicaFrank.png';
import tarima from '../assets/img/PreparacionTarimafrank.png';

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2>Nuestros Servicios</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
        >
          <SwiperSlide>
            <div className="service-card">
              <img src={entrenamiento} alt="Entrenamiento de fuerza" />
              <h3>Entrenamiento Personalizado</h3>
              <p>Programas de ejercicio hechos a tu medida, enfocados en tus metas.</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="service-card">
              <img src={alimentacion} alt="Nutrición" />
              <h3>Planes Nutricionales</h3>
              <p>Asesoría nutricional para acompañar tu proceso de transformación física.</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="service-card">
              <img src={seguimiento} alt="Seguimiento" />
              <h3>Seguimiento Progresivo</h3>
              <p>Evaluaciones semanales para medir y ajustar tu progreso.</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="service-card">
              <img src={suplementos} alt="Suplementos" />
              <h3>Recomendación de Suplementos</h3>
              <p>Te guiamos en el uso adecuado de suplementos para mejorar tu rendimiento y recuperación.</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="service-card">
              <img src={quimica} alt="Asesoría Química" />
              <h3>Asesoría Química Deportiva</h3>
              <p>Educación sobre el uso responsable de sustancias y procesos hormonales en el fisicoculturismo.</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="service-card">
              <img src={tarima} alt="Preparación para Tarima" />
              <h3>Preparación para Competencia</h3>
              <p>Te ayudamos a llegar listo para tarima: posing, bronceado y definición final.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Services;
