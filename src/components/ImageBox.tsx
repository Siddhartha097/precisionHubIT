interface ImageBoxProps {
  imgSrc: string;
  alt?: string;
  imgClassName?: string;
  className?: string;
}

const ImageBox: React.FC<ImageBoxProps> = ({
  imgSrc,
  alt = 'img',
  imgClassName,
  className,
}) => {
  return (
    <section className={`${className}`}>
      <img
        className={`${imgClassName}`}
        src={imgSrc}
        alt={alt}
      />
    </section>
  );
};

export default ImageBox;
