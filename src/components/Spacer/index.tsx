import styled from "@emotion/styled";
import { useMediaQuery, useTheme } from "@mui/material";

const StyledSpacer = styled.div<{
  direction?: "vertical" | "horizontal";
  level: number;
}>`
  ${({ direction, level }) =>
    direction === "vertical"
      ? `height: ${4 * level}px;`
      : `width: ${4 * level}px;`}
`;

interface ISpacerProps {
  direction?: "vertical" | "horizontal";
  level?:
    | number
    | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
}

const Spacer = (props: ISpacerProps) => {
  const { direction = "vertical", level = 3 } = props;

  const theme = useTheme();

  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("xl"));

  const getLevel = () => {
    if (typeof level === "number") {
      return level;
    }

    const getValue = (key: keyof typeof level) => level[key] ?? 3;

    if (isExtraSmallScreen) {
      return getValue("xs");
    }

    if (isSmallScreen) {
      return getValue("sm");
    }

    if (isMediumScreen) {
      return getValue("md");
    }
    if (isLargeScreen) {
      return getValue("lg");
    }

    return getValue("xl");
  };

  return <StyledSpacer level={getLevel()} direction={direction} />;
};

export default Spacer;
