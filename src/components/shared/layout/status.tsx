import { HStack, VStack } from "@styled-system/jsx";
import Image from "next/image";
import type { LanyardResponse } from "~/lib/lanyard/lanyard";
import { Span } from "../../ui/text/span";
import { Text } from "../../ui/text/text";

export function Status({
	spotify,
	code,
}: {
	spotify: LanyardResponse["data"]["spotify"];
	code: LanyardResponse["data"]["activities"][0] | undefined;
}) {
	return (
		<VStack alignItems={"start"}>
			<HStack>
				<Image
					draggable={false}
					src="/icons/spotify.png"
					alt="Spotify"
					width={30}
					height={30}
				/>
				{spotify ? (
					<Text size="md">
						Listening to{" "}
						<Span fontWeight={"bold"} color="white">
							{spotify.song} · {spotify.artist}
						</Span>
					</Text>
				) : (
					"Not listening to anything"
				)}
			</HStack>
			<HStack>
				<Image
					draggable={false}
					src="/icons/vscode.png"
					alt="Vscode"
					width={30}
					height={30}
				/>
				{code ? (
					<Text size="md">
						Working on{" "}
						<Span fontWeight={"bold"} color="white">
							{code.state ?? "some project"}
						</Span>
					</Text>
				) : (
					"Not working"
				)}
			</HStack>
		</VStack>
	);
}
