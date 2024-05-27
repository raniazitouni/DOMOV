import Svg , {Path , Defs , Pattern, Use , Image}  from 'react-native-svg'; 

export default function Arrow() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={68}
    height={8}
    fill="none"
   
  >
    <Path
      fill="#727B7A"
      d="M67.354 4.354a.5.5 0 0 0 0-.708L64.172.464a.5.5 0 1 0-.707.708L66.293 4l-2.829 2.828a.5.5 0 1 0 .708.708l3.182-3.182ZM0 4.5h67v-1H0v1Z"
    />
  </Svg>
  )
}