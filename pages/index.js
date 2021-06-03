import Link from 'next/link'
import SharedLede from '../components/SharedLede'

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
        <Link href="/shared" theme="vox">
          <a>shared lede</a>
        </Link>
      </div>
      <div>
        <Link href="/sharedv2">
          <a>shared lede v2</a>
        </Link>
      </div>
    </div>
  )
}
