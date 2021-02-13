import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { CssBaseline } from '@material-ui/core';
import 'fontsource-roboto';

export default function App({ Component, pageProps }: AppProps) {
    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles);
        }
    }, []);
    
    return (
        <>
            <Head>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <CssBaseline />
            <Component {...pageProps} />
        </>
    )
}