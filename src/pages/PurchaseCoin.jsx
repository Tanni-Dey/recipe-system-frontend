const PurchaseCoin = () => {
  const coinCards = [
    { id: "$1", title: "$1", details: "You get 100 coin in this plan" },
    { id: "$5", title: "$5", details: "You get 500 coin in this plan" },
    { id: "$10", title: "$10", details: "You get 1000 coin in this plan" },
  ];

  return (
    <div className="container mx-auto my-20">
      <div className="grid grid-cols-3 gap-5">
        {coinCards.map((card) => (
          <div key={card.id}>
            <div className="card max-w-80 bg-white border text-primary-content shadow-lg p-5">
              <div className="card-body items-center ">
                <h2 className="card-title capitalize font-semibold mb-3 text-3xl">
                  {card.title} Dollars
                </h2>
                <p className="text-accent text-justify">{card.details} </p>
              </div>
              <button className="btn btn-primary">Buy Plan</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchaseCoin;
