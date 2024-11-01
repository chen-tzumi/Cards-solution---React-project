type PageTitleProps = {
    children: React.ReactNode;
}

export const PageTitle = (props: PageTitleProps) => {
    const { children } = props;
    return (
        <h1
            className="my-4 text-[1em] font-bold text-center  md:text-[2em] lg:text-[3em]"
        >
            {children}
        </h1>
    )
}