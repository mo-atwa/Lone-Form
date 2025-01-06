import "./check.css";

export default function Wrong({ theWrong }) {
  return (
    <div className="box">
      <div className="wrong">
        <h2>{theWrong}</h2>
      </div>
    </div>
  );
}
