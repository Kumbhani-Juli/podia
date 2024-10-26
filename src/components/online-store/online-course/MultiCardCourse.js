import React from "react";
import "../../../assets/styles/online-store/online-course/multicadcourse.css";

const MultiCardCourse = () => {
	const cards = [
		{
			title: "Ultimate flexibility",
			description:
				"Add as many modules, lessons, videos, audio files, quizzes, embeds, and files as you want. We’ll even host your video content so you don’t need to connect — and pay for — extra tools.",
		},
		{
			title: "Your course, your way",
			description:
				"Build a self-paced course, a cohort-based course, or a course where content is delivered on a schedule.",
		},
		{
			title: "Build stress-free",
			description:
				"Create courses on your 30-day free trial without spending a dime. All plans come with unlimited courses so you can build as much as you like.",
		},
	];

	return (
		<div className="multi-card-course-container">
			<h2>Building your online course has never been easier</h2>
			<p className="intro-text">
				Podia handles all of the tricky parts of creating a course. Just add
				your content and organize it how you want to. Let us deal with the
				technical stuff.
			</p>
			<div className="card-columns">
				{cards.map((card, index) => (
					<div className="card-box" key={index}>
						<div className="check-icon"></div>
						<div className="card-content">
							<h3>{card.title}</h3>
							<p>{card.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MultiCardCourse;
