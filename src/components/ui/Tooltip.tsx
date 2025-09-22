type TooltipProps = {
    children: React.ReactNode;
    text: string;
};

const LogoTooltip = ({ children, text }: TooltipProps) => {
    return (
        <div className="relative group">
            {children}
            <div className="absolute left-22 transform -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto bg-gray-100 text-gray-800 font-light text-xs rounded py-1 px-2 z-10 whitespace-nowrap">
            {text}
            </div>
        </div>
    );
};

export default LogoTooltip;