export default function Avatar({
  src,
  size = 40,
  className = "",
}: {
  src: string;
  size?: number;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      className={`rounded-full object-cover shrink-0 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
