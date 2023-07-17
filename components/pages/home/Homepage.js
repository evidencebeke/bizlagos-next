import React, { useState } from "react";
import Layout from "../../Layout";
import json from "../../../data/listings.json";
import Button from "../../ui/Button";

const Homepage = () => {
  const [product, setProduct] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
  };
  return (
    <Layout>
      <div className="h-[300px] flex items-center  justify-center container mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex w-[90%] flex-col justify-center"
        >
          <div>
            <select
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="capitalize my-4 outline-none w-full bg-white border-slate-500 py-4 border-2 rounded-lg"
              name="type"
              id="type"
            >
              <option value="">Select a Business or product</option>
              {json.map((item, index) => (
                <option key={index} className="capitalize" value={item}>
                  {" "}
                  {item}
                </option>
              ))}
            </select>
          </div>
          <Button>Search</Button>
        </form>
      </div>
    </Layout>
  );
};

export default Homepage;
