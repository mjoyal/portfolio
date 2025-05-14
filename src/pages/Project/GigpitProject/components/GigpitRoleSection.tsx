import { Box, Stack } from "@mui/material";
import Spacer from "src/components/Spacer";

import styled from "@emotion/styled";
import { StyledP } from "../../components";

const ReadMoreButton = styled.button<{ isHidden?: boolean }>`
  border-bottom: 1px solid white;
  display: ${({ isHidden = false }) => (isHidden ? "none" : "block")};
`;

// TODO: Types
const MyRole = (props: any) => {
  const { isRoleTextHidden, setIsRoleTextHidden } = props;
  return (
    <Box>
      <h4>My role</h4>
      <Spacer level={6} />
      <Stack direction={{ sm: "column", lg: "row" }} gap={{ sm: 5, md: 10 }}>
        <Stack direction={"column"} gap={{ sm: 3, md: 6 }}>
          <Stack alignItems={"flex-start"}>
            <StyledP>
              I joined Gigpit to help evolve the early design work—already
              visually strong—into a mobile-first web application with clearer
              UX flows. My focus was on strengthening the user journey and
              introducing a more product-driven approach to support the
              platform’s growth.
            </StyledP>
            <Spacer level={2} />
            <ReadMoreButton
              isHidden={!isRoleTextHidden}
              onClick={() => setIsRoleTextHidden(false)}
            >
              Read more
            </ReadMoreButton>
          </Stack>

          <StyledP isHidden={isRoleTextHidden}>
            I brought a product-focused mindset, thinking not just about how the
            interface looked but how it would be used, built, and scaled. I led
            mobile design, created high-fidelity mockups in Figma, and refined
            key user flows to build on a strong visual foundation and deliver a
            more functional, intuitive experience.
          </StyledP>
        </Stack>
        <Stack
          direction={"column"}
          alignItems={"flex-start"}
          gap={{ sm: 3, md: 6 }}
        >
          <StyledP isHidden={isRoleTextHidden}>
            Midway through, I stepped in on the engineering side to polish
            high-impact areas like navigation, CTA buttons, the homepage, and
            the “Post a Show” flow, spaces that defined first impressions and
            core actions.
          </StyledP>
          <StyledP isHidden={isRoleTextHidden}>
            To address styling inconsistencies, I introduced more reusable
            Svelte components, reduced redundant Tailwind usage, and implemented
            a basic Tailwind config to lay the foundation for a more scalable
            styling system.
          </StyledP>
          <ReadMoreButton
            isHidden={isRoleTextHidden}
            onClick={() => setIsRoleTextHidden(true)}
          >
            Read less
          </ReadMoreButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default MyRole;
