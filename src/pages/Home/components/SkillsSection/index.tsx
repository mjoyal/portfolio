import { Slide, Stack } from "@mui/material";
import { observer } from "mobx-react";
import NumberedListItem from "src/components/NumberedListItem";
import TechnologyTitle from "src/components/Titles/TechnologyTitle";

import styled from "@emotion/styled";
import SkillsTitle from "src/components/Titles/SkillsTitle";
import LongArrow from "src/icons/LongArrow";
import Button from "src/components/Button";
import SlideUpMotion from "src/components/SlideUpMotion";

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
        <SlideUpMotion>
          <h1>
            Just like camping, I believe you should leave the codebase
            <StyledEmphasis> better than</StyledEmphasis> you found it.
          </h1>

          <Button href="/assets/mackenzie-joyal-resume-2025.pdf" isDownload>
            Download my resume
          </Button>
        </SlideUpMotion>
      </Stack>
      <SectionDivider />

      <Stack direction={{ md: "row" }} rowGap={5}>
        <StyledStack>
          <SlideUpMotion>
            <SkillsTitle />
          </SlideUpMotion>
          <Spacer />
          <ListContainer>
            <SlideUpMotion>
              <NumberedListItem number="01" listItem="Front-end Engineering" />
            </SlideUpMotion>
            <SlideUpMotion>
              <NumberedListItem number="02" listItem="UX/UI Design" />
            </SlideUpMotion>
            <SlideUpMotion>
              <NumberedListItem number="03" listItem="Business Degree" />
            </SlideUpMotion>
          </ListContainer>
        </StyledStack>

        <Spacer />
        <ParagraphContainer>
          <SlideUpMotion>
            <StyledText>
              Part developer, part designer, part product brain—I move between
              Figma and the frontend with ease. With my background in business,
              I care as much about product goals as I do about polish. After 4
              years in this work, I've learned that good UI takes empathy, a
              sharp eye, and a bit of craft.
            </StyledText>
          </SlideUpMotion>
        </ParagraphContainer>
      </Stack>

      <SectionDivider />
      <Stack direction={{ md: "row-reverse" }} columnGap={5}>
        <StyledStack>
          <Stack alignItems={{ xs: "center", md: "flex-start" }}>
            <ListContainer>
              <SlideUpMotion>
                <TechnologyTitle />
              </SlideUpMotion>
              <Spacer />

              <SlideUpMotion>
                <NumberedListItem number="01" listItem="React" />
              </SlideUpMotion>
              <SlideUpMotion>
                <NumberedListItem number="02" listItem="React Native" />
              </SlideUpMotion>
              <SlideUpMotion>
                <NumberedListItem
                  number="03"
                  listItem="JavaScript / TypeScript"
                />
              </SlideUpMotion>
              <SlideUpMotion>
                <NumberedListItem number="04" listItem="MobX / MST" />
              </SlideUpMotion>
            </ListContainer>
          </Stack>

          <Stack
            alignItems={{ xs: "center", md: "flex-end" }}
            paddingTop={{ xs: "20px", md: "40px" }}
          >
            <ListContainer>
              <SlideUpMotion>
                <NumberedListItem number="05" listItem="HTML / CSS" />
              </SlideUpMotion>
              <SlideUpMotion>
                <NumberedListItem number="06" listItem="Emotion" />
              </SlideUpMotion>
              <SlideUpMotion>
                <NumberedListItem number="07" listItem="Tailwind" />
              </SlideUpMotion>
              <SlideUpMotion>
                <NumberedListItem number="08" listItem="Figma" />
              </SlideUpMotion>
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
