import React from 'react'

type Props = {
    championId: number
}

export default function HeroView({championId}: Props) {
  return (
    <div>{championId}</div>
  )
}