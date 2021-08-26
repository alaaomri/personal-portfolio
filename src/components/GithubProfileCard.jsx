import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Card,
  Col,
  Row,
  Container,
} from "reactstrap";

import SocialLinks from "../components/SocialLinks";

const GithubProfileCard = ({ prof }) => {
  const { t } = useTranslation();
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img src={prof.avatar_url} style={{ width: "200px" }} alt="" className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4" />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">
                {t('github.title')}
              </h2>
              <p className="lead text-white mt-3">
                {t('github.reachme')}
              </p>
              <p className="text-white mt-3">
                {prof.bio}
              </p>
              <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                <i className="ni ni-pin-3 text-info mr-2" />
                {prof.location}
              </div>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
}

export default GithubProfileCard;