import Image from "next/image"
import { InteractiveEyes } from "./interactive-eyes"
import Link from "next/link"

export function CareerSection() {
  return (
    <section className="relative border-t-2 border-[#151515] mx-2">

      <div className="grid grid-cols-1 md:grid-cols-2 items-start">
        <div className="p-8 h-full">
          <div className="mb-2">
            <span className="section-number font-medium">05</span>
            <span className="section-title ml-2 font-medium">CAREER</span>
          </div>
          <h2 className="text-5xl font-light leading-tight mb-12">
            WE'RE ALLWAYS
            <br />
            ON THE LOOKOUT
            <br />
            FOR NEW TALENT.
          </h2>
<InteractiveEyes/>
        </div>
        <div className="relative p-4 w-full border-l border-[#151515] pl-2">
          <div className="mb-2 px-4">
            <span className="section-number font-medium">06</span>
            <span className="section-title ml-2 font-medium">CAREERS2</span>
          </div>
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <Link href="#join-us" className="bg-hashira-red text-white px-8 py-3 rounded-full font-medium text-lg">
                JOIN US
              </Link>
            </div>
            <Image
              src="/images/cta-section-1.png"
              alt="Sunset view of Japanese houses"
              width={800}
              height={857}
              className="h-auto w-full"
            />
            <div className="absolute bottom-8 right-8">
              <Image
                src="/images/hashira-logomark.svg"
                alt="Hashira logo"
                width={60}
                height={60}
                className="hashira-red"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-[#151515] mx-2"></div>
    </section>
  )
}
