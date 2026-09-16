import type { Metadata } from "next";
import GuestList from "@/components/GuestList";

export const metadata: Metadata = {
  title: "Guest list",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <GuestList />;
}
