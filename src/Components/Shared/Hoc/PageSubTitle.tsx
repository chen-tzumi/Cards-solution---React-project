type PageSubTitleProps = {
    children: React.ReactNode;
}

export const PageSubTitle = (props: PageSubTitleProps) => {
    const { children } = props;
    return (
        <h1
            className="mb-8 text-[1em] text-center md:text-[1.5em] lg:text-[2em]"
        >
            {children}
        </h1>
    )
}