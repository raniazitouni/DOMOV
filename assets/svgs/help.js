
import Svg , {Path , Defs , Pattern, Use , Image}  from 'react-native-svg'; 

export default function Help() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={32}
    height={28}
    fill="none"
    
  >
    <Path fill="url(#a)" d="M0 0h32v28H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="matrix(.01 0 0 .01143 0 -.071)" />
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