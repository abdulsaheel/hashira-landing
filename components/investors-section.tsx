import Image from "next/image"
import { InvestorsCarousel } from "./investors-carousel"

export function InvestorsSection() {
  return (
    <section className="p-8 border-b border-gray-200">
      <div className="mb-4">
        <span className="section-number">04</span>
        <span className="section-title ml-2">INVESTORS</span>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <Image src="/images/star.svg" alt="Star" width={24} height={24} />
          <Image src="https://garden.imgix.net/hashira/curvy-circle.svg" alt="Star" width={40} height={40} />
          <Image src="/images/emoji-angry.svg" alt="Emoji" width={40} height={40} />
          <Image src="/images/star.svg" alt="Star" width={24} height={24} />
        </div>
        <InvestorsCarousel />
      </div>
    </section>
  )
}
