import React , { useEffect, useRef } from 'react'
import Head from 'next/head';

export default function Layout({ children }) {
  const mainRef = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                mainRef.current?.classList.add('scrollTop')
            } else {
                mainRef.current?.classList.remove('scrollTop')
            }
        })
    }, []);
  return (
    <>
          <Head>
              <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          />
          </Head>
            <div className ="main" ref={mainRef}>
                <main>{children}</main>
            </div>
    </>
  )
}