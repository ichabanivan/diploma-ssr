// outsource dependencies
import moment from 'moment';
import Head from 'next/head';
import { END } from 'redux-saga';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, CardTitle, CardText, ListGroup, ListGroupItem } from 'reactstrap';

// local dependencies
import { wrapper } from '../../store';
import Page from '../../components/page';
import Spinner from '../../components/spinner';
import CardNews from '../../components/card-news';
import { TYPE, selector } from '../../controller/news/data-local/reducer';

function News () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: TYPE.INITIALIZE });
  }, [dispatch]);

  const { list, aside, disabled } = useSelector(selector);

  return <Page>
    <Head>
      <title>Local Data</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container>
      <Row className="mb-3 py-3">
        <Col xs="8" tag="h1" className="mb-0 text-capitalize">
          Local Data
          { disabled ? <Spinner active /> : null }
        </Col>
        <Col xs="4" tag="p" className="mb-0 d-flex align-items-center justify-content-end">
          { moment().format('LLL') }
        </Col>
      </Row>
      <Row>
        <Col lg="8" md="6" xs="12" tag="main">
          <Row>
            { list?.map((item, index) => <Col key={index} xs="12" md="6" lg="4" className="mb-3">
              <CardNews {...item} />
            </Col>) }
          </Row>
        </Col>
        <Col tag="aside">
          <ListGroup>
            { aside?.map(({ title, description }, index) => <ListGroupItem key={index}>
              <CardTitle tag="h5" className="mb-2 mt-0">{ title }</CardTitle>
              <CardText>{ description }</CardText>
            </ListGroupItem>) }
          </ListGroup>
        </Col>
      </Row>
    </Container>
  </Page>;
}

export const getServerSideProps = wrapper.getServerSideProps(store =>
  async () => {
    store.dispatch({ type: TYPE.INITIALIZE });
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);

export default News;
