import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image src="/images/hashira-logomark.svg" alt="Hashira" width={30} height={30} className="mr-2" />
          <Image src="/images/hashira-wordmark.svg" alt="Hashira" width={100} height={20} />
        </Link>
      </div>
      <nav className="flex items-center space-x-8">
        <Link href="#work" className="text-sm font-medium">
          WORK
        </Link>
        <Link href="#careers" className="text-sm font-medium">
          CAREERS
        </Link>
        <Link href="#contact" className="text-sm font-medium">
          CONTACT
        </Link>
      </nav>
    </header>
  )
}
