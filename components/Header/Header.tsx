import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/notes/filter/all">Notes</Link>
      </nav>
    </header>
  );
}