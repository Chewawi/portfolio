import { type LanyardResponse, lanyard } from "./lanyard";

export async function getDiscordUser(): Promise<
	LanyardResponse["data"]["discord_user"]
> {
	const { data } = await lanyard<LanyardResponse>(
		`/users/${process.env.NEXT_PUBLIC_USER_ID}`,
	);

	return data.discord_user;
}

export async function getDiscordStatus(): Promise<LanyardResponse> {
	return lanyard<LanyardResponse>(`/users/${process.env.NEXT_PUBLIC_USER_ID}`);
}

export async function getCodeStatus(): Promise<
	LanyardResponse["data"]["activities"][number] | undefined
> {
	const { data } = await getDiscordStatus();

	return data.activities.find((a) => a.name === "Code") ?? undefined;
}

export async function getSpotifyStatus(): Promise<
	LanyardResponse["data"]["spotify"]
> {
	const { data } = await getDiscordStatus();

	return data.spotify ?? undefined;
}

export async function getAvatarDecoration(): Promise<{
	active: string;
	inactive: string;
}> {
	const { avatar_decoration_data: avatar } = await getDiscordUser();

	const url = `https://cdn.discordapp.com/avatar-decoration-presets/${avatar.asset}.png?size=128`;
	return {
		active: `${url}&passthrough=true`,
		inactive: `${url}&passthrough=false`,
	};
}
