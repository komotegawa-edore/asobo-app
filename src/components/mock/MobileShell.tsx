export default function MobileShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-white">
      <div className="w-full bg-white min-h-dvh flex flex-col lg:flex-row relative">
        {children}
      </div>
    </div>
  );
}
