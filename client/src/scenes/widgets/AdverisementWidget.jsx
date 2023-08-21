import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdverisementWidget = () => {

	const { palette } = useTheme();
	const dark = palette.neutral.dark;
	const main = palette.neutral.main;
	const medium = palette.neutral.medium;

	return (
		<WidgetWrapper>
			<FlexBetween>
				<Typography color={dark} variant="h5" fontWeight="500">
					Sponsored
				</Typography>

				<Typography color={medium}>
					Create Ad
				</Typography>
			</FlexBetween>

			<img
				width="100%"
				height="auto"
				alt="advertisement"
				src="http://localhost:3001/assets/info4.jpeg"
				style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
			/>

			<FlexBetween>
				<Typography color={main}>
					SomeCosmetics
				</Typography>
				<Typography color={medium}>
					somecosmetics.com
				</Typography>
			</FlexBetween>

			<Typography color={medium} margin="0.5rem 0">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur magnam neque dicta laborum excepturi minus!
			</Typography>
		</WidgetWrapper>
	)
}

export default AdverisementWidget
