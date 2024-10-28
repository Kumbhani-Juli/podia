import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Website from "./components/Website";
import Email from "./components/Email";
import OnlineStore from "./components/online-store/OnlineStore";
import OnlineCourse from "./components/online-store/OnlineCourse";
import SwitchToPodia from "./components/SwitchToPodia";
import PricingPage from "./components/PricingPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					exact
					path="/"
					element={
						<>
							<Header />
							<Home />
							<Footer />{" "}
						</>
					}
				/>{" "}
				<Route
					exact
					path="/website"
					element={
						<>
							<Header bgcolor="#E39A4D" color="#452623" />
							<Website />
							<Footer bgcolor="#f6ddc4" color="#452623" />
						</>
					}
				/>{" "}
				<Route
					exact
					path="email/"
					element={
						<>
							<Header bgcolor="#cbb0eb" color="#1f1738" />
							<Email />
							<Footer bgcolor="#e5d7f5" color="#1f1738" />{" "}
						</>
					}
				/>{" "}
				<Route
					exact
					path="online-store/"
					element={
						<>
							<Header bgcolor="#a5c8d8" color=" #10242F" />
							<OnlineStore />
							<Footer bgcolor="#a5c8d8" color=" #10242F" />{" "}
						</>
					}
				/>{" "}
				<Route
					exact
					path="online-course/"
					element={
						<>
							<Header bgcolor="#a5c8d8" color=" #10242F" />
							<OnlineCourse />
							<Footer bgcolor=" #a5c8d8" color=" #10242F" />{" "}
						</>
					}
				/>{" "}
				<Route
					exact
					path="switch/"
					element={
						<>
							<Header bgcolor="#f6ddc4" color="#452623" />
							<SwitchToPodia />
							<Footer bgcolor="#fff" color="#06040e" />{" "}
						</>
					}
				/>{" "}
				<Route
					exact
					path="pricing/"
					element={
						<>
							<Header bgcolor="#e5d7f5" color="#1F1738" />
							<PricingPage />
							<Footer bgcolor="#e5d7f5" color="#1F1738" />{" "}
						</>
					}
				/>{" "}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
