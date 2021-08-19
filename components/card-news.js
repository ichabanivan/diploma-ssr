
// outsource dependencies
import moment from 'moment';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Card, CardBody, CardFooter, CardSubtitle, CardText, CardTitle } from 'reactstrap';

// local dependencies
import placeholderIMG from '../assets/placeholder.png';

function CardNews ({ title, urlToImage, description, publishedAt, author }) {
  return <Card className="h-100">
    {
      urlToImage
        ? <img src={urlToImage} alt={title} className="img-fluid" />
        : <Image src={urlToImage || placeholderIMG} alt={title} className="img-fluid" />
    }
    <CardBody>
      <CardTitle tag="h5" className="mb-2 mt-0">{ title }</CardTitle>
      <CardSubtitle tag="h6" className="mb-2 mt-0">
        { author }
      </CardSubtitle>
      <CardText>{ description }</CardText>
    </CardBody>
    <CardFooter className="text-center">
      { moment(publishedAt).format('LLL') }
    </CardFooter>
  </Card>;
}

CardNews.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  urlToImage: PropTypes.string,
  description: PropTypes.string,
  publishedAt: PropTypes.string,
};

CardNews.defaultProps = {
  title: '-',
  description: '-',
  urlToImage: null,
  publishedAt: new Date(),
  author: 'Unknown author'
};

export default memo(CardNews);
