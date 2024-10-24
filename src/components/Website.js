import React from "react";
import WebsiteTop from "./website/WebsiteTop";
import WebsiteCard from "./website/WebsiteCard";
import WebsiteDesign from "./website/WebsiteDesign";
import WebsiteQuotes from "./website/WebsiteQuotes";
import WebsiteBusinessCard from "./website/WebsiteBusinessCard";
import WebsiteFAQ from "./website/WebsiteFAQ";
const Website = () => {
	return (
		<>
			<WebsiteTop />
			<WebsiteCard />
			<WebsiteDesign />
			<WebsiteQuotes />
			<WebsiteBusinessCard />
			<WebsiteFAQ />
		</>
	);
};

export default Website;
