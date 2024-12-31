import { Circle, Container, HStack } from "@styled-system/jsx";
import Link from "next/link";
import { Div } from "~/components/ui/form/div";
import { Image } from "~/components/ui/image";
import { getDiscordUser } from "~/lib/lanyard/api";

import { css } from "@styled-system/css";
import { Github, Linkedin } from "lucide-react";
import { HOVER_TEXT } from "~/lib/animations";

export async function Header() {
	const user = await getDiscordUser();

	return (
		<Div py={10} top={0} pos={"sticky"} w="full">
			<Container w={"full"}>
				<HStack
					flexDirection={"row"}
					justifyContent={"space-between"}
					alignItems={"center"}
				>
					<HStack pos={"relative"}>
						<Circle size="4.5em" overflow="hidden" pos={"absolute"}>
							<Image
								src={`https://cdn.discordapp.com/avatars/852970774067544165/${user.avatar}`}
								alt={`${user.username}`}
								pos={"absolute"}
								zIndex={0}
							/>
						</Circle>
					</HStack>
					<HStack gap={"10"}>
						<Link
							href="https://github.com/chewawi"
							target="_blank"
							referrerPolicy="no-referrer"
							className={
								css({
									display: "flex",
									alignItems: "center",
									gap: "10px",
									padding: "10px",
								}) + HOVER_TEXT
							}
						>
							<Github size={24} />
							GitHub
						</Link>
						<Link
							href="https://github.com/chewawi"
							target="_blank"
							referrerPolicy="no-referrer"
							className={
								css({
									display: "flex",
									alignItems: "center",
									gap: "10px",
									padding: "10px",
								}) + HOVER_TEXT
							}
						>
							<Linkedin size={24} />
							Linkedin
						</Link>
					</HStack>
				</HStack>
			</Container>
		</Div>
	);
}
