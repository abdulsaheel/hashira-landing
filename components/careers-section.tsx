import Image from "next/image"
import Link from "next/link"
import { InteractiveEyes } from "./interactive-eyes"

export function CareersSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200">
      <div className="flex flex-col justify-between p-8 border-r border-gray-200">
        <div className="mb-4">
          <span className="section-number font-medium">05</span>
          <span className="section-title ml-2 font-medium">CAREERS</span>
        </div>
        <h2 className="text-5xl font-bold leading-tight mb-12">
          WE'RE ALLWAYS
          <br />
          ON THE LOOKOUT
          <br />
          FOR NEW TALENT.
        </h2>
        <div className="mt-8 flex justify-center">
          <InteractiveEyes />
        </div>
      </div>
      <div className="relative flex flex-col justify-between">
        <div className="absolute inset-x-0 top-0">
          <div className="mb-4">
            <span className="section-number font-medium">06</span>
            <span className="section-title ml-2 font-medium">CAREERS2</span>
          </div>
          <Image 
            src="/images/cta-section-1.png" 
            alt="City street at night" 
            layout="responsive" 
            width={500} 
            height={500} 
            className="object-contain w-full h-auto" 
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Link href="#join-us" className="bg-hashira-red text-white px-8 py-3 rounded-full font-medium text-lg">
            JOIN US
          </Link>
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-between p-12 pointer-events-none">
          <Image src="/images/star.svg" alt="Star" width={24} height={24} className="opacity-70" />
          <Image src="/images/star.svg" alt="Star" width={24} height={24} className="opacity-70" />
        </div>
        <div className="absolute bottom-12 right-12 z-20 pointer-events-none">
          <div className="flex items-center space-x-2">
            <Image src="/images/star.svg" alt="Star" width={24} height={24} className="opacity-70" />
            <Image src="/images/star.svg" alt="Star" width={24} height={24} className="opacity-70" />
            <Image src="/images/star.svg" alt="Star" width={24} height={24} className="opacity-70" />
          </div>
        </div>
      </div>
    </section>
  )
}
