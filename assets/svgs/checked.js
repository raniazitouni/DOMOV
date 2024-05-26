
import Svg , {Path , Defs , Pattern, Use , Image,G,ClipPath}  from 'react-native-svg'; 

export default function Checked() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    fill="none"
    
  >
    <G clipPath="url(#a)">
      <Path
        fill="#5BE6B3"
        d="M40 0C17.945 0 0 17.945 0 40s17.945 40 40 40 40-17.945 40-40S62.055 0 40 0Zm22.356 29.474L36.792 54.837c-1.504 1.504-3.91 1.604-5.514.1l-13.534-12.33c-1.604-1.504-1.704-4.01-.3-5.614 1.503-1.605 4.01-1.705 5.614-.201l10.727 9.825 22.857-22.858c1.604-1.604 4.11-1.604 5.714 0s1.604 4.11 0 5.715Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h80v80H0z" />
      </ClipPath>
    </Defs>
  </Svg>
  )
}