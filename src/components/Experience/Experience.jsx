// import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {/* Skills Section */}
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>

        {/* History Section as a Slider */}
        <Swiper
          slidesPerView={1} // Default for mobile
          spaceBetween={30}
          loop={true} // Infinite loop
          autoplay={{
            delay: 4000, // Autoplay every 3 seconds
            disableOnInteraction: false, // Continue autoplay after user interaction
            pauseOnMouseEnter: true, // Pause autoplay on hover
          }}
          pagination={{
            clickable: true, // Clickable pagination dots
          }}
          // navigation={true} // Enable navigation arrows
          // navigation={{
          //   nextEl: `.${styles.nextButton}`,
          //   prevEl: `.${styles.prevButton}`,
          // }}

          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            640: { slidesPerView: 1 }, // 1 slide for tablets
            768: { slidesPerView: 2 }, // 2 slides for larger tablets
            1024: { slidesPerView: 3 }, // 3 slides for desktops
          }}
          className={styles.swiperContainer}
        >
          {history.map((historyItem, id) => (
            <SwiperSlide key={id} className={styles.swiperSlide}>
              <div className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                  className={styles.historyImage}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{historyItem.organisation}</h3>
                  <h4>- <i>{historyItem.role}</i></h4>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => (
                      <li key={id}>{experience}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        
      </div>
    </section>
  );
};