import { Div } from "~/components/ui/form/div";

import { Status } from "~/components/shared/layout/status";
import { Heading } from "~/components/ui/text/heading";
import { getCodeStatus, getSpotifyStatus } from "~/lib/lanyard/api";

export default async function Page() {
	const codeStatus = await getCodeStatus();
	const spotifyStatus = await getSpotifyStatus();

	return (
		<Div m={"100"}>
			<Div
				my={"150"}
				display={"flex"}
				flexDirection={"row"}
				justifyContent={"space-between"}
			>
				<Div>
					<Heading
						size={"3xl"}
						ml={"-25"}
						rotate={"-20deg"}
						width={"40%"}
						animationIterationCount={"infinite"}
						animationDirection={"alternate"}
						animation={"bounce .25s"}
					>
						It's
					</Heading>
					<Heading fontSize={"85px"} fontWeight={"800"}>
						Chewawi
					</Heading>
				</Div>

				<Div justifyContent={"end"} mt={"59.9"}>
					<Status code={codeStatus} spotify={spotifyStatus} />
				</Div>
			</Div>

			{/* <Text>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae,
				molestiae nulla? Accusantium exercitationem pariatur iusto reiciendis
				sint laudantium quae, facere accusamus facilis maiores dicta
				consequuntur, recusandae numquam. Deserunt, veritatis sit.
			</Text> */}
		</Div>
	);
}
