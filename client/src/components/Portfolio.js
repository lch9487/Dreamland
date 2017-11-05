import React from 'react';
import Youtube from '../img/youtube.png';
import Weather from '../img/weather.png';
import Emaily from '../img/emaily.png';
import '../style/portfolio.css';

export default () => {
  return (
    <section className="no-padding" id="portfolio">
		<div className="container-fluid">
			<div className="row no-gutter popup-gallery">
				<div className="col-lg-4 col-sm-6">
					<a href="https://rocky-fortress-51379.herokuapp.com/youtube"
						className="portfolio-box"> <img
						src={Youtube}
						className="img-responsive" alt="youtube" />
						<div className="portfolio-box-caption">
							<div className="portfolio-box-caption-content">
								<div className="project-category text-faded">Youtube</div>
								<div className="project-name">Search whatever videos you want</div>
							</div>
						</div>
					</a>
				</div>
				<div className="col-lg-4 col-sm-6">
					<a href="https://rocky-fortress-51379.herokuapp.com/weather" className="portfolio-box"> <img
						src={Weather}
						className="img-responsive" alt="weather" />
						<div className="portfolio-box-caption">
							<div className="portfolio-box-caption-content">
								<div className="project-category text-faded">Weather</div>
								<div className="project-name">Get a forecast of five days weather</div>
							</div>
						</div>
					</a>
				</div>
				<div className="col-lg-4 col-sm-6">
					<a href="https://protected-dawn-64940.herokuapp.com/" className="portfolio-box"> <img
						src={Emaily}
						className="img-responsive" alt="emaily" />
						<div className="portfolio-box-caption">
							<div className="portfolio-box-caption-content">
								<div className="project-category text-faded">Emaily</div>
								<div className="project-name">Do surveys on product satisfaction via sending emails to your customers</div>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	</section>
  );
}
