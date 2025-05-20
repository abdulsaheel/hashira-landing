"use client"

import Image from "next/image"
import { useState } from "react"

interface Project {
  id: string
  title: string
  description: string
  images: string[]
}

const projects: Project[] = [
  {
    id: "catalog",
    title: "CATALOG",
    description: "Catalog is the first peer-to-peer protocol designed to allow Bitcoin, and any other asset, to seamlessly interact with the decentralized web. The Catalog protocol enables trustless and atomic cross-chain swaps without introducing a central custodian.Catalog is the first peer-to-peer protocol designed to allow Bitcoin, and any other asset, to seamlessly interact with the decentralized web.",
    images: [
      "/images/product-1.png",
      "/images/product-2.png",
      "/images/product-3.png"
    ]
  },
  {
    id: "explorer",
    title: "EXPLORER",
    description: "Explorer is a powerful tool that allows users to navigate the blockchain with ease, providing detailed insights into transactions, smart contracts, and network performance across multiple chains.",
    images: [
      "/images/product-2.png",
      "/images/product-3.png",
      "/images/product-1.png"
    ]
  },
  {
    id: "faucet",
    title: "FAUCET",
    description: "Faucet is a service that distributes small amounts of cryptocurrency to developers and testers, enabling them to experiment with blockchain applications without risking real assets.",
    images: [
      "/images/product-3.png",
      "/images/product-1.png",
      "/images/product-2.png"
    ]
  },
  {
    id: "garden-dashboard",
    title: "GARDEN DASHBOARD",
    description: "Garden Dashboard provides a comprehensive overview of your digital assets, staking rewards, and market performance in one beautiful interface with real-time data visualization.",
    images: [
      "/images/product-2.png",
      "/images/product-1.png",
      "/images/product-3.png"
    ]
  },
  {
    id: "seasons",
    title: "SEASONS",
    description: "Seasons is a cyclical reward program that incentivizes community participation through exclusive drops, governance rights, and special access to new features.",
    images: [
      "/images/product-3.png",
      "/images/product-2.png",
      "/images/product-1.png"
    ]
  },
  {
    id: "merry",
    title: "MERRY",
    description: "Merry is a social platform that connects crypto enthusiasts and creators, fostering collaboration and knowledge sharing in a decentralized environment.",
    images: [
      "/images/product-1.png",
      "/images/product-2.png",
      "/images/product-3.png"
    ]
  }
]

export function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<string>("catalog")
  const currentProduct = projects.find(p => p.id === selectedProduct) || projects[0]

  return (
    <section className="flex h-screen">
      {/* Left Side - Navigation */}
      <div className="w-1/2 px-8 py-6 border-r border-gray-200 flex flex-col">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <span className="text-sm text-gray-500 mr-2">02</span>
            <span className="text-sm">WORK</span>
          </div>
          <div className="text-sm text-gray-500">/02</div>
        </div>
        
        <div className="flex-grow">
          <ul className="space-y-6">
            {projects.map(project => (
              <li
                key={project.id}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedProduct === project.id 
                    ? "text-6xl font-bold text-red-500" 
                    : "text-2xl hover:text-gray-500"
                }`}
                onClick={() => setSelectedProduct(project.id)}
              >
                {project.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Side - Product Details */}
      <div className="w-1/2 px-8 py-6 flex flex-col">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <span className="text-sm text-gray-500 mr-2">03</span>
            <span className="text-sm">WORK</span>
          </div>
          <div className="text-sm text-gray-500">/03</div>
        </div>
        
        {/* Product Description */}
        <div className="mb-8 pr-16">
          <p className="text-sm mb-4 max-w-xl">{currentProduct.description}</p>
          <div className="flex justify-end">
            <div className="rounded-full border border-gray-300 p-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Product Images */}
        <div className="flex-grow grid grid-cols-3 gap-4">
          {currentProduct.images.map((image, index) => (
            <div key={index} className="relative rounded-sm overflow-hidden h-full">
              <Image
                src={image}
                alt={`${currentProduct.title}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}