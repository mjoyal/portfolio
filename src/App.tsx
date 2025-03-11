import styled from "@emotion/styled";
import CssBaseline from "@mui/material/CssBaseline";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: clamp(20px, 4vw, 48px);
  margin-right: clamp(20px, 4vw, 48px);
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Resets default browser styles */}
      <AppWrapper>
        <HeroSection />
        <ProjectSection />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
