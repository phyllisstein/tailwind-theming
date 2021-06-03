export default function HeroImage({ caption, src }) {
    return (
        <figure>
            <img className="w-2/3 mb-2" src={ src }></img>
            <figcaption className="font-chap text-gray-500 text-xs">{ caption }</figcaption>
        </figure>
    )
}
