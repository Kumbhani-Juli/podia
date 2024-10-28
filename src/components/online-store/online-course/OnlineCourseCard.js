import React from "react";
import "../../../assets/styles/online-store/online-course/onlinecoursecard.css"; // Import the CSS file for styling
import img1 from "../../../assets/images/online-store/online-course/card-em-connors.avif";
import img2 from "../../../assets/images/online-store/online-course/card-khe-hy.avif";
import img3 from "../../../assets/images/online-store/online-course/Felicia_Reed.avif";
import img4 from "../../../assets/images/online-store/online-course/Untitled_design__15__copy.avif";
const HomeCard = () => {
	return (
		<section className="online-store-card-section">
			<div className="online-store-home-card-headersell">
				<h1>Real online courses built by entrepreneurs like you</h1>
				<p>
					They’re turning their expertise into income with Podia, and so can
					you.
				</p>
			</div>

			<div className="online-store-cards-container">
				<div className="online-store-card">
					<img src={img1} alt="Card 1" className="online-store-card-image" />

					<h3>The Creative Bodega</h3>
					<p>
						"My decision to use Podia has been one of the BEST decisions I could
						have ever made for my small business. Not only is it super easy and
						intuitive to navigate (for a non-techy person like me), but the
						customer support is literally out of this world." Em Connors
					</p>
				</div>
				<div className="online-store-card">
					<img src={img2} alt="Card 2" className="online-store-card-image" />

					<h3>The $10K Institute</h3>
					<p>
						"We design all of our courses around two fundamental principles: A
						delightful learning experience and massive student outcomes. Podia’s
						rich teaching tools, relentless focus on design and deep
						integrations across the creator ecosystem enable us to deliver for
						our students AND grow our sales." Khe Hy
					</p>
				</div>

				<div className="online-store-card">
					<img src={img3} alt="Card 3" className="online-store-card-image" />

					<h3> Felicia Reed Photography </h3>
					<p>
						"I use Podia to manage my marketing, sales, and payments for my
						online business. It’s great because you can set up an account and
						start using it immediately without having to do any technical setup
						or hosting issues. The interface is very simple and intuitive -
						anyone can figure out how it works quickly!" Felicia Reed
					</p>
				</div>
				<div className="online-store-card">
					<img src={img4} alt="Card 4" className="online-store-card-image" />

					<h3>Swiss Innovation Academy</h3>
					<p>
						"Podia helps me to share my passion for Service Design with people
						from all around the world in a simple and human way. It’s the only
						tool that I tested that has the simplicity and design quality that I
						expected. You have everything in one place, your store, your blog,
						your website, and even your CRM.” Daniele Catalanotto
					</p>
				</div>
			</div>
		</section>
	);
};

export default HomeCard;
