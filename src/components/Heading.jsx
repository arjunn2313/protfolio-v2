 
import { Poppins } from 'next/font/google';
import React from 'react'

export const popins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Heading({heading}) {
  return (
    <h3 className={`text-center text-2xl sm:text-4xl uppercase  ${popins.className}`}>{heading}</h3>
  )
}
