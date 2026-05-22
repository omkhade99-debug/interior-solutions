export function LogoMark({
  className = "w-28 h-16",
}: {
  className?: string;
}) {
  return (
    <img
      src="/logo.png"
      alt="Interior Solution Logo"
      className={className}
    />
  );
}