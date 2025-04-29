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

const StyledText = styled.p`
  width: 35ch;
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

const StyledEmphasis = styled.em`
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
        gap={3}
        // bgcolor="blue"
      >
        <h3>
          Just like camping, I believe you should leave the codebase
          <StyledEmphasis> better than</StyledEmphasis> you found it.
        </h3>
        <h6>
          Maybe I could have a little bit of text here to fill out the space.
          Could be a nice little morsel of text about me. Little quirky facts.
          Fun facts. But also serious facts. Very professional serious facts.
        </h6>

        <Button onClick={() => alert("not implemented")}>
          Download my resume
        </Button>
      </Stack>
      <SectionDivider />

      <Stack direction={{ md: "row" }} rowGap={5}>
        <StyledStack>
          <SkillsTitle />
          <Spacer />
          <ListContainer>
            <NumberedListItem number="01" listItem="front-end engineering" />
            <NumberedListItem number="02" listItem="ux/ ui design" />
            <NumberedListItem number="03" listItem="business degree" />
          </ListContainer>
        </StyledStack>

        <Spacer />
        <ParagraphContainer>
          <StyledText>
            maybe i could have a little bit of text here to fill out the space.
            could be a nice little morsel of text about me. little quirky facts.
            fun facts. but also serious facts. very professional serious facts.
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
              <NumberedListItem number="01" listItem="react & react native" />
              <NumberedListItem
                number="02"
                listItem="javascript & typescript"
              />
            </ListContainer>
          </Stack>

          <Stack
            alignItems={{ xs: "center", md: "flex-end" }}
            paddingTop={{ xs: "20px", md: "40px" }}
          >
            <ListContainer>
              <NumberedListItem number="03" listItem="html, css" />
              <NumberedListItem number="04" listItem="css libraries" />
              <NumberedListItem number="05" listItem="figma" />
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
