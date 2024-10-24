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
							<Footer bgcolor="#cbb0eb" color="#1f1738" />{" "}
						</>
					}
				/>{" "}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
