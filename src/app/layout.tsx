import type { Metadata } from "next";
import { seoData } from "~/lib/seo";

import "@fontsource-variable/jetbrains-mono";

import "~/styles/globals.css";
import { Footer } from "~/components/shared/layout/footer";
import { Header } from "~/components/shared/layout/header";
import { Div } from "~/components/ui/form/div";

export const metadata: Metadata = seoData;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Div
					m={0}
					p={0}
					boxSizing="border-box"
					borderX={3}
					borderColor="rgba(255, 255, 255, 0.19)"
					borderStyle="solid"
					mx="5.5em"
					minH="100vh"
					bg="url(../../public/grid.svg)"
					bgSize="cover"
					bgPosition="center"
					display="flex"
					flexDirection="column"
				>
					<Header />
					<Div flex={1}>{children}</Div>
					<Footer />
				</Div>
			</body>
		</html>
	);
}
