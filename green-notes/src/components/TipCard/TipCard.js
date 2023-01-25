export default function TipCard({ randomTip }) {
  const { topic_category, topic, topic_blurb, best_practice, article_link } =
    randomTip;

  return (
    <>
      <div className={"main-card"}>
        {/* <div className={"left-card"}> */}
        <div className="topic-section">
          <h4>{topic}</h4>
          <p>{topic_blurb}</p>
        </div>
        <div className="best-practice-section">
          <h4>Best Practice</h4>
          <p>{best_practice}</p>
        </div>
        <a href={article_link}>Learn more</a>
        {/* </div> */}

        {/* <div className={"right-card"}>
          <div>
            <h5>Best Practice</h5>
          </div>
          <p>{best_practice}</p>
          <button>Click Here for more info</button>
        </div> */}
      </div>
    </>
  );
}
