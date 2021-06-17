import { Latest, LatestItem } from '../system/components/Latest';
import { BlockQuote } from '../system/components/BlockQuote';
import { Hed } from '../system/components/Hed';
import TheCutLede from '../components/TheCutLede';

export default function TheCut() {
  return (
    <>
      <TheCutLede />
      <Latest label="Cut Clips" style={{ color: 'white', letterSpacing: '4px' }}>
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
      <Hed>Quotables</Hed>
      <BlockQuote style={{ fontWeight: 900 }}>
        <p>
          Clay said, "Look… we're coming out once a week, right?
          And <span style={{ fontStyle: 'normal' }}>The New Yorker</span> comes out
          once a week. And we start out the week the same way they do,
          with blank paper and a supply of ink. Is there any reason we
          can't be as good as <span style={{ fontStyle: 'normal' }}>The
          New Yorker</span>?"
        </p>
      </BlockQuote>
    </>
  );
}
