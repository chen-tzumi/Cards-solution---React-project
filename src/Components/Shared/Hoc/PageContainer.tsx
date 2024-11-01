type PageContainerProps = {
    children: React.ReactNode;
}

export const PageContainer = (props: PageContainerProps) => {
    const { children } = props;
    return (
        <div
            className="min-h-[87vh] m-auto flex flex-col justify-center align-middle pt-10 text-center "
        >
            {children}
        </div>
    )
}