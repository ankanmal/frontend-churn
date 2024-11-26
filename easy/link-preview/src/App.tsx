
import LinkPreviewer from './LinkPreviewer';
import './style.css'

export default function App() {
  return (
    <div>
      <div className="container">

        <LinkPreviewer url="https://algochurn.com">
          <span>AlgoChurn</span>
        </LinkPreviewer>
      </div>
    </div>
  );
}
