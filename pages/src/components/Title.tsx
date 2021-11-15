const Title = ({ title, subtitle }) => {
    return (
        <div className="w-full text-center space-y-4 my-4">
            <h1 className="text-4xl font-medium">{title}</h1>
            <h2 className="text-2xl">{subtitle}</h2>
        </div>
    )
};

export default Title;