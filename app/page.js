"use client"

import { useState } from "react";
import { lunarify } from "./lib/cipher";
import Link from "next/link";

const Home = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState('encode');
  const [key, setKey] = useState(1);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleModeChange = (e) => {
    setMode(e.target.value);
  };


  const handleKeyChange = (e) => {
    setKey(parseInt(e.target.value));
    console.log("KEY CHANGED: "+key)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = lunarify(input, mode === 'encode', key);
    setOutput(result);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-gray-800 mx-8 md:mx-0 shadow-lg rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-center text-3xl font-semibold text-white">Lunaris Cipher</h1>
            </div>
            <form onSubmit={handleSubmit} className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <label className="block text-sm font-medium text-gray-300">
                  <input
                    type="radio"
                    value="encode"
                    checked={mode === 'encode'}
                    onChange={handleModeChange}
                    className="mr-2 leading-tight text-blue-500 focus:ring-2 focus:ring-blue-500"
                    
                  />
                  <span className="text-sm text-white" id="encrypt-label">Encrypt</span>
                </label>
                <label className="block text-sm font-medium text-gray-300">
                  <input
                    type="radio"
                    value="decode"
                    checked={mode === 'decode'}
                    onChange={handleModeChange}
                    className="ml-4 mr-2 leading-tight text-blue-500 focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-sm text-white" id="encrypt-label">Decrypt</span>
                </label>
              </div>
              <div className="flex items-center justify-between mb-4 block w-full">
                <label className="block text-sm font-medium text-gray-300 text-center">
                  <span className="text-sm text-white">Key</span>
                  <input
                    type="number"
                    onChange={handleKeyChange}
                    placeholder="Integer"
                    className=" leading-tight block w-full px-4 py-3 rounded-lg bg-gray-700 border-transparent focus:border-gray-500 focus:bg-gray-900 focus:ring-0 text-white"
                  />
                </label>
              </div>
              <div className="flex items-center justify-between mb-4">
                <textarea
                  value={input}
                  onChange={handleChange}
                  placeholder="Enter your text here"
                  className="block w-full px-4 py-3 rounded-lg bg-gray-700 border-transparent focus:border-gray-500 focus:bg-gray-900 focus:ring-0 text-white"
                  rows="5"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-6 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </form>
            {output && (
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-white">Output:</h2>
                <textarea
                  disabled
                  value={output}
                  className="block w-full px-4 py-3 rounded-lg bg-transparent border-transparent focus:border-gray-500 focus:bg-gray-900 focus:ring-0 text-white"
                  rows="5"
                />
              </div>
            )}
          </div>
        </div>
      </div>
        <div class="container mx-auto px-4 text-center w-full text-slate-100 focus:text-white">
            <Link href={"https://codexcancerion.github.io"}>codexcancerion.github.io</Link> 
        </div>
    </div>
  );
};

export default Home;
