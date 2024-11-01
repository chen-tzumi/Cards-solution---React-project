type ContentTitleProps = {
    children: React.ReactNode;
}

export const ContentTitle = (props: ContentTitleProps) => {
    const { children } = props;
    return (
        <h1
            className="my-2 mr-5 text-[0.5em] font-bold text-center  md:text-[1em] lg:text-[1.5em]"
        >
            {children}
        </h1>
    )
}