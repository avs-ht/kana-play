interface TKBProps {
    children: string
}
const TemplateKanaButton: React.FC<TKBProps> = ({children}) => {
    return (
        <button>{children}</button>
    )
}

export default TemplateKanaButton