import React, { useState } from 'react';
import { Box, Container, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
import BlockTitle from 'components/block-title';
import Image from 'components/image';
import { AiFillDollarCircle, AiFillPieChart } from 'react-icons/ai';
import { FaBriefcase, FaCog } from 'react-icons/fa';
import funnel from 'assets/filter-funnel.png';
import dotPattern from 'assets/dot-pattern.svg';

const Featured = () => {
  const [tab, setTab] = useState({
    active: 'budget',
  });

  const handleTab = (tab) => {
    if (tab === 'budget') {
      setTab({
        ...tab,
        active: 'budget',
      });
    }
    if (tab === 'adjust') {
      setTab({
        ...tab,
        active: 'adjust',
      });
    }
    if (tab === 'report') {
      setTab({
        ...tab,
        active: 'report',
      });
    }
    if (tab === 'create') {
      setTab({
        ...tab,
        active: 'create',
      });
    }
  };
  return (
    <Box as="section" id='featured' sx={styles.featured}>
      <Container sx={styles.container}>
        <BlockTitle
          title="Our vetting process"
          text="The Vetting process we have at Bootstartup is one of the most rigorous processes in the industry."
        />
        <div sx={styles.centerAlign}>
          The process involves a combination of various specific coding challenges, communication tests to establish domain knowledge, real time coding puzzle questions which are improvised by leading industry experts and former FAANG employees. After passing through each of these rigorous tests, they have to pass a final round where they will be assessed on their team spirit, aptitude and their attitude as well.
        </div>
        <Box sx={styles.tabContent}>
          <Image src={funnel} alt="tab image" className="tabImage" />
        </Box>
      </Container>
    </Box>
  );
};

export default Featured;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const styles = {
  featured: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
    backgroundColor: '#F9FAFC',
  },
  container: {
    position: 'relative',
    top: '150px',
    mt: '-150px',
    // paddingBottom: '100px',
  },
  tabButtonTopWrapper: {
    overflowY: ['hidden', null, null, null, null, 'inherit'],
    overflowX: ['auto', null, null, null, null, 'inherit'],
  },
  tabButtonWrapper: {
    width: ['700px', null, null, null, null, '100%'],
    mx: ['auto', null, null, null, null, '0'],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '1px solid rgba(1,7,13,.1)',
    mb: '35px',
    button: {
      display: 'flex',
      alignItems: 'center',
      pb: ['15px', null, null, null, '35px'],
      px: ['15px', null, null, null, '30px'],
      flexShrink: '0',
      border: 0,
      backgroundColor: 'rgba(0,0,0,0)',
      color: '#0F2137',
      fontSize: ['14px', null, null, null, '18px'],
      fontWeight: 500,
      lineHeight: 1,
      position: 'relative',
      transition: 'all 500ms ease',
      svg: {
        fontSize: ['18px', null, null, null, '30px'],
        color: '#ADBDD0',
        opacity: 0.7,
        mr: '15px',
        transition: 'all 500ms ease',
      },
      '&:hover, &.active': {
        backgroundColor: 'rgba(0,0,0,0)',
        color: '#0F2137',
        svg: {
          color: '#0F2137',
          opacity: 1,
        },
        '&::before': {
          transform: 'scale(1,1)',
        },
      },
      '&::before': {
        content: "''",
        position: 'absolute',
        bottom: '-2px',
        backgroundColor: '#0F2137',
        left: 0,
        width: '100%',
        height: '3px',
        transform: 'scale(0,1)',
        transition: 'transform 500ms ease',
      },
    },
  },
  tabContent: {
    minHeight: ['190px', null, '200px', '285px', null, '600px'],
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&::before': {
      content: "''",
      width: '202px',
      height: '247px',
      backgroundImage: `url(${dotPattern})`,
      position: 'absolute',
      bottom: '-30px',
      right: '-40px',
      display: ['none', null, null, null, null, 'block'],
    },
    '.tabImage': {
      paddingTop: '20px',
      position: 'relative',
      top: '-70px',
      opacity: '0.7',
      height: '500px',
      width: '70%',
      animation: `${fadeIn} 0.8s linear`,
    },
  },
  centerAlign: {
    textAlign: 'center',
  }
};
