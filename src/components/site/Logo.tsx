import logo from "@/assets/Logo.png";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="Buzmark Agency"
      className={className}
    />
  );
}