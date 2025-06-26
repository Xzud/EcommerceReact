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
            <div className="right">
              <img
                src="https://png.pngtree.com/png-vector/20240507/ourmid/pngtree-blue-shirt-pant-shoes-png-image_12378645.png"
                alt=""
              />
              <img
                src="https://png.pngtree.com/png-vector/20240413/ourmid/pngtree-shoes-shirt-trousers-png-image_12284227.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="categories">
          <div className="category">
            <img
              src="https://purepng.com/public/uploads/thumbnail/purepng.com-black-jacketgarmentupper-bodyjacketlighterblack-1421526361918leexw.png"
              alt=""
            />
            <span>Jacket</span>
          </div>
          {Array.from({ length: 7 }).map((_, index) => (
            <div className="category" key={index}>
              <img
                src="https://pngimg.com/d/question_mark_PNG70.png"
                alt=""
              />
              <span>Unknown</span>
            </div>
          ))}
        </div>

        <div className="sale-header">
          <div className="flash-sale">
            <div className="icon">⚡️</div>
            <span className="title">Flash Sale</span>
            <div className="countdown">
              <span className="num">08</span>
              <span>:</span>
              <span className="num">17</span>
              <span>:</span>
              <span className="num">56</span>
            </div>
          </div>
          <div className="options">
            <span className="left">⬅</span>
            <span className="right">⟶</span>
          </div>
        </div>

        <div className="sales-items">
          <div className="item">
            <img
              src="https://purepng.com/public/uploads/thumbnail/purepng.com-black-jacketgarmentupper-bodyjacketlighterblack-1421526361918leexw.png"
              alt="This is a jacket"
            />
            <span className="content">
              <span className="title">
                EliteShield Performance Men's Jacket
              </span>
              <div className="prices">
                <span className="price">Php 899.99</span>
                <span className="old-price">Php 1699.99</span>
              </div>
              <hr />
              <div className="sales-count">
                <div className="bar">
                  <span className="progress"></span>
                </div>
                <span className="quota">8/10 Sale</span>
              </div>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
