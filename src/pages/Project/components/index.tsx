import styled from "@emotion/styled";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import Spacer from "src/components/Spacer";

export const StyledP = styled.p<{ isHidden?: boolean }>`
  max-width: 400px;
  display: ${({ isHidden = false }) => (isHidden ? "none" : "block")};
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;

  @media (min-width: 900px) {
    height: 525px;
    width: auto;
  }
`;

export const SecondaryImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;

  @media (min-width: 900px) {
    height: 650px;
    width: auto;
  }
`;

export const ProjectPageContainer = styled(Box)`
  /* These 100% widths are important to keep the overall margin of the site */
  width: 100%;
  min-height: 100vh;
  margin-top: 20px;
  margin-bottom: 200px;
`;

export const PhoneMockImage = styled.img`
  width: 300px;
  height: 100%;
`;

export const SectionTitle = styled.h3`
  max-width: 700px;
  margin-bottom: 40px;
`;

export const SectionDivider = () => {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return isSmallScreen ? <Spacer level={30} /> : <Spacer level={50} />;
};

export const MockWrapper = (props: any) => {
  const {
    children,
    justifyContent,
    gap = { xs: 6, md: 8 },
    alignItems = { xs: "center", md: "flex-start" },
  } = props;

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      gap={gap}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {children}
    </Stack>
  );
};

export const BodyTextWrapper = (props: any) => {
  const { children } = props;

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      gap={{ xs: 3, md: 10, lg: 12 }}
    >
      {children}
    </Stack>
  );
};

const StyledHeroSectionWrapper = styled(Stack)`
  margin-bottom: 20px;
  @media (min-width: 900px) {
    min-height: 90vh;
  }
`;

export const HeroSectionWrapper = (props: any) => {
  const { children } = props;
  return (
    <StyledHeroSectionWrapper gap={3} alignItems={"flex-start"}>
      {children}
    </StyledHeroSectionWrapper>
  );
};

const MockLabel = styled.p`
  font-size: 1rem;
  max-width: 250px;
  text-align: left;
`;

interface IPhoneMockProps {
  src: string;
  label?: string;
  title?: string;
}

export const PhoneMock = (props: IPhoneMockProps) => {
  const { src, label, title } = props;

  return (
    <Stack alignItems={"center"} gap={2.5}>
      {!!title && <h5>{title}</h5>}
      <PhoneMockImage src={src} alt={label} />
      {!!label && <MockLabel>{label}</MockLabel>}
    </Stack>
  );
};
