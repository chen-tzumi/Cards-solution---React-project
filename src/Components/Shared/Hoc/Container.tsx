type ContainerProps = {
    children: React.ReactNode;
}

export const Container = (props: ContainerProps) => {
    const { children } = props;
    return (
        <h1
            className=" min-h-[40vh] w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] p-8 flex flex-col justify-center bg-[#6e6e9690] rounded-3xl mb-10 m-auto"
        >
            {children}
        </h1>
    )
}