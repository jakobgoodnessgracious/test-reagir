const Tabs = ({ tabs, to = '' }) => (
  <>
    {tabs.map((tab) => {
      return (
        <span onClick={() => window.history.pushState({}, null, to)}>
          {tab.label}
        </span>
      );
    })}
  </>
);

export default Tabs;
