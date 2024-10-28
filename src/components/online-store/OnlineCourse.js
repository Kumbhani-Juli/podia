import React from "react";
import OnlineCourseTop from "./online-course/OnlineCourseTop";
import MultiCardCourse from "./online-course/MultiCardCourse";
import MultiCardGrid from "./online-course/MultiCardGrid";
import BannerOnlineCourse from "./online-course/BannerOnlineCourse";
const OnlineCourse = () => {
	return (
		<>
			<OnlineCourseTop />
			<MultiCardCourse />
			<MultiCardGrid />
			<BannerOnlineCourse />
		</>
	);
};

export default OnlineCourse;
