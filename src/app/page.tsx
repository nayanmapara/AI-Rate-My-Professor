export default function Home() {
	const overallStyle = {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		height: "100vh",
		textAlign: "center",
		padding: "20px",
		border: "1px solid #ccc",
		backgroundColor: "#004CC5",
		color: "white",
		boxSizing: "border-box",
	};

	const headingOneStyle = {
		width: "100vw",
		padding: "20px",
		backgroundColor: "#191970",
		color: "white",
		textAlign: "center",
		boxSizing: "border-box",
		borderRadius: "0 0 50px 50px",
		margin: "0",
	};

	const headingOneSize = {
		fontSize: "36px",
		margin: "0",
		padding: "0",
	};

	const contentStyle = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		marginTop: "20px",
	};

	const buttonStyle = {
		marginTop: "20px",
		padding: "10px 20px",
		fontSize: "20px",
		backgroundColor: "#71AFFF",
		color: "white",
		border: "none",
		borderRadius: "50px",
		cursor: "pointer",
	};

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
				<input type="text" placeholder="School Name" style={inputStyle} />
				<input type="text" placeholder="Professor Name" style={inputStyle} />
				<button style={buttonStyle}>Submit</button>
			</div>
		</div>
	);
}
