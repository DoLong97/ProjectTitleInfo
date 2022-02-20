/* eslint-disable react/display-name */
import React from 'react';
import dynamic from 'next/dynamic';
const MainView = dynamic(() => import('../views/Main/index.js'));

export default function Root() {
  return (
    <>
      <MainView />
    </>
  );
}
