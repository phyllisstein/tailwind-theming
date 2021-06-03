export default function TheCutFeatureLede({ heroCaption, heroImage, children, date, rubric }) {
    return (
        <div className="max-w-4xl border border-l-8 border-black flex">
            <div className="flex flex-col flex-1 p-4 justify-center">
                <div className="uppercase text-xs mb-5"><span className="font-chap-bold">{ rubric }</span> <span className="text-red-500 px-2">|</span>  <span className="font-chap">{ date }</span></div>
                <div className="">
                    { children }
                </div>
            </div>
            <div className="flex-1">

            </div>
        </div>
    )
}
