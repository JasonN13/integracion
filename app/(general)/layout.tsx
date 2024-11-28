
export default function pageLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main>
      {children}
    </main>
  );
}