import { popins } from '@/app/layout'
import React from 'react'
import Heading from './Heading'

export default function Contact() {
  return (
    <section className={`py-10  ${popins.className}`}>
      <Heading heading="Get in Touch" />
      <div className='py-10'>
      <h5 className='text-center'>Phone  : +91 7994202313</h5>
      <h5 className='text-center'>Email : arjunnks123@gmail.com</h5>
      </div>
      </section>
  )
}
