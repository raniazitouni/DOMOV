

import Svg , {Path , Defs , Pattern, Use , Image}  from 'react-native-svg'; 

export default function Smartswitch() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={27}
    height={27}
    fill="none"
    
  >
    <Path fill="url(#a)" d="M0 0h27v27H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
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