"use client";
import React, { useState } from "react";

const BuyPage = () => {
  const [itemName, setItemName] = useState("");
  const [usedDuration, setUsedDuration] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch("/buyapi", {
      method: "POST",
      body: JSON.stringify({
        itemName,
        usedDuration,
        image,
        price,
      }),
      "content-type": "application/json",
    });

    const result = await res.json();

    if (result.success) {
      alert("Item added ");
    } else {
      alert("Item not added ");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-5">Buy anything from anywhere</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="itemName"
          >
            Item Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="itemName"
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="usedDuration"
          >
            Used Duration (in days)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="usedDuration"
            type="number"
            value={usedDuration}
            onChange={(e) => setUsedDuration(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image Upload(Link of image)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="text"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price(in INR)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BuyPage;
