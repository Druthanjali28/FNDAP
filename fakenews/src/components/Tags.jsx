'use client';
import React, { useState, useEffect } from 'react';
import { Tags } from '@/constants';
import { BiSearch } from 'react-icons/bi';
import axios from 'axios';

const TagsComponent = ({ setNews, setSentiments, isLoading, setIsLoading }) => {
  const [searchText, setSearchText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('text', searchText);
    setIsLoading(true);
    axios
      .post(
        'http://127.0.0.1:5000/search',
        { searchText: searchText },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        setNews(res?.data?.articles);
        setSentiments(res?.data?.sentiments);
        setIsLoading(false);
      })
      .catch((error) => console.log('Error : ', error));
  };
  return (
    <div className="flex justify-between pl-16 pt-8 pr-16">
      <div className="flex gap-4">
        {Tags.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-2  font-semibold rounded-2xl px-4 py-2 bg-[#F1F7FC]"
          >
            <h1>{item.label}</h1>
            <h1>{item.icon}</h1>
          </div>
        ))}
      </div>
      <form
        className="flex gap-3  items-center justify-center border-[1px]  rounded-2xl font-semibold border-[#d2ebff]"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          name=""
          id=""
          placeholder="Search.."
          className="outline-none pl-4"
        />
        <button
          type="submit"
          className="bg-gray-300 h-full rounded-r-2xl px-4 cursor-pointer"
        >
          <BiSearch size={18} />
        </button>
      </form>
    </div>
  );
};

export default TagsComponent;
