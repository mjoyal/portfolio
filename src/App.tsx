import styled from "@emotion/styled";
import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import ProjectPage from "./pages/Project";
import StoreProvider from "./store";

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
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Resets default browser styles */}
        <BrowserRouter>
          <AppWrapper>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/:slug" element={<ProjectPage />} />
            </Routes>
          </AppWrapper>
        </BrowserRouter>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
