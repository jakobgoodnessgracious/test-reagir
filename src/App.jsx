import UsingFragment from './pages/UsingFragment/UsingFragment';
import Tabs from './components/Tabs/Tabs';

const App = () => (
  <>
    <Tabs
      tabs={[
        { label: 'Tab 1', to: '/' },
        { label: 'Tab 2', to: '/other-page' },
      ]}
    />
    <UsingFragment />
    <div>jesus</div>
  </>
);

export default App;
