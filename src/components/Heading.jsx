import { popins } from '@/app/layout'
import React from 'react'

export default function Heading({heading}) {
  return (
    <h3 className={`text-center text-2xl sm:text-4xl uppercase  ${popins.className}`}>{heading}</h3>
  )
}
