import React from "react";
import EmailTop from "./Email/Emailtop";
import EmailCard from "./Email/EmailCards";
import EmailContainerGrid from "./Email/EmailContainerGrid";
import EmailDesign from "./Email/EmailDesign";
import EmailQuotes from "./Email/EmailQuotes";
import EmailBusinessCard from "./Email/EmailBusinessCard";
import EmailFAQ from "./Email/EmailFAQ";
const Email = () => {
	return (
		<>
			<EmailTop />
			<EmailCard />
			<EmailContainerGrid />
			<EmailDesign />
			<EmailQuotes />
			<EmailBusinessCard />
			<EmailFAQ />
		</>
	);
};

export default Email;
