import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DynamicListManager() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() === "") return;
    setItems([...items, inputValue]);
    setInputValue("");
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-4 w-full max-w-md mx-auto bg-gray-100 shadow-lg rounded-2xl">
      <h1 className="text-xl font-bold">Dynamic List Manager</h1>
      <div className="flex w-full space-x-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter item"
          className="flex-grow"
        />
        <Button onClick={addItem} className="bg-blue-500 hover:bg-blue-600 text-white">
          Add Item
        </Button>
      </div>
      <div className="w-full p-4 bg-white shadow-md rounded-xl min-h-[100px]">
        {items.length === 0 ? (
          <p className="text-gray-400">The list is empty.</p>
        ) : (
          <ul className="list-disc pl-5 space-y-1">
            {items.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
