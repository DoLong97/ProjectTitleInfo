import '../styles/globals.css'
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import 'antd/dist/antd.css';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
