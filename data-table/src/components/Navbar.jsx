import React from 'react';
import DownloadButton from './DownloadButton';

function Navbar({}) {
  return (
    <div className=''>
      <nav className='flex justify-between px-4 text-cyan-500 py-4 bg-black'>
        <div className='text-center font-bold text-xl'>Table-Data</div>
        <DownloadButton  />
      </nav>
    </div>
  );
}

export default Navbar;
