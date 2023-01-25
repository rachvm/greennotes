export default function Header({ topic_category }) {
  console.log(topic_category);
  return (
    <div className={"App-header"}>
      <h1>Green Notes</h1>
      {/* <h3>Tip of the Day</h3> */}
      <div className="category">
        <h5>{topic_category}</h5>
      </div>
    </div>
  );
}
