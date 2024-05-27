import Svg , {Path , Defs ,G,Circle,Mask,Rect,ClipPath ,Filter  }  from 'react-native-svg'; 

export default function Home() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={535}
    height={532}
    fill="none"
   
  >
    <G clipPath="url(#a)">
      <Path fill="#DCE2ED" d="M0 0h535v532H0z" />
      <Circle
        cx={200}
        cy={295}
        r={122}
        fill="#000"
        stroke="#000"
        strokeWidth={6}
      />
      <Circle
        cx={442}
        cy={272}
        r={297}
        fill="#DCE2ED"
        stroke="#000"
        strokeWidth={6}
      />
      <Circle
        cx={207}
        cy={607}
        r={297}
        fill="#DCE2ED"
        stroke="#000"
        strokeWidth={6}
      />
      <Circle cx={442} cy={272} r={297} stroke="#000" strokeWidth={6} />
      <Mask id="b" fill="#fff">
        <Path d="M325 295c0 69.036-55.964 125-125 125S75 364.036 75 295s55.964-125 125-125 125 55.964 125 125Zm-244.096 0c0 65.775 53.321 119.096 119.096 119.096S319.096 360.775 319.096 295 265.775 175.904 200 175.904 80.904 229.225 80.904 295Z" />
      </Mask>
      <Path
        fill="#000"
        stroke="#000"
        strokeWidth={12}
        d="M325 295c0 69.036-55.964 125-125 125S75 364.036 75 295s55.964-125 125-125 125 55.964 125 125Zm-244.096 0c0 65.775 53.321 119.096 119.096 119.096S319.096 360.775 319.096 295 265.775 175.904 200 175.904 80.904 229.225 80.904 295Z"
        mask="url(#b)"
      />
      <Circle
        cx={280}
        cy={170}
        r={22.5}
        fill="#F2E8F2"
        stroke="#000"
        strokeWidth={5}
      />
      <Circle
        cy={170}
        r={72}
        fill="#6DEDBE"
        fillOpacity={0.75}
        stroke="#000"
        strokeWidth={6}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h535v532H0z" />
      </ClipPath>
    </Defs>
  </Svg>
  )
}