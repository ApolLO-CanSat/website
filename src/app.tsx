import Explanation from './components/explanation';
import Footer from './components/footer';
import ScrollIndicator from './components/scroll-indicator';
import Team from './components/team';
import Title from './components/title';

function App() {
  return (
    <div className="flex h-dvh w-dvw snap-y snap-proximity flex-col items-center overflow-x-hidden overflow-y-auto bg-neutral-950 text-neutral-100">
      <div className="relative h-screen w-screen shrink-0 snap-start overflow-hidden">
        <Title />
        <ScrollIndicator text="What's all this about?" />
      </div>

      <div className="relative flex h-screen shrink-0 snap-start place-items-center">
        <Explanation />
        <ScrollIndicator text="Meet the team" />
      </div>

      <Team />

      <Footer />
    </div>
  );
}

export default App;
