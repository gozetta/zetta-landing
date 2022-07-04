import React from 'react';
import { Box } from 'theme-ui';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BlockTitle from 'components/block-title';
import TestimonialsCard from 'components/cards/testimonial-card';
import testimonialsImage1 from 'assets/testimonial-1-1.png';
import testimonialsImage2 from 'assets/testimonial-1-2.png';
import testimonialsImage3 from 'assets/testimonial-1-3.png';
import testimonialsImage4 from 'assets/testimonial-1-4.png';
import testimonialsImage5 from 'assets/testimonial-1-5.png';
import testimonialsImage6 from 'assets/testimonial-1-6.png';

SwiperCore.use([Autoplay]);

const TESTIMONIALS_DATA = [
  [
    {
      image: testimonialsImage1,
      text:
        'Working with Bootstartup has made hiring developers for our rapidly growing tech team a breeze, and has allowed me to focus on growing my business',
      username: '@startup 1',
      name: 'Lharles Ceclerc',
    },
    {
      image: testimonialsImage2,
      text:
        'Working with Bootstartup has made hiring developers for our rapidly growing tech team a breeze. 11/10 would recommend!',
      username: '@startup 2',
      name: 'Nando Lorris',
    },
  ],
  [
    {
      image: testimonialsImage3,
      text:
        'Such a large pool of amazing developer talent!',
      username: '@m amg',
      name: 'Reorge Gussel',
    },
    {
      image: testimonialsImage4,
      text:
        'Working with Bootstartup has made hiring developers for our rapidly growing tech team a breeze.',
      username: '@hey.hey',
      name: 'Hewis Lamilton',
    },
  ],
  [
    {
      image: testimonialsImage1,
      text:
        'Working with Bootstartup has made hiring developers for our rapidly growing tech team a breeze, and has allowed me to focus on growing my business',
      username: '@startup 1',
      name: 'Lharles Ceclerc',
    },
    {
      image: testimonialsImage2,
      text:
        'Working with Bootstartup has made hiring developers for our rapidly growing tech team a breeze. 11/10 would recommend!',
      username: '@startup 2',
      name: 'Nando Lorris',
    },
  ],
  [
    {
      image: testimonialsImage3,
      text:
        'Such a large pool of amazing developer talent!',
      username: '@m amg',
      name: 'Reorge Gussel',
    },
    {
      image: testimonialsImage4,
      text:
        'Working with Bootstartup has made hiring developers for our rapidly growing tech team a breeze.',
      username: '@hey.hey',
      name: 'Hewis Lamilton',
    },
  ],
  
];

const Testimonials = () => {
  const testimonialCarousel = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoHeight: true,
    autoplay: {
      waitForTransition: false,
      delay: 4000,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };
  return (
    <Box as="section" id="testimonials" sx={styles.testimonials}>
      <BlockTitle
        title="What clients say about us"
        text="Customer testimonials"
      />
      <Swiper {...testimonialCarousel}>
        {TESTIMONIALS_DATA.map((item, index) => (
          <SwiperSlide key={index}>
            {item.map(({ image, text, name, username }, _index) => (
              <TestimonialsCard
                image={image}
                text={text}
                name={name}
                key={_index}
                username={username}
              />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;

const styles = {
  testimonials: {
    backgroundColor: '#F4F4F6',
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['60px', null, null, null, '80px', null, '120px'],
  },
};
