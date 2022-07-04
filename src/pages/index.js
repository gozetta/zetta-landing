import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import CallToAction from 'sections/call-to-action';
import Featured from 'sections/featured';
import Testimonials from 'sections/testimonials';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Bootstartup" />
          <Banner />
          <Services />
          <CallToAction />
          <Featured />
          <Testimonials />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
