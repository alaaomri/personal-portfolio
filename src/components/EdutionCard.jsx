import React from "react";
import { Card, CardBody, Badge } from "reactstrap";

import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";

const EdutionCard = ({ education, index }) => {
	const { t } = useTranslation();
	return (
		<Fade right duration={1000} distance="40px">
			<Card className="card-lift--hover shadow mt-4">
				<CardBody>
					<div className="d-flex px-3">
						<div className="pl-4">
							<h5 className="text-info">
								{t(`educationInfo.schoolName_${index}`)}
							</h5>
							<h6>{t(`educationInfo.subHeader_${index}`)}</h6>
							<Badge color="info" className="mr-1">
								{t(`educationInfo.duration_${index}`)}
							</Badge>
							<p className="description mt-3">{t(`educationInfo.desc_${index}`)}</p>
						</div>
					</div>
				</CardBody>
			</Card>
		</Fade>
	);
};

export default EdutionCard;
