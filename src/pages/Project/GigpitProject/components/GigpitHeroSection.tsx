import { Stack } from "@mui/material";
import GigpitLogo from "src/icons/GigpitLogo";
import styled from "@emotion/styled";

const HeroImage = styled.img`
  height: auto;
  width: 600px;
  border-radius: 5px;
`;

const GigpitHeroSection = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row-reverse" }}
      alignItems={"flex-end"}
    >
      <Stack gap={5}>
        <GigpitLogo />
        <HeroImage src={"/images/project-square.png"} />
      </Stack>
      <Stack flex={1}>
        <h5>Role</h5>
        <p>UX/UI & Front-end Engineering</p>
        <h5>Year</h5>
        <p>2024 - Current</p>
        <h5>Design Collaborator</h5>
        <p>Lizzie, Lead Design</p>
      </Stack>
    </Stack>
  );
};

export default GigpitHeroSection;
