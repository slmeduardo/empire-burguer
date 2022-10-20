import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image"

export default function SimpleSlider({ depoiments }) {
  {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    }
    return (
      <div>
        <Slider {...settings}>
          {depoiments.map((depoiment) => (
            <div className="bg-[#fff] mt-5 p-5 rounded-xl h-52 max-w-sm shadow-[0_4px_25px_rgba(60,35,13,0.1)] opacity-60 hover:opacity-100">
              <p
                style={{
                  display: "block",
                  textOverflow: "ellipsis",
                  wordWrap: "break-word",
                  overflow: "hidden",
                  maxHeight: "5.8rem",
                  lineHeight: "1.5em"
                }}
                className="text-[#635352] mb-5"
              >
                {depoiment.testimonial}
              </p>
              <div className="flex items-center">
                <div>
                  <Image width="50px" height="50px" src={depoiment.image} />
                </div>
                <div className="px-2 text-[#1D0605]">
                  <h1 className="uppercase">{depoiment.name}</h1>
                  <p className="opacity-70">{depoiment.age} anos</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}
