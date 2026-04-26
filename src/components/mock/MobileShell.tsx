export default function MobileShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-neutral-100 flex justify-center">
      <div className="w-full bg-white min-h-dvh flex flex-col lg:flex-row relative lg:max-w-[1200px] lg:shadow-xl">
        {children}
      </div>
    </div>
  );
}
