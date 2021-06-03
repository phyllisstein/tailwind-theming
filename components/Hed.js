export default function Hed({ children, className }) {
    return (
        <h1 className={ `font-canela text-4xl mb-2 ${ className }` }>
            { children }
        </h1>
    )
}
