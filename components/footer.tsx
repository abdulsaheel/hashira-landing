import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="mb-4">
            <span className="section-number">07</span>
            <span className="section-title ml-2">FOOTER</span>
          </div>
          <nav className="flex flex-wrap gap-6">
            <Link href="#about" className="text-sm font-medium">
              ABOUT US
            </Link>
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
        </div>
        <div className="flex justify-end">
          <div className="flex items-center space-x-2">
            <Image src="/images/star.svg" alt="Star" width={24} height={24} />
            <Image src="/images/star.svg" alt="Star" width={24} height={24} />
            <Image src="/images/star.svg" alt="Star" width={24} height={24} />
          </div>
        </div>
      </div>

      <div className="mt-12 mb-8">
        <Image
          src="/images/hashira-logo-full.svg"
          alt="Hashira"
          width={700}
          height={120}
          className="w-full max-w-3xl mx-auto hashira-red"
        />
      </div>

      <div className="flex flex-wrap justify-between items-end mt-12">
        <div className="flex space-x-4">
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/instagram.svg" alt="Instagram" width={24} height={24} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <div className="w-6 h-6 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div className="text-xs text-gray-500 mt-4 md:mt-0">
          3rd Floor, Sparkle Marvel, Suite 105, Koramangla Main Road,
          <br />
          Gandhinagar, Bangalore 560002
        </div>
      </div>
    </footer>
  )
}
