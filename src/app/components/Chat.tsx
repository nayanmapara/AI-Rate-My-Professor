import { useState, useEffect } from "react";
import {
	Button,
	TextField,
	List,
	ListItem,
	Container,
	Paper,
	Box,
} from "@mui/material";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark, materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";

interface ChatProps {
	theme: "light" | "dark";
	toggleTheme: () => void;
}

export default function Chat({ theme, toggleTheme }: ChatProps) {
	const [message, setMessage] = useState("");
	const [response, setResponse] = useState("");
	const [conversationHistory, setConversationHistory] = useState("");

	useEffect(() => {
		document.body.classList.remove("light", "dark");
		document.body.classList.add(theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	const handleSend = async () => {
		try {
			const latestInfo = `[
    {
        "name": "Maximiliaan VanWoudenberg",
        "department": "Literature",
        "college": "Sheridan College - Oakville",
        "quality_rating": 3.1,
        "would_take_again_percentage": 100.0,
        "difficulty_rating": 2.8
    },
    {
        "name": "Dani Roche",
        "department": "Design",
        "college": "Sheridan College - Oakville",
        "quality_rating": 1.0,
        "would_take_again_percentage": 0.0,
        "difficulty_rating": 2.0
    },
    {
        "name": "Philip Stubbs",
        "department": "Computer Science",
        "college": "Sheridan College - Oakville",
        "quality_rating": 4.7,
        "would_take_again_percentage": "N/A",
        "difficulty_rating": 2.6
    },
    {
        "name": "Penny Davis",
        "department": "Early Childhood Education",
        "college": "Sheridan College - Oakville",
        "quality_rating": 4.0,
        "would_take_again_percentage": "N/A",
        "difficulty_rating": 3
    },
    {
        "name": "Victoria Renton",
        "department": "Business",
        "college": "Sheridan College - Oakville",
        "quality_rating": 5.0,
        "would_take_again_percentage": 91,
        "difficulty_rating": 2.1
    },
    {
        "name": "Roger Halfacre",
        "department": "Business",
        "college": "Sheridan College - Oakville",
        "quality_rating": 5.0,
        "would_take_again_percentage": 100,
        "difficulty_rating": 1.6
    },
    {
        "name": "Keith Barnwell",
        "department": "Marketing",
        "college": "Sheridan College - Oakville",
        "quality_rating": 4.6,
        "would_take_again_percentage": "N/A",
        "difficulty_rating": 2.4
    },
    {
        "name": "Scott Stratten",
        "department": "Business",
        "college": "Sheridan College - Oakville",
        "quality_rating": 4.7,
        "would_take_again_percentage": "N/A",
        "difficulty_rating": 1.2
    },
    {
        "name": "Judith Green",
        "department": "Psychology",
        "college": "Sheridan College - Oakville",
        "quality_rating": 5.0,
        "would_take_again_percentage": "N/A",
        "difficulty_rating": 1
    },
    {
        "name": "Heather Fritzley",
        "department": "Psychology",
        "college": "Sheridan College - Oakville",
        "quality_rating": 4.9,
        "would_take_again_percentage": "N/A",
        "difficulty_rating": 2
    },
    {
        "name": "Scott Eckert",
        "department": "Design",
        "college": "Sheridan College - Oakville",
        "quality_rating": 5.0,
        "would_take_again_percentage": 100,
        "difficulty_rating": 1
    },
    {
        "name": "Nathalie Di Francesco",
        "department": "Early Childhood Education",
        "college": "Sheridan College - Oakville",
        "quality_rating": 5.0,
        "would_take_again_percentage": 100,
        "difficulty_rating": 1.8
    },
    {
        "name": "Christine Ward",
        "department": "Marketing",
        "college": "Sheridan College - Oakville",
        "quality_rating": 4.4,
        "would_take_again_percentage": "N/A",
        "difficulty_rating": 1.8
    },
    {
        "name": "Marco Cibola",
        "department": "Art",
        "college": "Sheridan College - Oakville",
        "quality_rating": 4.9,
        "would_take_again_percentage": 100,
        "difficulty_rating": 2.7
    },
    {
        "name": "Stacey Cadmen",
        "department": "Education",
        "college": "Sheridan College - Oakville",
        "quality_rating": 4.0,
        "would_take_again_percentage": 67,
        "difficulty_rating": 2.4
    },
    {
        "name": "Jasmine Birch",
        "department": "Business",
        "college": "Sheridan College - Oakville",
        "quality_rating": 3.6,
        "would_take_again_percentage": 34,
        "difficulty_rating": 3.1
    },
    {
        "name": "Linda Ferguson",
        "department": "Business",
        "college": "Sheridan College - Oakville",
        "quality_rating": 2.8,
        "would_take_again_percentage": 50,
        "difficulty_rating": 2.8
    },
    {
        "name": "Alexandra Jackson",
        "department": "Social Work",
        "college": "Sheridan College - Oakville",
        "quality_rating": 1.0,
        "would_take_again_percentage": 0,
        "difficulty_rating": 3
    },
    {
        "name": "Gillian Chubb",
        "department": "Media Studies",
        "college": "Sheridan College - Oakville",
        "quality_rating": 3.5,
        "would_take_again_percentage": "N/A",
        "difficulty_rating": 2.4
    },
    {
        "name": "David Nowell",
        "department": "Marketing",
        "college": "Sheridan College - Oakville",
        "quality_rating": 2.2,
        "would_take_again_percentage": 26,
        "difficulty_rating": 4
    },
    {
        "name": "Ed Sykes",
        "department": "Computer Science",
        "college": "Sheridan College - Oakville",
        "quality_rating": 2.8,
        "would_take_again_percentage": 3,
        "difficulty_rating": 3.7
    },
    {
        "name": "Adam Finely",
        "department": "Media Arts",
        "college": "Sheridan College - Oakville",
        "quality_rating": 1.6,
        "would_take_again_percentage": 5,
        "difficulty_rating": 3.4
    },
    {
        "name": "Linda Gowda",
        "department": "Economics",
        "college": "Sheridan College - Oakville",
        "quality_rating": 4.0,
        "would_take_again_percentage": "N/A",
        "difficulty_rating": 2.6
    }
    ]`;
			const combinedMessage = `${latestInfo}\n\n${message}`;

			const response = await fetch("/api/chat", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ messages: [{ content: combinedMessage }] }),
			});

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			const result = await response.json();
			const resultText = result.trim().replace("AI: ", "");

			setResponse(resultText); // Update state with response
			setConversationHistory(
				conversationHistory + "AI: " + resultText + "\n"
			); // Add to history
		} catch (error) {
			console.error("Error generating response:", error);
			setResponse("Sorry, there was an error generating a response.");
		}

		setMessage(""); // Clear input field
	};

	return (
		<Container
			className="h-screen p-4"
			maxWidth="md"
			sx={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Paper
				elevation={3}
				className={`flex-1 p-4 mb-4 overflow-y-auto ${
					theme === "dark" ? "bg-[#152238]" : "bg-[#ffffff]"
				}`}
				style={{
					maxHeight: "70vh",
					borderRadius: "12px",
				}}
			>
				<List>
					{conversationHistory.split("\n").map((msg, idx) => (
						<ListItem key={idx}>
							<ReactMarkdown
								components={{
									code({ node, inline, className, children, ...props }) {
										const match = /language-(\w+)/.exec(className || "");
										return !inline && match ? (
											<SyntaxHighlighter
												style={theme === "dark" ? materialDark : materialLight}
												language={match[1]}
												PreTag="div"
												{...props}
											>
												{String(children).replace(/\n$/, "")}
											</SyntaxHighlighter>
										) : (
											<code className={className} {...props}>
												{children}
											</code>
										);
									},
								}}
							>
								{msg}
							</ReactMarkdown>
						</ListItem>
					))}
				</List>
			</Paper>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 2,
					marginTop: 2,
				}}
			>
				<TextField
					fullWidth
					multiline
					minRows={4}
					variant="outlined"
					sx={{
						borderRadius: "12px",
						"& .MuiOutlinedInput-root": {
							borderRadius: "12px",
						},
					}}
					placeholder="Type your message here..."
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					className={`mb-4 ${theme === "dark" ? "bg-[#152238]" : "bg-[#fff]"}`}
					InputProps={{ style: { color: theme === "dark" ? "#fff" : "#000" } }}
					InputLabelProps={{
						style: { color: theme === "dark" ? "#aaa" : "#555" },
					}}
				/>
				<Button
					fullWidth
					variant="contained"
					sx={{
						borderRadius: "50px",
						bgcolor: "green",
						":hover": {
							bgcolor: "#66bb6a", // Set the hover color to green
						},
					}}
					onClick={handleSend}
					disabled={!message} // Disable if message is empty
					className={`mb-4 ${
						theme === "dark" ? "bg-[#516bff]" : "bg-[#516bff]"
					}`}
				>
					Send
				</Button>
			</Box>
		</Container>
	);
}
