import Image from "next/image";

function BioNavigation({ avatar, first_name, last_name }) {
    return (
        <nav className="pointer-events-auto flex items-center gap-12 mb-10">
        
          <Image
            src={avatar}
            width={128}
            height={128}
            className="rounded-full border-2 border-grey"
            alt={first_name}
            priority
          />
          <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90">
            <li className="relative block px-3 py-2 transition hover:text-orange-500">
              Profile
            </li>
            <li className="relative block px-3 py-2 transition hover:text-orange-500">
              Stats
            </li>
            <li className="relative block px-3 py-2 transition hover:text-orange-500">
              Shooting Charts
            </li>
            <li className="relative block px-3 py-2 transition hover:text-orange-500">
              Compare
            </li>
            <li className="relative block px-3 py-2 transition hover:text-orange-500">
              Background
            </li>
          </ul>
        </nav>
      );
}
export default BioNavigation;