import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const growCircle = keyframes`
  from { transform: scale(0); }
  to   { transform: scale(50); }
`;

const shrinkCircle = keyframes`
  from { transform: scale(50); opacity: 1; }
  to   { transform: scale(50); opacity: 0; }
`;

const CircleOverlay = styled.div<{ animateOut?: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  background: #0a0a0c;
  border-radius: 50%;
  transform-origin: center;
  animation: ${growCircle} 0.6s ease forwards;
  z-index: 9999;
  pointer-events: none;
  animation: ${({ animateOut }) => (animateOut ? shrinkCircle : growCircle)}
    0.6s ease forwards;
`;

const PageTransition = () => {
  const { pathname } = useLocation();
  const [phase, setPhase] = useState<"idle" | "entering" | "exiting">("idle");
  const [key, setKey] = useState(0);

  useEffect(() => {
    setPhase("entering");
    setKey((prev) => prev + 1);

    const mid = setTimeout(() => {
      setPhase("exiting");
    }, 600); // after grow finishes

    const done = setTimeout(() => {
      setPhase("idle");
    }, 1200); // after shrink finishes

    return () => {
      clearTimeout(mid);
      clearTimeout(done);
    };
  }, [pathname]);

  if (phase === "idle") return null;

  return <CircleOverlay key={key} animateOut={phase === "exiting"} />;
};

export default PageTransition;
