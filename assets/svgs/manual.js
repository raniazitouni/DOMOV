import Svg , {Path , Defs , Pattern, Use , Image}  from 'react-native-svg'; 

export default function Manual() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={25}
    height={25}
    fill="none"
   
  >
    <Path fill="url(#a)" d="M0 0h25v25H0z" />
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABIJJREFUeAHtnU2IHEUUx2cNEsSvgAdBiCAx4MchQQXxIIGA4imQ4N4EUXSRhIldVZOZee/VQHsIRk8mpxxDDisIguItF08KiuDFg4IaPASiRDQkQYzftbIsmbye2f7Yfb0z/4Vmtl/Xq/fq9++anu7q6u508AcCIAACIAACIAACIAACIAACIFBIoN/v3+lFjjqRs174vUlLKhMidw/n+R2FFWJDdQJuOHzQC5/3wv+UWRzT98di3FU9Mjw1AguZyBdlhLixLH3W6XQWtIphq0AgY957I+ByvWTFdzTYUyE0XDQCIdKhuoI4kYNa3bBVIOBFFusKkuqoEBouGgEIolExtEEQQ/haaAiiUTG0QRBD+FpoCKJRMbRBEEP4WmgIolExtEEQQ/haaAiiUTG0QRBD+FpoCKJRMbRBEEP4WmgIolExtEEQQ/haaAiiUTG0QRBD+FpoCKJRMbRBEEP4WmgIolExtEEQQ/haaAiiUTG0QRBD+FpoCKJRMbRBEEP4WmgIolExtEEQQ/haaAiiUTG0QRBD+FpoCKJRMbRBEEP4WmgIolGpaRsMBndnzI+F0fDxsotnHtSeH8I8KBs3lU85d/P8rprNb5e7i/SSY/q9NtSSEz6bipdyd0IvtotqjWwc0Y9NwTGs52INBO1y9cLfGYIsNY26KM+M6dt2Ua2RjYvDZx3Tb0WNbbs95R6Yn6mBoH2ujmifZ7rcdvjj+TnhqzMnxuru4USeCMKXxhvd2nWmXzKip1bzn8nPQPRIxnyhtSKs/ZK76OflYQO9GB9o9YE+8g/HYtw9kz2iqFFHB4P7nfA3bespgYdfe5GdRXnPtP115nuD0JetEYXoq37ev2+moU9rXJbnOxwPPzEXhfnzI0T3TMt3Lrb3er3bM+FzVqL895P84/RwtLmAvd5Gdrvd7Y75/c0WxYl85Jy7bb15zlW5xcXFbUHkzKaJQrS8tLR061xBrtDYBS90csNFYT6d5/ktFfKbS5eFEIdvb5wo8hYe+Vdhv2pkYGrtzPv/q76RT1RIBS6rBJzIYcf0VwO95e8Q2a3Wi88aBDzzC47pjxqi/OmZX66RAlzHCfhIB6qMqaTh1xDp+fH6sN4AgV6M+z3TlXX3FKZrLg6fayA0qigi4IiedsK/ThWF6UoSsKge2BskkG7N8cI/FYrC9HNvRE82GBJVTSOQBroKngV/Povx4Wn+2L4BBNKbD4LIGyHyp+mKcfo/XajcgFCoEgRAAARAAARAAARAAARAAARAAARAAARAAARAoCoBNxo96iOfCJHfnfTKU2xbeyVsYuVE3kxXpqtyV/2cyGs1x7QbmedXOP4xfmdJy9ZX2EV6VYVb1pjesgkxKrxZdGynWGHYxAQgz3xqq+6ZbcvbMb9TtkPcVD5j/rBtDdvC+XxwE+Cyhk25z3ase29h4BOPlY30kDTxEceQFh1DUo8KIkte+Pqs7rmb0K7rgfmVst9OE8unOzmcyHFPtIxzjbVzjYksiJYTs0D00ES42AgCIAACIAACIAACIAACIAAChgT+Ba42DAjJxHFcAAAAAElFTkSuQmCC"
        id="b"
        width={100}
        height={100}
      />
    </Defs>
  </Svg>
  )
}