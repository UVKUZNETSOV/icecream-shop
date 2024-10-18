import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/shared/Header";
import Card from "./components/Card";
import { Products } from "./types/types";

import Loader from "./components/shared/Loader";

function App() {
  useEffect(() => {
    axios
      .get("https://webapi.omoloko.ru/api/v1/products")
      .then((res) => res.data)
      .then((data) => data.products)
      .then((products) => {
        setProducts(products);
        setIsloaded(true);
      })
      .catch(err => console.log(err))
  }, []);

  const [isLoaded, setIsloaded] = useState<boolean>(false);
  const [products, setProducts] = useState<Products[]>([]);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center w-screen justify-center bg-center bg-no-repeat bg-cover bg-fixed">
        {isLoaded ? (
          <ul className="mt-28 flex flex-wrap gap-5 justify-center">
            {products.slice(0, 10).map((item, index) => (
              <Card
                title={item.title}
                image={item.image}
                cost={item.cost}
                key={index}
                itemKey={index}
                quantity={0}
              />
            ))}
          </ul>
        ) : (
          <div className="h-screen flex justify-center items-center">
            <Loader />
          </div>
          
        )}
      </div>
    </>
  );
}

export default App;
