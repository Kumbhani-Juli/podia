import React, { useState, useEffect } from "react";
import "../assets/styles/header.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAngleDown,
	faAngleUp,
	faBars,
	faTimes,
} from "@fortawesome/free-solid-svg-icons"; // Import the icons
import { Link } from "react-router-dom";

const Header = ({ bgcolor, color }) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	const toggleMenu = () => {
		setMenuOpen(!menuOpen); // Toggle the mobile menu
	};

	// Close dropdown if clicked outside
	useEffect(() => {
		const closeDropdown = (e) => {
			if (dropdownOpen && !e.target.closest(".dropdown")) {
				setDropdownOpen(false);
			}
		};

		document.addEventListener("click", closeDropdown);
		return () => document.removeEventListener("click", closeDropdown);
	}, [dropdownOpen]);

	return (
		<header
			className="header"
			style={{ backgroundColor: bgcolor, color: color }}
		>
			<div className="header-left-section-content">
				<div className="left-side">
					<div className="logo">
						<Link to="/">
							<a href="#">podia</a>
						</Link>
					</div>

					<button className="mobile-sign-up">Sign Up Free</button>
					{/* Toggle Button for Mobile */}
					<button className="menu-toggle" onClick={toggleMenu}>
						<FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
					</button>
				</div>
				<nav className={`nav-links ${menuOpen ? "open" : ""}`}>
					<Link to="/website">
						<a href="#">Website</a>
					</Link>
					<Link to="/email">
						<a href="#">Email</a>
					</Link>
					<div className="dropdown">
						<button onClick={toggleDropdown}>
							Online Store{" "}
							<FontAwesomeIcon icon={dropdownOpen ? faAngleUp : faAngleDown} />
						</button>
						{dropdownOpen && (
							<ul className="dropdown-menu">
								<li>
									<Link
										to="/online-store"
										className="header-dropdown-menu-link"
									>
										{" "}
										Online Store
									</Link>
								</li>

								<li>
									<Link
										to="/online-course"
										className="header-dropdown-menu-link"
									>
										{" "}
										Online Courses
									</Link>
								</li>
								<li>Digital Downloads</li>
								<li>Webinars</li>
								<li>Coaching</li>
							</ul>
						)}
					</div>
					<a href="#">Switch to Podia</a>
					<a href="#">Pricing</a>
					<a href="#" className="mobile-login">
						Login
					</a>
				</nav>
			</div>
			<div className="right-side">
				<a href="#" className="login">
					Login
				</a>
				<button className="sign-up">Sign Up Free</button>
			</div>
		</header>
	);
};

export default Header;
