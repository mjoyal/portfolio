import { useNavigate } from "react-router-dom";

const useNavigateAndScroll = () => {
  const navigate = useNavigate();

  return (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
};

export default useNavigateAndScroll;
