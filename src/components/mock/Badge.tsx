export default function Badge({
  label,
  variant = "default",
}: {
  label: string;
  variant?: "default" | "coral" | "teal" | "yellow";
}) {
  const colors = {
    default: "bg-cream text-ink-soft",
    coral: "bg-coral/10 text-coral-deep",
    teal: "bg-teal/10 text-teal",
    yellow: "bg-yellow/10 text-ink-soft",
  };

  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[variant]}`}
    >
      {label}
    </span>
  );
}
