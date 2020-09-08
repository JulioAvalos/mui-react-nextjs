import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Theme from '../src/UI/Theme';
import Header from '../src/UI/Header';
import Footer from '../src/UI/Footer';

export default function MyApp(props) {
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={Theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header 
          value={value} 
          setValue={setValue} 
          selectedIndex={selectedIndex} 
          setSelectedIndex={setSelectedIndex} 
        />
        <Component {...pageProps} setValue={setValue} setSelectedIndex={setSelectedIndex} />
        <Footer 
          value={value} 
          setValue={setValue} 
          selectedIndex={selectedIndex} 
          setSelectedIndex={setSelectedIndex} 
        />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
