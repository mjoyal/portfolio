import styled from "@emotion/styled";
import { Stack, useMediaQuery, useTheme } from "@mui/material";

const EmphasisText = styled.em`
  color: ${({ theme }) => (theme as any).palette.primary.main};
`;

const BioSection = () => {
  const theme = useTheme();

  const isMedium = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Stack direction={"row"}>
      {isMedium && (
        <Stack flex={1} alignItems={"center"} paddingTop={2}>
          <h4>✻</h4>
        </Stack>
      )}

      <Stack flex={3}>
        <h3>
          Hi, I'm Mackenzie. I specialize in front-end development and UX/UI
          design — and I'm <EmphasisText> obsessed </EmphasisText> with building
          interfaces that feel good, spark excitement, and scale beautifully.
        </h3>
      </Stack>
    </Stack>
  );
};

export default BioSection;
