
// outsource dependencies
import moment from 'moment';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

function Page ({ children }) {
  return <>
    <header className="bg-dark p-4 d-flex align-items-center justify-content-between">
      <h1 className="text-white mb-0">NEWS.com</h1>
      <nav className="d-flex align-items-center h-100 nav-links">
        <Link href="/news/data-local" as="/news/data-local">
            Local Data
        </Link>
        <Link href="/news/data-api" as="/news/data-api">
            Data from API
        </Link>
        <Link href="/news/images-original" as="/news/images-original">
            Images original
        </Link>
        <Link href="/news/images-compressed" as="/news/images-compressed">
            Images Compressed
        </Link>
        <Link href="/news/images-resized" as="/news/images-resized">
            Images Cropped
        </Link>
      </nav>
    </header>
    <div className="flex-grow-1">
      { children }
    </div>
    <footer className="bg-dark p-4 d-flex justify-content-center text-white">
      &copy;
      { moment().format('YYYY') }
    </footer>
  </>;
}

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export default memo(Page);
