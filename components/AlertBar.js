const AlertBar = ({
  hidden,
  alertText,
  linkText,
  linkUrl,
  buttonText,
  buttonUrl,
}) => {
  if (hidden) {
    return <div className="hidden"></div>;
  }

  return (
    <div className="bg-primary_50 text-xs text-black px-4 py-2 flex justify-between items-center w-full">
      <span>
        {alertText}{" "}
        <a
          href={linkUrl}
          className={`underline ${linkText?.trim() === "" ? "hidden" : ""}`}
        >
          {linkText}
        </a>
      </span>
      <a
        href={buttonUrl}
        className={`ml-4 bg-black text-primary_50 px-2 py-1 
          rounded text-xs hover:bg-gray-800 transition-colors
          ${buttonText?.trim() === "" ? "hidden" : ""}`}
      >
        {buttonText}
      </a>
    </div>
  );
};

export default AlertBar;
