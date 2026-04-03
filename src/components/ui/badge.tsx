export default function Badge({
  title,
  color,
}: {
  title: string;
  color: "red" | "blue" | "green" | "blueLight";
}) {
  const colors = {
    red: "border-red-600 text-red-600 bg-white/90",
    blue: "border-secondary text-secondary bg-white/90",
    green: "border-accent text-accent bg-white/90",
    white: "border-white text-secondary bg-white/90",
    blueLight: "border-primary text-primary bg-primary/10",
  };

  return (
    <p
      className={`w-55 mb-6 text-sm font-bold inline-flex items-center justify-center border rounded-lg py-0.5 ${colors[color]}`}
    >
      {title}
    </p>
  );
}
