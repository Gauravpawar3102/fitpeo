import React from 'react';
import Hero from './Hero';
import HeroGraph from './HeroGraph';
import HeroStats from './HeroStats';
import Navbar from './Navbar';
import api from '../api/apiData';
import { useState, useEffect } from 'react';

import Links from './Links';

function Main() {
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await api.get('/posts');
    setData(response.data);
    setLoading(false);
    return response.data;
  };

  useEffect(() => {
    const getData = async () => {
      const gettingData = await fetchData();
      if (gettingData) {
        setData(gettingData);
      }

      return gettingData;
    };
    getData();
  }, []);
  console.log(data);
  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="Main w-full p-2 h-full border-l-2 border-grey-200">
      <Navbar />
      <Hero />
      <HeroStats data={data} />
      <HeroGraph />
      <Links />
    </div>
  );
}

export default Main;
