import Navbar from "@/components/Navbar/Navbar";

export default function pageLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar/>
      {children}
    </main>
  );
}