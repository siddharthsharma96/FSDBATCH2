const Cards = ({ head, cont, classs }) => {
  return (
    <div className={classs === "card" ? "card" : "content-header"}>
      {classs === "card" ? <h3>{head}</h3> : <h2>{head}</h2>}

      <p>{cont}</p>
    </div>
  );
};

export default Cards;
