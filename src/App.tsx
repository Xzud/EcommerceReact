import Header from "@/components/Header";

function App() {
  return (
    <>
      <Header />
      <section>
        <div className="carousel">
          <div className="first-entry">
            <div className="left">
              <span>#Big Fashion Sale</span>
              <h1>Limited Time Offer!</h1>
              <h1>
                Up to <span className="italic">50%</span> OFF!
              </h1>
              <span>Redefine Your Everyday Style</span>
            </div>
            <div className="right"></div>
          </div>
        </div>
        <div className="categories">
          <div className="category"></div>
          <div className="category"></div>
          <div className="category"></div>
        </div>
      </section>
    </>
  );
}

export default App;
