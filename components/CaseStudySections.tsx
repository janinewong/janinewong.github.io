import { CaseImage } from "@/components/CaseImage";

const manageAsset = (name: string) => `/api/case-study-assets/manage/${name}`;
const multichannelAsset = (name: string) => `/api/case-study-assets/multichannel/${name}.png`;

export function ManageProblemGoalSection() {
  return <section className="manageProblemGoal">
    <div className="manageProblemGoalCopy">
      <div className="manageProblem">
        <h2>Problem</h2><h3>Similar jobs. Different experiences.</h3>
        <p>Manage experiences had evolved independently, making it harder for sellers to:</p>
        <ul><li>Find what needed attention</li><li>Understand the most important information</li><li>Take action without navigating elsewhere</li></ul>
        <p>For partner teams, there wasn&apos;t a consistent foundation to build from.</p>
      </div>
      <div className="manageGoal">
        <h2>Goal</h2><h3>Help sellers find and complete high-value actions faster.</h3>
        <div className="manageGoalMetrics"><div><strong>HVAs</strong><span>Increase # of high value actions taken</span></div><div><strong>Time</strong><span>Reduce the effort between identifying a need and taking action</span></div><div><strong>Scale</strong><span>Create reusable patterns for partner teams</span></div></div>
      </div>
    </div>
    <div className="manageProblemVisual"><CaseImage src={manageAsset("problem.png")} alt="Examples of previously disconnected Seller Central management experiences" /></div>
  </section>;
}

export function MultichannelConnectingSection() {
  return <section className="mcConnectingSection">
    <div className="mcConnectingIntro"><h2>Connecting products across channels.</h2><p>The final experience helped sellers identify potential Amazon matches, verify that listings represented the same product, and explicitly link them before managing them together. It also supported the opposite direction, allowing sellers to use their Amazon catalog to expand onto other channels.</p></div>
    <div className="mcUseCase"><span>Use case 1</span><h3>Import → Match → Review → Link</h3><div className="mcUseCaseImages mcUseCaseImagesPair"><CaseImage src={multichannelAsset("link-import")} alt="Import products from an external channel" /><CaseImage src={multichannelAsset("link-review")} alt="Review and link matching products" /></div></div>
    <div className="mcUseCase"><span>Use case 2</span><h3>Amazon → External channels</h3><div className="mcUseCaseImages mcUseCaseImagesExport"><CaseImage src={multichannelAsset("export")} alt="Use an Amazon catalog to expand products to external sales channels" /></div></div>
  </section>;
}
