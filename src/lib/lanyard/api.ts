import { type LanyardResponse, lanyard } from "./lanyard";

export async function getDiscordUser(): Promise<
	LanyardResponse["data"]["discord_user"]
> {
	const { data } = await lanyard<LanyardResponse>(
		`/users/${import.meta.env.DISCORD_USER_ID}`,
	);

	return data.discord_user;
}

export async function getDiscordStatus(): Promise<LanyardResponse> {
	return lanyard<LanyardResponse>(`/users/${import.meta.env.DISCORD_USER_ID}`);
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

export async function getAvatar(): Promise<string> {
	const { avatar_decoration_data: avatar } = await getDiscordUser();

	return `https://cdn.discordapp.com/avatars/${import.meta.env.DISCORD_USER_ID}/${avatar.asset}.png`;
}
