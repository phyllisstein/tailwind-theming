import TheCutLede from '../components/TheCutLede'
import { Latest, LatestItem } from '../system/components/Latest'

export default function TheCut() {
  return (
    <>
      <TheCutLede />
      <Latest style={{ color: 'white', letterSpacing: '4px' }}>
        <LatestItem>
          5 Reasons Drinking Milk on the Toilet Is Kind of a Game Changer
        </LatestItem>
        <LatestItem>
          Wait, Is Every Tailor Swift Song Secretly Marxist?
        </LatestItem>
        <LatestItem>
          Soylent Green Could Be a Delicious Reality
        </LatestItem>
      </Latest>
    </>
  )
}
