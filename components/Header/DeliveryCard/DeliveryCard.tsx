import Image from "next/image"

export function DeliveryCard({ image, title, desc }) {
  return (
    <div className="bg-[#fff] py-3 my-3 rounded-xl px-5 hover:shadow-[0_4px_25px_rgba(60,35,13,0.1)]">
      <div className="flex items-center">
        <div className="border-r pr-5">
          <Image src={image} />
        </div>
        <div className="pl-5">
          <h1 className="uppercase text-[#1D0605] text-lg">{title}</h1>
          <p className="text-[#635352]">{desc}</p>
        </div>
      </div>
    </div>
  )
}
