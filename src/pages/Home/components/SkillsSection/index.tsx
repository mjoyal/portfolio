import { Stack } from "@mui/material";
import { observer } from "mobx-react";

import styled from "@emotion/styled";
import SlideUpMotion from "src/components/SlideUpMotion";
import { StyledP } from "src/pages/Project/components";

const SectionDivider = styled.div`
  height: 150px;
`;

const Line = styled.hr`
  border: 0;
  border-top: 1px solid rgba(245, 245, 245, 0.5);
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
          <p>{"(ABOUT)"}</p>
          <Stack maxWidth={"70ch"} alignItems={"flex-start"} gap={3}>
            <h2>
              Design-led UI engineering focused on user experience, systems, and
              detailed execution.
            </h2>
            <StyledP>
              I work across design and front-end development to build cohesive,
              scalable user interfaces. From Figma to production code, I focus
              on usability, visual consistency, and product intent—balancing
              design quality with technical constraints.
            </StyledP>
          </Stack>
        </Stack>
      </SlideUpMotion>
      <SectionDivider />
      <Line />
      <SectionDivider />

      <SlideUpMotion>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={"space-around"}
          gap={2}
        >
          <p>{"(SERVICES)"}</p>
          <Stack maxWidth={"70ch"} alignItems={"flex-start"} gap={7}>
            <h2>
              I design and build thoughtful user experiences, from builder
              websites to fully custom interfaces.
            </h2>

            <Stack
              direction={{ xs: "column", md: "row" }}
              gap={{ xs: 10, md: 20 }}
            >
              <Stack gap={0.5}>
                <h5 style={{ marginBottom: "10px" }}>Development</h5>

                <p>Front-end Engineering</p>
                <p>React Native App Development</p>
                <p>React Website Development</p>
                <p>Webflow</p>
                <p>Wordpress</p>
              </Stack>

              <Stack gap={0.5}>
                <h5 style={{ marginBottom: "10px" }}>Design</h5>

                <p>Web & App Design</p>
                <p>Design Systems</p>
                <p>UX Flows</p>
                <p>User Experience Audit</p>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </SlideUpMotion>
      <SectionDivider />
      <Line />
    </Stack>
  );
};

export default observer(SkillsSection);

/* 


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

*/
