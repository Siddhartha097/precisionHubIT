interface TechBoxProps {
  label: string;
  content?: string;
  img?: string;
}

const TechBox: React.FC<TechBoxProps> = ({ label, content, img }) => {
  return (
    <div className="flex items-center justify-between gap-16 max-md:flex-col max-md:gap-8">
      <div className="rounded-full border shadow-md w-[270px] p-8 overflow-hidden">
        <img className="w-full object-cover" src={img} alt="" />
      </div>
      <div className="md:w-[70vw] space-y-5 max-md:text-center">
        <h1 className="font-bold text-4xl tracking-wide">{label}</h1>
        <p className=" text-neutral-600 tracking-tight leading-relaxed max-md:text-sm">
          {content}
        </p>
      </div>
    </div>
  );
};

export default TechBox;
