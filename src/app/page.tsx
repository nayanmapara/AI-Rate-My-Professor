export default function Home() {
	const headingOneSize = {
		fontSize: "36px",
	};

	const overallStyle = {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		height: "100vh",
		textAlign: "center",
		padding: "20px",
		border: "1px solid #ccc",
		borderRadius: "50px",
		color: "white",
	};

	const buttonStyle = {
		position: "absolute",
		right: "20px",
		top: "20px",
		padding: "10px 20px",
		fontSize: "20px",
		backgroundColor: "#71AFFF",
		color: "white",
		border: "none",
		borderRadius: "50px",
	};

	const inputStyle = {};

	return (
		<div style={overallStyle}>
			<h1 style={headingOneSize}> Rate My Professor</h1>
			<input type="text" placeholder="School Name" />
			<input type="text" placeholder="Professor Name" />
			<button style={buttonStyle}>Submit</button>
		</div>
	);
}
