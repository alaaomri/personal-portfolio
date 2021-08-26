import React from 'react';
import { experience } from "../portfolio";
import {
    Container,
    Row,
} from "reactstrap";

import { Fade } from 'react-reveal';

import ExperienceCard from "../components/ExperienceCard";
import { useTranslation } from 'react-i18next';

const Experience = () => {
    const { t } = useTranslation();
    return (
        <section className="section section-sm">
            <Container>
                <Fade left duration={1000} distance="40px">
                    <div className="d-flex p-4">
                        <div>
                            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                                <i className="ni ni-briefcase-24 text-info" />
                            </div>
                        </div>
                        <div className="pl-4">
                            <h4 className="display-3 text-info">{t('experience.title')}</h4>
                        </div>
                    </div>
                    <Row className="row-grid align-items-center">
                        {
                            experience.map((data, i) => {
                                return <ExperienceCard key={i} data={data} index={i} />
                            })
                        }
                    </Row>
                </Fade>
            </Container>
        </section>
    );
}

export default Experience;