import Svg , {Path , Defs , Pattern, Use , Image}  from 'react-native-svg'; 

export default function AddDevice() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={30}
    height={30}
    fill="none"
  
  >
    <Path fill="url(#a)" d="M0 0h30v30H0z" />
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