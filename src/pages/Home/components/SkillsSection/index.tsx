import { Stack } from "@mui/material";
import { observer } from "mobx-react";
import NumberedListItem from "src/components/NumberedListItem";

import styled from "@emotion/styled";
import SlideUpMotion from "src/components/SlideUpMotion";
import { StyledP } from "src/pages/Project/components";

const Title = styled.h1`
  font-size: 10rem;
  letter-spacing: -5px;
  font-weight: 500;
  line-height: 0.75;
`;

const SectionDivider = styled.div`
  height: 200px;
`;

const SideNote = styled.p`
  margin-top: 30px;
`;

const SkillsSection = () => {
  return (
    <Stack id="about">
      <SlideUpMotion>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={"space-around"}
          gap={2}
        >
          <p>{"(a bit about me)"}</p>
          <Stack maxWidth={"70ch"} alignItems={"flex-start"} gap={3}>
            <h2>Part developer, part designer, part product brain.</h2>
            <StyledP>
              I move between Figma and the frontend with ease. With my
              background in business, I care as much about product goals as I do
              about polish. After years in this work, I've learned that good UI
              takes empathy, a sharp eye, and a bit of craft.
            </StyledP>
          </Stack>
        </Stack>
      </SlideUpMotion>
      <SectionDivider />
      <Stack gap={10}>
        <Stack
          direction={{ xs: "column", md: "row-reverse" }}
          justifyContent={"space-around"}
          alignItems={{ xs: "center", md: "flex-start" }}
          gap={2}
        >
          <SideNote>{"(no actually, i love css)"}</SideNote>
          <Stack gap={3}>
            <SlideUpMotion>
              <Title>Tech.</Title>
            </SlideUpMotion>
            <Stack gap={2} marginLeft={2}>
              <SlideUpMotion>
                <NumberedListItem
                  number="01"
                  listItem="CSS Specialist (Tailwind, Emotion)"
                />
              </SlideUpMotion>
              <SlideUpMotion>
                <NumberedListItem number="02" listItem="React / React Native" />
              </SlideUpMotion>
              <SlideUpMotion>
                <NumberedListItem
                  number="03"
                  listItem="JavaScript / TypeScript"
                />
              </SlideUpMotion>
              <SlideUpMotion>
                <NumberedListItem number="04" listItem="Webflow & Wordpress" />
              </SlideUpMotion>
              <SlideUpMotion>
                <NumberedListItem number="06" listItem="Figma" />
              </SlideUpMotion>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={"space-around"}
          alignItems={{ xs: "center", md: "flex-start" }}
          gap={2}
        >
          <SideNote>{"(my brain mix)"}</SideNote>
          <Stack gap={3}>
            <SlideUpMotion>
              <Title>Skills.</Title>
            </SlideUpMotion>
            <Stack gap={2} marginLeft={2}>
              <SlideUpMotion>
                <NumberedListItem number="01" listItem="UX/UI Design" />
              </SlideUpMotion>
              <SlideUpMotion>
                <NumberedListItem number="02" listItem="Systems Thinking" />
              </SlideUpMotion>
              <SlideUpMotion>
                <NumberedListItem
                  number="03"
                  listItem="(Very) Creative Problem Solving"
                />
              </SlideUpMotion>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default observer(SkillsSection);
