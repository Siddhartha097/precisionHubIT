interface TechBoxProps {
  label: string;
  content?: string;
  img?: string;
}

const TechBox: React.FC<TechBoxProps> = ({ label, content, img }) => {
  return (
    <div className="flex items-center justify-between gap-16">
      <div className="rounded-full border shadow-md w-1/4 p-4">
        <img className="" src={img} alt="" />
      </div>
      <div className="md:w-2/3 space-y-5">
        <h1 className="font-bold text-4xl tracking-wide">{label}</h1>
        <p className=" text-neutral-600 tracking-tight leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
};

export default TechBox;
