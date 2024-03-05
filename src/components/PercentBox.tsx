
interface PercentBoxProps {
    percent?: number;
    text: string;
    className?: string;
    percentStyle?: string;
    textStyle?: string;
}

const PercentBox: React.FC<PercentBoxProps> = ({
    percent = 50,
    percentStyle = 'text-5xl font-bold max-md:text-4xl',
    text,
    textStyle = 'text-neutral-600 font-medium max-md:text-xs',
    className = 'space-y-4',
}) => {
    return (
        <div className={className}>
            <h1 className={percentStyle}>
                {percent}%
            </h1>
            <p className={textStyle}>
                {text}
            </p>
        </div>
    )
}

export default PercentBox