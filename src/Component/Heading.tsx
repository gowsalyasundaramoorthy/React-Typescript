import React from 'react'

type headingProps = {
    children: string
}
export const Heading = (props: headingProps) => {
  return (
    <div>{props.children}</div>
  )
}
