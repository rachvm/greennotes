export default function TipCard({ randomTip }) {
  const { topic_category, topic, topic_blurb, best_practice } = randomTip;

  return (
    <>
      <div className={"main-card"}>
        {/* <div className={"left-card"}> */}
        <h3>Tip of the Day</h3>
        <h4>{topic}</h4>
        <p>{topic_blurb}</p>
        <h4>Best Practice</h4>
        <p>{best_practice}</p>
        <button>Click Here for more info</button>
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
