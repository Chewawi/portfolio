import { ofetch } from "ofetch";

export const lanyard = ofetch.create({
	baseURL: "https://api.lanyard.rest/v1",
	responseType: "json",
});

export interface LanyardResponse {
	data: {
		spotify?: {
			track_id: string;
			timestamps: {
				start: number;
				end: number;
			};
			album: string;
			album_art_url: string;
			artist: string;
			song: string;
		};
		discord_user: {
			id: string;
			username: string;
			avatar: string;
			discriminator: string;
			bot: boolean;
			// clan: any
			avatar_decoration_data: {
				sku_id: string;
				asset: string;
				expires_at: number;
			};
			global_name: string;
			display_name: string;
			public_flags: number;
		};
		activities: Array<{
			id: string;
			name: string;
			type: number;
			state: string;
			emoji?: {
				id: string;
				name: string;
				animated: boolean;
			};
			created_at: number;
			flags?: number;
			session_id?: string;
			details?: string;
			timestamps?: {
				start: number;
				end?: number;
			};
			application_id?: string;
			assets?: {
				large_image: string;
				large_text: string;
				small_image?: string;
				small_text?: string;
			};
			sync_id?: string;
			party?: {
				id: string;
			};
		}>;
		discord_status: string;
		active_on_discord_web: boolean;
		active_on_discord_desktop: boolean;
		active_on_discord_mobile: boolean;
		listening_to_spotify: boolean;
	};
	success: boolean;
}
