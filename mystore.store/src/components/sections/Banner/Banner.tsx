// import { Banner } from '@faststore/ui'
import type { InputHTMLAttributes } from 'react'
import React from 'react'
// import Image from 'src/components/ui/Image/Image'
import { Banner, BannerImage } from '@faststore/ui'

import './banner.scss'

export interface BannerTextProps extends InputHTMLAttributes<HTMLDivElement> {
  imageSrc: string
  imageAlt: string
}

function BannerText({ imageAlt, imageSrc }: BannerTextProps) {
  return (
    <Banner variant="horizontal">
      <BannerImage>
        <img alt={imageAlt} src={imageSrc} />
      </BannerImage>
    </Banner>
  )
}

export default BannerText
