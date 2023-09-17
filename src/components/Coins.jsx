import React, { useState } from 'react';
import CoinItem from './CoinItem';
import { Link } from 'react-router-dom';
import Coin from '../routes/Coin';
import './Coins.css';

const Coins = (props) => {
  const [searchItem, setSearchItem] = useState('');

  const filterCoins = props.coins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchItem.toLowerCase());
  });

  return (
    <div className="container">
      <input
        className="input"
        type="text"
        placeholder="Search a coin..."
        value={searchItem}
        onChange={(event) => setSearchItem(event.target.value)}
      />
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coins</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Mkt Caps</p>
        </div>
        {filterCoins?.map((coins) => {
          return (
            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
              <CoinItem coins={coins} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Coins;
