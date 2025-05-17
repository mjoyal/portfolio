import styled from "@emotion/styled";
import { Stack, useMediaQuery, useTheme } from "@mui/material";

const EmphasisText = styled.span`
  color: ${({ theme }) => (theme as any).palette.primary.main};
`;

const StyledHeader = styled.h2``;

const BioSection = () => {
  const theme = useTheme();

  const isMedium = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Stack direction={"row"} id="bio" gap={20}>
      {isMedium && (
        <Stack flex={1} alignItems={"center"} paddingTop={2}>
          <h1>✻</h1>
        </Stack>
      )}

      <StyledHeader>
        Hi, I'm Mackenzie! From code architecture to the perfect color
        palette—I'm <EmphasisText>lowkey obsessed</EmphasisText> with thoughtful
        design. I'm all about building interfaces that feel good, spark
        excitement, and scale effortlessly.
        {/* Hi, I'm Mackenzie. I specialize in front-end development and UX/UI
          design — and I'm <EmphasisText>lowkey obsessed </EmphasisText> with
          building interfaces that feel good, spark excitement, and scale
          effortlessly. */}
      </StyledHeader>
    </Stack>
  );
};

export default BioSection;
