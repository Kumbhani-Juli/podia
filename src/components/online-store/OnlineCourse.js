import React from "react";
import OnlineCourseTop from "./online-course/OnlineCourseTop";
import MultiCardCourse from "./online-course/MultiCardCourse";
import MultiCardGrid from "./online-course/MultiCardGrid";
import BannerOnlineCourse from "./online-course/BannerOnlineCourse";
import OnlineCourseCard from "./online-course/OnlineCourseCard";
import OnlineStoreQuotes from "./online-course/OnlineStoreQuotes";
import OnlineDesign from "./online-course/OnlineDesign";
import OnlineCourseFAQ from "./online-course/OnlineFAQ";
const OnlineCourse = () => {
	return (
		<>
			<OnlineCourseTop />
			<MultiCardCourse />
			<MultiCardGrid />
			<BannerOnlineCourse />
			<OnlineCourseCard />
			<OnlineStoreQuotes />
			<OnlineDesign />
			<OnlineCourseFAQ />
		</>
	);
};

export default OnlineCourse;
