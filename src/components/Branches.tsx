import MoreBtn from "./MoreBtn";

interface BranchesProps {
  title: string;
  btnName?: string;
  imgSrc?: string;
  className?: string;
}

const Branches: React.FC<BranchesProps> = ({
  title,
  btnName = 'Get Started',
  imgSrc ,
  className,
}) => {
  return (
    <div className={` ${className}`}>
      <div>
        <img src={imgSrc} alt="avatar" />
      </div>
      <div>
        <h1>{title}</h1>
        <MoreBtn label={btnName} />
      </div>
    </div>
  );
};

export default Branches;
