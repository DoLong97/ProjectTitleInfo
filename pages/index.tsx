import React from 'react';
import dynamic from 'next/dynamic';
const MainView = dynamic(() => import('../view'));

export default function Root() {
  return (
    <>
      <MainView />
    </>
  );
}
