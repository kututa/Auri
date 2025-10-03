
import "./globals.css";
import Header from "../components/header/header";
import Footer from "../components/footer/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				{/* use a flex column so the footer stays at the bottom when content is short */}
				<div className="flex min-h-screen flex-col">
					<Header />

					{/* main content grows to take available space */}
					<main className="flex-grow">{children}</main>

					{/* persistent footer (placed outside children so page styles won't remove it) */}
					<Footer />
				</div>
			</body>
		</html>
	);
}

