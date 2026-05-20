import logo from "../../../public/logo.png";

export function LogoMark({ className = "w-28 h-16" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="Interior Solution Logo"
      className={className}
    />
  );
}