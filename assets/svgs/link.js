import { View, Text } from 'react-native'
import React from 'react'
import Svg , {Path , Defs , Pattern, Use , Image}  from 'react-native-svg'; 


export default function link() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={25}
    height={25}
    fill="none"
    
  >
    {/* afstaf */}
    <Path fill="url(#a)" d="M0 0h25v25H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox">
        <Use xlinkHref="#b" transform="scale(.01)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={100}
        height={100}
      />
    </Defs>
  </Svg>
  )
}