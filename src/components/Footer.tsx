import { profile } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <FadeIn y={12} className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-muted sm:flex-row sm:px-10">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js.</p>
        <p className="font-mono">{profile.location}</p>
      </FadeIn>
    </footer>
  );
}
