const LittleArrow = (props: any) => {
  const { rotate } = props;
  return (
    <svg
      width="12"
      height="48"
      viewBox="0 0 12 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: rotate }}
    >
      <path
        d="M5.46967 56.5303C5.76256 56.8232 6.23744 56.8232 6.53033 56.5303L11.3033 51.7574C11.5962 51.4645 11.5962 50.9896 11.3033 50.6967C11.0104 50.4038 10.5355 50.4038 10.2426 50.6967L6 54.9393L1.75736 50.6967C1.46447 50.4038 0.989592 50.4038 0.696699 50.6967C0.403806 50.9896 0.403806 51.4645 0.696699 51.7574L5.46967 56.5303ZM5.25 0L5.25 56H6.75L6.75 0L5.25 0Z"
        fill="#F5F5F5"
      />
    </svg>
  );
};

export default LittleArrow;
