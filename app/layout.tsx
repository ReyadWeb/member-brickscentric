export const metadata = {
  title: "Bricks Centric — Members Portal",
  description: "View licenses and downloads for Bricks Centric.",
};
import "./../styles/globals.css";
import Link from "next/link";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"><body><div className="container">
      <header className="header">
        <div className="brand">🧱 Bricks Centric — Members</div>
        <nav className="nav">
          <Link href="/">Dashboard</Link>
          <Link href="/licenses">Licenses</Link>
          <Link href="/downloads">Downloads</Link>
          <Link href="/login">Login</Link>
        </nav>
      </header>
      {children}
    </div></body></html>
  );
}
