interface CustomImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  height?: number | string
  width?: number | string
}

const CustomImage = (props: CustomImageProps) => {
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/alt-text*/}
      <img
        decoding='async'
        loading='lazy'
        {...props}
        style={{
          ...props.style,
          height: props.height,
          width: props.width
        }}
      />
    </>
  )
}

export default CustomImage
