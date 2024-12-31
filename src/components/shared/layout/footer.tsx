import { Container, HStack } from "@styled-system/jsx";
import { Div } from "~/components/ui/form/div";

export async function Footer() {
	return (
		<Div w="full" py="20px" textAlign="center">
			<Container>
				<HStack
					flexDirection="row"
					justifyContent={"center"}
					alignItems="center"
				>
					{/* <HStack gap="10px">The Footer. (yes, that's it)</HStack> */}
					<Div opacity={"0.1"}>© 2024 Chewawi. All rights reserved.</Div>
				</HStack>
			</Container>
		</Div>
	);
}
