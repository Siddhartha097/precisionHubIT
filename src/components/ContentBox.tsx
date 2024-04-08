import { softsols } from "@/images";
import ImageBox from "./ImageBox";

interface ContentBoxProps {
  label: string;
  content?: string;
  img?: string;
  reverse?: boolean;
  children?: React.ReactNode;
  isChildren?: boolean;
}

const ContentBox: React.FC<ContentBoxProps> = ({
  label,
  content,
  img = softsols,
  reverse,
  isChildren,
  children,
}) => {
  return (
    <section
      className={`flex ${
        reverse && "md:flex-row-reverse"
      } max-md:flex-col-reverse gap-16 max-md:gap-10`}
    >
      <div className="flex flex-col gap-8 md:w-1/2">
        <h1 className="font-bold text-5xl leading-normal tracking-tighter max-md:text-3xl">
          {label}
        </h1>
        <p className=" tracking-wide leading-normal max-md:text-sm">
          {content}
        </p>
        <div className={`${!isChildren && 'hidden'}`}>
          {children}
        </div>
      </div>
      <ImageBox
        imgSrc={img}
        className="md:w-1/2 flex items-center justify-center"
        imgClassName="object-contain shadow-md rounded-lg border"
      />
    </section>
  );
};

export default ContentBox;
