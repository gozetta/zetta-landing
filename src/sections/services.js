import React from 'react';
import { Box, Container, Grid } from 'theme-ui';
import BlockTitle from 'components/block-title';
import ServiceCard from 'components/cards/service-card';
import serviceImage1 from 'assets/service-1.png';
import serviceImage2 from 'assets/service-2.png';
import serviceImage3 from 'assets/service-3.png';
import serviceImage4 from 'assets/service-4.png';
import serviceImage5 from 'assets/service-5.png';
import serviceImage6 from 'assets/service-6.png';

const SERVICES_DATA = [
  {
    image: serviceImage1,
    heading: 'Cream Of The Crop Talent',
    text: 'Hire the best developer talent from around the world.',
    path: '#',
  },
  {
    image: serviceImage2,
    heading: 'Intense Vetting Process',
    text: 'We have a rigorous vetting process to ensure that only the best applicants are selected to be a part of your team.',
    path: '#',
  },
  {
    image: serviceImage3,
    heading: 'Attitude & Aptitude Check',
    text: 'We place heavy emphasis on the importance of a good and collaborative attitude.',
    path: '#',
  },
  {
    image: serviceImage4,
    heading: 'We Work on Your Timezone',
    text: 'Our amazing and talented team of developers will work on your specific timezone.',
    path: '#',
  },
  {
    image: serviceImage5,
    heading: 'Guaranteed Satisfaction',
    text: 'We make sure you receive the best service at a micro-level. However, if you are not satisfied with our service within 30 days, we will offer your money back.',
    path: '#',
  },
  // {
  //   image: serviceImage6,
  //   text:
  //     'Get your info tests delivered at home collect a sample from the your progress tests.',
  //   heading: 'Online support',
  //   path: '#',
  // },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle
          title="Silicon Valley Quality Standards &nbsp;|&nbsp; Global Talent"
          // text="Features are highlighted here"
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr'],
  },
};
