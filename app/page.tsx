import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { InvestorsSection } from "@/components/investors-section"
import { CareerSection } from "@/components/careers"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductsSection />
      <InvestorsSection />
      <CareerSection />
      <Footer />
    </main>
  )
}
