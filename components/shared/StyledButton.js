export default function StyledButton({ children, ...props }) {
  return (
    <button
      {...props}
      className={`bg-primary_50 text-black 
        hover:bg-primary_65 hover:shadow-[2px_2px_0px_0px_#BD9400]
        active:shadow-[-2px_-2px_0px_0px_#BD9400]
        text-center text-sm font-semibold
        w-16 h-8 md:w-[88px] md:h-9
        ${props.className}`}
    >
      {children}
    </button>
  );
}
