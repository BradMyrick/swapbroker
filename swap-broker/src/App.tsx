import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useMoralis, useWeb3Contract } from "react-moralis";
import terran721a from './contracts/terran721a.json';



function App() {
  const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract({
    abi: terran721a,
    contractAddress: "0xA5EB1b8bfe6dC9706Ea9D9AFaFE18615051C304F",
    functionName: "getBalance",
    params: {address:"0xFB9288e34e8516424c3b39DDeC4ca4A0ef4af3ce"}
  });

  useEffect(() => {
    console.log(data);
  }
  , [data]);
  
  const { authenticate, isAuthenticated, user } = useMoralis();

  if (!isAuthenticated) {
    return (
      <div className="Button">
        <button onClick={() => authenticate()}>Authenticate</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome {user?.get("username")} Ballance is {data}</h1>
    </div>
  );
}

export default App;
