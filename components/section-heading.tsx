import React, { Children } from 'react'  

type SectionHeadingProps = {
    children: React.ReactNode;
}

export default function SectionHeading({children}: SectionHeadingProps) {
  return (
    <h2 className="text-xl lg:text-2xl font-medium mb-8">{children}</h2>
  )
}
