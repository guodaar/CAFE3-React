import "./App.scss";
import ProductCard from "./Components/product-card/ProductCard";

function App() {
  return (
    <div className="App">
      <h1>Best sellers</h1>
      <div className="product-container">
        <ProductCard
          productType="Canvases"
          productName="Off-white air jordan 1 canvas"
          productPrice="32.00€ - 120.00€"
        />
        <ProductCard
          productType="Posters"
          productName="Yeezy boost 350 v2 frozen yellow poster"
          productPrice="16.00€ - 32.00€"
        />
        <ProductCard
          productType="Stickers"
          productName="Yeezy 350 v2 zebra sticker"
          productPrice="5.00€"
        />
        <ProductCard
          productType="Adidas"
          productName="Adidas yeezy powerphase calabasas poster"
          productPrice="16.00€ - 32.00€"
        />
        <ProductCard
          productType="Jordans"
          productName="air jordan 4 red suede poster"
          productPrice="16.00€ - 32.00€"
        />
        <ProductCard
          productType="Balenciaga"
          productName="balenciaga triple s poster"
          productPrice="16.00€ - 32.00€"
        />
        <ProductCard
          productType="Nike"
          productName="nike blazer mid sacai poster"
          productPrice="16.00€ - 32.00€"
        />
        <ProductCard
          productType="Artists"
          productName="lil peep poster"
          productPrice="32.00€ - 120.00€"
        />
      </div>
    </div>
  );
}

export default App;
