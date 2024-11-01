type CardTitleProps = {
  children: React.ReactNode;
}

export const CardTitle = (props: CardTitleProps) => {
  const { children } = props;
  return (
    <h1
      className="text-2xl font-bold text-center break-words"
    >
      {children}
    </h1>
  )
}