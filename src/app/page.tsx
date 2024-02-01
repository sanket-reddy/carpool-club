import Navbar from "@/components/custom/navbar";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Navbar />
      <h1>Landing</h1>
    </>
  );
}
