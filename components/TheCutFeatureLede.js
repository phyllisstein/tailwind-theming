export default function TheCutFeatureLede({ heroCaption, heroImage, children, date, rubric }) {
    return (
        <div className="max-w-4xl m-auto my-24 pt-4 border border-l-8 border-black">
            <div className="uppercase text-xs mb-5"><span className="font-chap-bold">{ rubric }</span> <span className="text-red-500 px-2">|</span>  <span className="font-chap">{ date }</span></div>
            <div>

            </div>
        </div>
    )
}
