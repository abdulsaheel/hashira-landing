import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="flex items-center justify-between px-2 py-4 bg-white">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image src="/images/hashira-logomark.svg" alt="Hashira" width={30} height={30} className="mr-2" />
          <Image src="/images/hashira-wordmark.svg" alt="Hashira" width={100} height={20} />
        </Link>
      </div>
      <nav className="flex items-center space-x-8">
        <Link href="#work" className="text-[24px] font-thin">
          WORK
        </Link>
        <Link href="#work" className="text-[24px] font-thin">
          ABOUT US
        </Link>
        <Link href="#careers" className="text-[24px] font-thin">
          CAREERS
        </Link>
        <Link href="#contact" className="text-[24px] font-thin">
          CONTACT
        </Link>
      </nav>
    </header>
  )
}
