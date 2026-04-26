export default function MobileShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-neutral-100 flex justify-center">
      <div className="w-full max-w-[430px] bg-white min-h-dvh flex flex-col relative shadow-xl">
        {children}
      </div>
    </div>
  );
}
