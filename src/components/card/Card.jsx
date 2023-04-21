import "./card.scss";

export default function Card() {
  return (
    <div className="card_wrapper">
      <div className="icon">Icon</div>
      <div className="details">
        <p className="plan">
          <strong> Arcade</strong>
        </p>
        <p className="price">$90/yr</p>
        <p className="duration">2 months free</p>
      </div>
    </div>
  );
}
