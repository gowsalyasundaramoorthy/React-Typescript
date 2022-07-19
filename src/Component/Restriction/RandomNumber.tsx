type RandomNumberType = {
    value: number
}

type PostiveNumber = RandomNumberType & {
    isPositive: Boolean
    isNegative?: never
    isZero?: never
}
type NegativeNumber = RandomNumberType & {
    isNegative: Boolean
    isPositive?:  never
    isZero?: never
}
type Zero = RandomNumberType & {
    isZero: Boolean
    isPositive?: never
    isNegative?: never
}

type RandomNumberProps = PostiveNumber | NegativeNumber | Zero




export const RandomNumber = ({

    value,
    isPositive,
    isNegative,
    isZero, }
:RandomNumberProps) => {
  return (
      <div>
          {value}{isPositive && 'positive'}{isNegative && 'negative'}{' '} {isZero && 'zero'}


    </div>
  )
}
