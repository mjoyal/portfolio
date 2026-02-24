import { Stack } from "@mui/material";
import { observer } from "mobx-react";

import styled from "@emotion/styled";
import SlideUpMotion from "src/components/SlideUpMotion";
import { StyledP } from "src/pages/Project/components";

const SectionDivider = styled.div`
  height: 100px;

  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    height: 150px;
  }
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
          <h6>{"(ABOUT)"}</h6>
          <Stack maxWidth={"80ch"} alignItems={"flex-start"} gap={3}>
            <h2>
              I believe interfaces should be both delightful to use and durable
              in practice.
            </h2>
            <StyledP>
              Design means little if it can’t survive real context, client
              edits, and ongoing change. By bridging design and front-end
              development, I build maintainable systems that balance user needs,
              business goals, and long-term product sustainability.
            </StyledP>
          </Stack>
        </Stack>
      </SlideUpMotion>
      <SectionDivider />
      <Line id="services" />
      <SectionDivider />

      <SlideUpMotion>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={"space-around"}
          gap={2}
        >
          <h6>{"(SERVICES)"}</h6>
          <Stack maxWidth={"80ch"} alignItems={"flex-start"} gap={7}>
            <h2>
              Building thoughtful user experiences, from site builders to fully
              custom interfaces.
            </h2>

            <Stack
              direction={{ xs: "column", md: "row" }}
              gap={{ xs: 5, md: 20 }}
            >
              <SlideUpMotion>
                <Stack gap={0.5}>
                  <h5 style={{ marginBottom: "10px" }}>Development</h5>
                  <p>Front-end Engineering</p>
                  <p>App & Website Development</p>
                  <p>Webflow</p>
                  <p>Wordpress</p>
                </Stack>
              </SlideUpMotion>
              <SlideUpMotion delay={0.25}>
                <Stack gap={0.5}>
                  <h5 style={{ marginBottom: "10px" }}>Design</h5>

                  <p>Web & App Design</p>
                  <p>User Experience Strategy</p>
                  <p>Design Systems</p>
                  <p>UX Flows</p>
                </Stack>
              </SlideUpMotion>
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
