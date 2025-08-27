import styled from "@emotion/styled";
import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import { Routes, Route, HashRouter as Router } from "react-router-dom";
import HomePage from "./pages/Home";
import ProjectPage from "./pages/Project";
import StoreProvider from "./store";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
// import PageTransition from "./components/PageTransition";

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: clamp(20px, 4vw, 120px);
  padding-right: clamp(20px, 4vw, 120px);
  padding-top: 40px;
  @media (min-width: 900px) {
    padding-left: clamp(20px, 2vw, 120px);
    padding-right: clamp(20px, 2vw, 120px);
  }
`;

function App() {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Resets default browser styles */}
        <Router>
          <ScrollToTop />
          {/* <PageTransition /> */}
          <NavBar />
          <AppWrapper>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/project/:slug" element={<ProjectPage />} />
            </Routes>
          </AppWrapper>
          <Footer />
        </Router>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
