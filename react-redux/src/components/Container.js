const Container = ({ children }) => {
  return (
    <div className="card" style={{ width: "50%", margin: "50px 300px" }}>
      <div className="card-body">{children}</div>
    </div>
  );
};
export default Container;
