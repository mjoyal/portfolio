import styled from "@emotion/styled";
import { Stack, useMediaQuery, useTheme } from "@mui/material";

const EmphasisText = styled.span`
  color: ${({ theme }) => (theme as any).palette.primary.main};
`;

const BioSection = () => {
  const theme = useTheme();

  const isMedium = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Stack direction={"row"} id="bio">
      {isMedium && (
        <Stack flex={1} alignItems={"center"} paddingTop={2}>
          <h1>✻</h1>
        </Stack>
      )}

      <Stack flex={3}>
        <h1>
          Hi, I'm Mackenzie! I specialize in front-end development and UX/UI
          design. Whether it's user experience, code architecture or the perfect
          color palette—I'm <EmphasisText>lowkey obsessed</EmphasisText> with
          thoughtful design. I'm all about building interfaces that feel good,
          spark excitement, and scale effortlessly.
          {/* Hi, I'm Mackenzie. I specialize in front-end development and UX/UI
          design — and I'm <EmphasisText>lowkey obsessed </EmphasisText> with
          building interfaces that feel good, spark excitement, and scale
          effortlessly. */}
        </h1>
      </Stack>
    </Stack>
  );
};

export default BioSection;
