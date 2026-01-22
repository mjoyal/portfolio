import styled from "@emotion/styled";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import Spacer from "src/components/Spacer";

export const StyledP = styled.p<{ isHidden?: boolean }>`
  font-size: 1.25rem;
  max-width: 600px;
  display: ${({ isHidden = false }) => (isHidden ? "none" : "block")};
  margin-bottom: 10px;
  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    margin-bottom: 0px;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 10px;

  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    width: 100%;
    aspect-ratio: 2 / 1;
  }
`;

export const SecondaryImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;

  ${({ theme }) => (theme as any).breakpoints.up("md")} {
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

export const SectionTitle = styled.h4`
  max-width: 700px;
  margin-bottom: 10px;

  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    margin-bottom: 30px;
  }
`;

export const SectionDivider = () => {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return isSmallScreen ? <Spacer level={20} /> : <Spacer level={50} />;
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
  const { children, restProps } = props;
  return (
    <StyledHeroSectionWrapper gap={2} alignItems={"flex-start"} {...restProps}>
      {children}
    </StyledHeroSectionWrapper>
  );
};

export const MockImage = styled.img`
  aspect-ratio: 1;
  width: 100%;
  border-radius: 12px;
`;

export const MockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 1rem;
  }
`;

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
