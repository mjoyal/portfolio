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

      <Stack flex={2}>
        <h3>
          I specialize in ux/ui, web design, & front-end development. I’m
          <EmphasisText> obsessed</EmphasisText> with clean and scalable styling
          code. Leave the codebase better than you found it
        </h3>
      </Stack>
    </Stack>
  );
};

export default BioSection;
