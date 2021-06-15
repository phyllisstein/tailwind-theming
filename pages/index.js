import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-center m-auto w-1/2 mt-24">
      <div>
        <Link href="/thecut">
          <a>the cut standard lede</a>
        </Link>
      </div>
      <div>
        <Link href="/thecutFeature">
          <a>the cut feature lede</a>
        </Link>
      </div>
      <div>
        <Link href="/vulture">
          <a>vulture standard lede</a>
        </Link>
      </div>
      <div>
        <Link href="/vultureFeature">
          <a>vulture feature lede</a>
        </Link>
      </div>
      <div>
        <Link href="/vox">
          <a>vox standard lede</a>
        </Link>
      </div>
      <div>
        <Link href="/voxFeature">
          <a>vox feature lede</a>
        </Link>
      </div>
      <div>
        <Link href="/sharedStandard">
          <a>shared standard lede</a>
        </Link>
      </div>
    </div>
  )
}
