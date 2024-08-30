"use client";

import React, { useState } from "react";

export default function Home() {
	const [hovered, setHovered] = useState(false); //for hover color of button

	const overallStyle = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		height: "100vh",
		textAlign: "center",
		border: "1px solid #ccc",
		backgroundColor: "linear-gradient(to bottom, #004CC5, #87CEEB)",
		color: "white",
		boxSizing: "border-box",
	};

	const cardStyle = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "#ffffff",
		borderRadius: "15px",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
		padding: "20px",
		width: "100%",
		boxSizing: "border-box",
	};

	const headingOneStyle = {
		width: "100vw",
		padding: "20px",
		background: "linear-gradient(to bottom, #191970, rgba(25, 25, 112, 0))",
		color: "white",
		textAlign: "center",
		boxSizing: "border-box",
	};

	const headingOneSize = {
		fontSize: "46px",
		margin: "0",
		padding: "0",
	};

	const contentStyle = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		marginTop: "20px",
		width: "100%",
		maxWidth: "600px",
	};

	const buttonStyle = {
		marginTop: "10px",
		padding: "10px 20px",
		fontSize: "20px",
		backgroundColor: hovered ? "#4DA3FF" : "#71AFFF",
		color: "white",
		border: "none",
		borderRadius: "50px",
		cursor: "pointer",
		transition: "background-color 0.3s ease",
	};

	//our textboxes
	const inputStyle = {
		width: "100%",
		maxWidth: "400px",
		padding: "10px",
		margin: "10px 0",
		border: "1px solid #ccc",
		borderRadius: "20px",
	};

	return (
		<div style={overallStyle}>
			<div style={headingOneStyle}>
				<h1 style={headingOneSize}> Rate My Professor</h1>
			</div>
			<div style={contentStyle}>
				<div style={cardStyle}>
					<input type="text" placeholder="School Name" style={inputStyle} />
					<input type="text" placeholder="Professor Name" style={inputStyle} />
					<button
						style={buttonStyle}
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
}
