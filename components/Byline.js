export default function Byline({ children, className }) {
    return (
        <p className={ `font-chap text-sm border-b border-gray-300 pb-4 mb-8 ${ className }` }>
            { children }
        </p>
    )
}
