export default function Home() {
	const headingOneSize = {
		fontSize: "36px",
	};

	const overallStyle = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100vh",
		textAlign: "center",
		padding: "20px",
		border: "1px solid #ccc",
		borderRadius: "50px",
		color: "white",
	};

	return (
		<div style={overallStyle}>
			<h1 style={headingOneSize}> Rate My Professor</h1>
			<input type="text" placeholder="School Name" className="" />
			<input type="text" placeholder="Professor Name" className="" />
		</div>
	);
}
