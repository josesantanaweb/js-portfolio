'use client'
import Image from 'next/image'

const Photo = () => {
  return (
    <div className="flex w-1/2">
      <div className="flex w-[590px] h-[590px] rounded-3xl border border-stroke p-5">
        <Image src="/images/about-us.png" alt="About Us" width={590} height={590} className="w-full h-full object-cover rounded-2xl" />
      </div>
    </div>
  )
}

export default Photo
