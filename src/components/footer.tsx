import { SiGithub, SiYoutube } from '@icons-pack/react-simple-icons';
import { Copyright, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="flex w-full shrink-0 snap-end flex-col place-items-center justify-center gap-1 bg-neutral-900 py-2 text-sm">
      <a
        href="https://github.com/ApolLO-CanSat"
        className="transition-colors hover:text-purple-300"
      >
        <SiGithub className="inline" /> @ApolLO-CanSat
      </a>

      <a
        href="https://www.youtube.com/@ApolLOCanSat-official"
        className="transition-colors hover:text-purple-300"
      >
        <SiYoutube className="inline" /> ApolLO CanSat
      </a>

      <a
        href="mailto:contact@apollocansat.space"
        className="transition-colors hover:text-purple-300"
      >
        <Mail /> contact@apollocansat.space
      </a>

      <span>
        <Copyright /> 2026 ApolLO Team
      </span>
    </footer>
  );
}
