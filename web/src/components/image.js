import cn from 'classnames'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import React, { useState } from 'react'

const sanityConfig = {
  projectId: "ah5svfqq",
  dataset: 'production'
}

export const Image = ({ imageId, className, width, alt, src }) => {
  const [loaded, setLoaded] = useState(false)
  letfluidProps

  if (imageId) {
    fluidProps = getFluidGatsbyImage(imageId, { maxWidth: width || 2400 }, sanityConfig)
  }

  return (
    <div className={cn("default image class", className)}>
      {fluidProps ? (
        <Img fluid={fluidProps} alt={alt} />
      ) : (
        <img
          alt={alt}
          src={src ? src : undefined}
          className={cn("default class name", {
            "is-loaded": loaded,
          })}
          onLoad={() => {
            setLoaded(true)
          }} />
      )}
    </div>
  )
}