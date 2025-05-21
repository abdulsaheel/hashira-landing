import Image from "next/image"

export function HeroSection() {
  return (
    
    <section className="relative" style={{ borderTop: '2px solid #151515' , margin: '0 10px' }}>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start">
        <div className="p-8 h-full">
          <div className="mb-2">
            <span className="section-number font-medium">01</span>
            <span className="section-title ml-2 font-medium">TITLE</span>
          </div>
          <h1 className="text-6xl font-light leading-tight mb-6">
            WE CREATE
            <br />
            PRODUCTS &<br />
            EXPERIENCES.
          </h1>
          <div className="flex items-center space-x-2">
            <Image src="/images/curve-star.svg" alt="Star" width={40} height={40} />
            <Image src="/images/emoji-pout.svg" alt="Emoji" width={60} height={60} />
            <Image src="/images/curve-star.svg" alt="Star" width={40} height={40} />
            <Image src="/images/emoji-angry.svg" alt="Emoji" width={60} height={60} />
            <Image src="/images/curve-star.svg" alt="Star" width={40} height={40} />
          </div>
        </div>
        <div className="relative p-4 pt-8 w-full" style={{ borderLeft: '2px solid #151515', paddingLeft: '8px' }}>
          <div className="mb-2 px-4">
            <span className="section-number font-medium">02</span>
            <span className="section-title ml-2 font-medium">LOGO</span>
          </div>
          <div className="relative w-full">
            <Image
              src="/images/hero-section.png"
              alt="Sunset view of Japanese houses"
              width={600}
              height={857}
              className="h-auto"
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
      <div style={{ borderBottom: '2px solid #151515', margin: '0 10px' }}></div>
    </section>
  )
}
