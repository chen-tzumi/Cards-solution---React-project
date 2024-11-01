type ContentProps = {
    children: React.ReactNode;
}

export const Content = (props: ContentProps) => {
    const { children } = props;
    return (
        <h1
            className="my-2 text-[0.5em] text-center  md:text-[1em] lg:text-[1.5em]"
        >
            {children}
        </h1>
    )
}