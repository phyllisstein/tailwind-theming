import { Latest, LatestItem } from '../system/components/Latest'
import VultureLede from '../components/VultureLede'

export default function TheCut() {
  return (
    <>
      <VultureLede />
      <Latest>
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
