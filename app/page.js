import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <div className="flex flex-row justify-center mt-10 text-white">
        <Link href='/about' className="text-5xl bg-blue-400 w-1/2 flex justify-center rounded-lg">About</Link>
      </div>
    </main>
  );
}
