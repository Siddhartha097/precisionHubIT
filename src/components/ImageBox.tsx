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
    <section className={`className"w-full h-full flex items-center justify-center relative ${className}`}>
      <img
        className={`scale-90 rounded-lg shadow-md ${imgClassName}`}
        src={imgSrc}
        alt={alt}
      />
    </section>
  );
};

export default ImageBox;
