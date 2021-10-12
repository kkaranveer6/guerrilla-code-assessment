import React from "react";
import './about.styles.css';

const About = () => {
	return (
		<>
			<section className="about-section">
				<div className="about-container">
					<div className="about-image"></div>
					<div className="about-content">
						<h3>Award winning real estate company in Dubai</h3>
						<p>Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. lpsum, turpis facilisis tempor pulvinar in labortis ornare magna.</p>
						<div className="history">
							<div className="past-work">
								<p>PREVIOUR PROJECTS</p>
								<h3>34+</h3>
							</div>
							<div className="past-work">
								<p>YEARS EXPERIENCE</p>
								<h3>20y</h3>
							</div>
							<div className="past-work">
								<p>ONGOING PROJECTS</p>
								<h3>12</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default About;