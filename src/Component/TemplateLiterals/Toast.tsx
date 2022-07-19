

type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPostion = 'top' | 'center' | 'bottom'
type toastProps = {
    position: Exclude<`${HorizontalPosition}-${VerticalPostion}`, 'center-center'| 'center' >
}

export const Toast = ({position}: toastProps) => {
  return (
    <div>Toast notification position - {position}</div>
  )
}
