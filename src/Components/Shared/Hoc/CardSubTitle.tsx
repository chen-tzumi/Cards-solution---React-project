type CardSubTitleProps = {
    children: React.ReactNode;
}

export const CardSubTitle = (props: CardSubTitleProps) => {
    const { children } = props;

    return (
        <h1
            className="text-center break-words text-1xl"
        >
            {children}
        </h1>
    )
}