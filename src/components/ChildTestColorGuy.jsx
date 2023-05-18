const ChildTestColorGuy = (props) => {
  return (
    <div
      style={{
        color: props.color,
      }}
    >
      ColorGuy, color: {props.color}
    </div>
  );
};

export default ChildTestColorGuy;
