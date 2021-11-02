import React from 'react'
import { Piece } from 'avataaars'

export const Clothes = ({ size, type, color, graphic }) => {
  const clothing = React.cloneElement(
    <Piece
      pieceType="clothe"
      pieceSize={size}
      clotheType={type || 'ShirtCrewNeck'}
      clotheColor={color || 'Black'}
      graphicType={graphic || 'Pizza'}
    />
  )
  return clothing
}
