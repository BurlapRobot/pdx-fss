import Link from "next/link";

export default function StyledLink({ children, size, ...props }) {
  return (
    <Link
      {...props}
      className={`bg-primary_50  
        hover:bg-primary_65 hover:shadow-[2px_2px_0px_0px_#BD9400]
        active:shadow-[-2px_-2px_0px_0px_#BD9400]
        text-center !font-semibold !text-black !no-underline
        ${size === "small" ? "text-base" : "text-lg"}
        py-2 px-4
        ${props.className ?? ""}`}
    >
      {children}
    </Link>
  );
}
