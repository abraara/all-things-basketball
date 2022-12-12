import Image from "next/image";

function BioNavigation({ avatar, first_name, last_name }) {
    return (
        <nav className="pointer-events-auto flex items-center gap-12 mb-10">
        
          <Image
            src={avatar}
            width={96}
            height={96}
            className="w-[96px] h-[96px] rounded-full"
            alt={first_name}
            priority
          />
          <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90">
            <li className="relative block px-3 py-2 transition hover:text-teal-500">
              About
            </li>
            <li className="relative block px-3 py-2 transition hover:text-teal-500">
              Education
            </li>
            <li className="relative block px-3 py-2 transition hover:text-teal-500">
              Projects
            </li>
            <li className="relative block px-3 py-2 transition hover:text-teal-500">
              Experience
            </li>
            <li className="relative block px-3 py-2 transition hover:text-teal-500">
              Background
            </li>
          </ul>
        </nav>
      );
}
export default BioNavigation;