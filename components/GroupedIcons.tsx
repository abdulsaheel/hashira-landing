import Image from "next/image"

export function GroupedIcons() {
  return (
    <div className="flex items-center space-x-0 bg-red-500"> {/* Temporary background color for debugging */}
      <Image src="/images/star.svg" alt="Star" width={24} height={24} />
      <Image src="/images/emoji-angry.svg" alt="Emoji" width={40} height={40} />
      <Image src="/images/star.svg" alt="Star" width={24} height={24} />
    </div>
  )
}