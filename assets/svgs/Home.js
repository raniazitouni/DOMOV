import Svg , {Path , Defs ,G,Circle,Mask,Rect,ClipPath ,Filter  }  from 'react-native-svg'; 

export default function Home() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={360}
    height={800}
    fill="none"

  >
    <G clipPath="url(#a)">
      <Path fill="#DCE2ED" d="M0 0h360v800H0z" />
      <Circle
        cx={188}
        cy={319}
        r={122}
        fill="#000"
        stroke="#000"
        strokeWidth={6}
      />
      <Circle
        cx={30}
        cy={197}
        r={72}
        fill="#6DEDBE"
        fillOpacity={0.75}
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
        <Path d="M313 319c0 69.036-55.964 125-125 125S63 388.036 63 319s55.964-125 125-125 125 55.964 125 125Zm-244.096 0c0 65.775 53.321 119.096 119.096 119.096S307.096 384.775 307.096 319 253.775 199.904 188 199.904 68.904 253.225 68.904 319Z" />
      </Mask>
      <Path
        fill="#000"
        stroke="#000"
        strokeWidth={12}
        d="M313 319c0 69.036-55.964 125-125 125S63 388.036 63 319s55.964-125 125-125 125 55.964 125 125Zm-244.096 0c0 65.775 53.321 119.096 119.096 119.096S307.096 384.775 307.096 319 253.775 199.904 188 199.904 68.904 253.225 68.904 319Z"
        mask="url(#b)"
      />
      <Circle
        cx={244}
        cy={180}
        r={22.5}
        fill="#F2E8F2"
        stroke="#000"
        strokeWidth={5}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h360v800H0z" />
      </ClipPath>
    </Defs>
  </Svg>
  )
}