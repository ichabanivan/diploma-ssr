
// outsource dependencies
import moment from 'moment';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

function Page ({ children }) {
  return <>
    <header className="bg-dark p-4 d-flex justify-content-between">
      <h1 className="text-white mb-0">NEWS.com</h1>
      <nav>
        <ListGroup horizontal className="d-flex align-items-center h-100 nav-links">
          <ListGroupItem tag={Link} href="/news/data-local" as="/news/data-local">
              Local Data
          </ListGroupItem>
          <ListGroupItem tag={Link} href="/news/data-api" as="/news/data-api">
              Data from API
          </ListGroupItem>
          <ListGroupItem tag={Link} href="/news/images-original" as="/news/images-original">
              Images original
          </ListGroupItem>
          <ListGroupItem tag={Link} href="/news/images-compressed" as="/news/images-compressed">
              Images Compressed
          </ListGroupItem>
          <ListGroupItem tag={Link} href="/news/images-resized" as="/news/images-resized">
              Images Cropped
          </ListGroupItem>
        </ListGroup>
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
