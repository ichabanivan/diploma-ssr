
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
        <ListGroup horizontal className="d-flex align-items-center h-100">
          <div className="text-white px-2">
            <ListGroupItem tag={Link} href="/news/[category]" as="/news/Ukraine">
              Ukraine
            </ListGroupItem>
          </div>
          <ListGroupItem tag={Link} href="/news/[category]" as="/news/sport" >
            Sport
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
