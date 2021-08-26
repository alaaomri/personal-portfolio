import React, { Fragment } from 'react';

import { Fade } from 'react-reveal';
import DisplayLottie from '../components/DisplayLottie'
import webdev from '../assets/lottie/webdev.json';

import {
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

import { skillsSection } from "../portfolio";
import emoji from 'react-easy-emoji';
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t } = useTranslation();
    return (
        <Fade left duration={1000} distance="40px">
            <Container className="text-center my-5 section section-sm">
                <h1 className="h1">{t('skillsSection.title')}</h1>
                <p className="lead">{t('skillsSection.subTitle')}</p>
                <Row>

                    <Col lg="6">
                        <div className="d-flex justify-content-center flex-wrap mb-5">
                            {
                                skillsSection.softwareSkills.map((skill) => {
                                    return <Fragment key={skill.skillName}>
                                        <div className="icon icon-lg icon-shape shadow rounded-circle mb-5" id={skill.skillName}>
                                            <span className="iconify" data-icon={skill.fontAwesomeClassname} data-inline="false"></span>
                                        </div>
                                        <UncontrolledTooltip
                                            delay={0}
                                            placement="bottom"
                                            target={skill.skillName}
                                        >
                                            {skill.skillName}
                                        </UncontrolledTooltip>
                                    </Fragment>
                                })
                            }
                        </div>

                    </Col>
                    <Col lg="6">
                        <div className="text-align-start">
                            {
                                skillsSection.skills.map((skill, index) => {
                                    return <p key={index}>{emoji(
                                        `⚡   ${t(`skillsSection.skills_${index}`)}`
                                    )}</p>
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fade>
    );
}

export default Skills;