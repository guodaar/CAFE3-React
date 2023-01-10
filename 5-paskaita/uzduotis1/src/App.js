import "./App.scss";
import Product from "./components/Product/Product";

function App() {
  const productInfo = {
    imageURL:
      "https://per4mmedia.com/wp-content/uploads/2021/11/mk2-2022-IG.jpg",
    title: "Volkswagen GOLF MK2 2022 Calendar",
    price: 10,
    description: [
      "12 unique designs.",
      "All pieces are princed on heavyweight 200 gsm art paper.",
      "Limited to 50 pieces.",
      "One size: \n11.7x16.5 inch / (297x420mm)",
    ],
    availability: 10,
    category: "calendars",
  };
  return (
    <div className="App">
      <Product
        image={productInfo.imageURL}
        title={productInfo.title}
        price={productInfo.price.toFixed(2)}
        description={productInfo.description}
        availability={productInfo.availability}
        category={productInfo.category}
      />
    </div>
  );
}

export default App;
