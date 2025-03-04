import "./App.css";
import styled from "@emotion/styled";
import HeroSection from "./components/HeroSection";

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #f5f5f5;
`;

const Title = styled.h2`
  font-size: 14vw;
  letter-spacing: -0.05em;
`;

function App() {
  return (
    <AppWrapper>
      <HeroSection />
      <Title>projects</Title>
    </AppWrapper>
  );
}

export default App;
