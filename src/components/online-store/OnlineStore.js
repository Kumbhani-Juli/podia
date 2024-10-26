import React from "react";
import OnlineStoreTop from "./online-store/Online-StoreTop";
import MultiCardContent from "./online-store/MultiCardContent";
import OnlineFeatures from "./online-store/OnlineFeature";
import OnlineQuotes from "./online-store/OnlineQuotes";
import OnlineCards from "./online-store/OnlineCard";
import OnlineFAQ from "./online-store/OnlineFAQ";
const OnlineStore = () => {
	return (
		<>
			<OnlineStoreTop />
			<MultiCardContent />
			<OnlineFeatures />
			<OnlineQuotes />
			<OnlineCards />
			<OnlineFAQ />
		</>
	);
};

export default OnlineStore;
