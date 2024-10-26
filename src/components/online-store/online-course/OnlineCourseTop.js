import React from "react";
import "../../../assets/styles/online-store/online-course/onlinecoursetop.css";
import img from "../../../assets/images/online-store/online-course/course-intro-image-purple.svg";
const OnlineCourse = () => {
	return (
		<div className="online-course-container-podia">
			{/* Heading Section */}
			<div className="online-course-header-podia">
				<h2>Create and sell online courses</h2>
				<p>
					Turn what you know into what you get paid for. Podia makes it easy to
					sell courses that your audience will love.
				</p>
				<button className="start-selling-btn-podia">Start selling today</button>
			</div>

			{/* Image and Text Section */}
			<div className="online-course-content-podia">
				<div className="course-image-podia">
					<img src={img} alt="Course Preview-podia" />
				</div>
				<div className="course-description-podia">
					<h3>You’ll love how your course looks, and so will your students</h3>
					<p>
						Podia makes it easy to set up a clean, gorgeous online course in
						minutes, no coding skills needed.
					</p>
				</div>
			</div>
		</div>
	);
};

export default OnlineCourse;
