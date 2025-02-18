import React from "react";
import { ProjectCard } from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import styles from "./ProjectSlider.module.css"; // Import custom CSS

export const ProjectSlider = ({ projects }) => {
  return (
    <div className={styles.projectSliderContainer}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: `.${styles.paginationContainer}`, // Custom pagination container
        }}
        navigation={{
          nextEl: `.${styles.nextButton}`,
          prevEl: `.${styles.prevButton}`,
        }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          0: { slidesPerView: 1 },
          800: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project, id) => (
          <SwiperSlide key={id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className={styles.navigationContainer}>
        <div className={`${styles.prevButton} swiper-button-prev`}></div>
        <div className={`${styles.nextButton} swiper-button-next`}></div>
      </div>

      {/* Custom Pagination Dots */}
      <div className={`${styles.paginationContainer} swiper-pagination`}></div>
    </div>
  );
};