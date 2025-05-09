import { Stack } from "@mui/material";
import { observer } from "mobx-react";
import NumberedListItem from "src/components/NumberedListItem";
import TechnologyTitle from "src/components/Titles/TechnologyTitle";

import styled from "@emotion/styled";
import SkillsTitle from "src/components/Titles/SkillsTitle";
import LongArrow from "src/icons/LongArrow";
import Button from "src/components/Button";

const ParagraphContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 0;
`;

const StyledText = styled.h6`
  max-width: 35ch;
  margin-left: 20px;
  margin-right: 20px;
  // Keeps text nice and square
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const StyledStack = styled(Stack)`
  flex: 1 1 0;
`;

const Spacer = styled.div`
  height: 40px;
`;

const StyledEmphasis = styled.span`
  color: ${({ theme }) => (theme as any).palette.text.secondary};
`;

// TODO: Section Divider & Spacer Components
const SectionDivider = styled.div`
  height: 200px;
`;

const SkillsSection = () => {
  return (
    <Stack>
      <Stack
        maxWidth={"90ch"}
        marginLeft={{ sm: 3, md: 4, lg: 6 }}
        marginRight={{ sm: 3, md: 4 }}
        alignItems={"flex-start"}
        gap={6}
      >
        <h3>
          Just like camping, I believe you should leave the codebase
          <StyledEmphasis> better than</StyledEmphasis> you found it.
        </h3>

        <Button href="/assets/resume-2025.pdf" isDownload>
          Download my resume
        </Button>
      </Stack>
      <SectionDivider />

      <Stack direction={{ md: "row" }} rowGap={5}>
        <StyledStack>
          <SkillsTitle />
          <Spacer />
          <ListContainer>
            <NumberedListItem number="01" listItem="Front-end Engineering" />
            <NumberedListItem number="02" listItem="UX/UI Design" />
            <NumberedListItem number="03" listItem="Business Degree" />
          </ListContainer>
        </StyledStack>

        <Spacer />
        <ParagraphContainer>
          <StyledText>
            Part developer, part designer, part product brain—I move between
            Figma and the frontend with ease. With my background in business, I
            care as much about product goals as I do about polish. After 4 years
            in this work, one thing’s clear: good UI takes empathy, a sharp eye,
            and a bit of craft.
          </StyledText>
        </ParagraphContainer>
      </Stack>

      <SectionDivider />
      <Stack direction={{ md: "row-reverse" }} columnGap={5}>
        <StyledStack>
          <Stack alignItems={{ xs: "center", md: "flex-start" }}>
            <ListContainer>
              <TechnologyTitle />
              <Spacer />
              <NumberedListItem number="01" listItem="React" />
              <NumberedListItem number="02" listItem="React Native" />
              <NumberedListItem
                number="03"
                listItem="JavaScript / TypeScript"
              />
              <NumberedListItem number="04" listItem="MobX / MST" />
            </ListContainer>
          </Stack>

          <Stack
            alignItems={{ xs: "center", md: "flex-end" }}
            paddingTop={{ xs: "20px", md: "40px" }}
          >
            <ListContainer>
              <NumberedListItem number="05" listItem="HTML / CSS" />
              <NumberedListItem number="06" listItem="Emotion" />
              <NumberedListItem number="07" listItem="Tailwind" />
              <NumberedListItem number="08" listItem="Figma" />
            </ListContainer>
          </Stack>
        </StyledStack>

        <StyledStack
          alignItems={"center"}
          justifyContent={"center"}
          paddingTop={{ md: "200px", xs: "100px" }}
        >
          <LongArrow />
        </StyledStack>
      </Stack>
    </Stack>
  );
};

export default observer(SkillsSection);
