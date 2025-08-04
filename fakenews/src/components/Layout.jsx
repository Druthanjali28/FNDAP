'use client';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Section from './Section';
import Recommendations from './Recommendations';
import NewsSection from './NewsSection';
import ImageCont from './ImageCont';
import axios from 'axios';
import News from './News';
import Tags from './Tags';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = () => {
  const [news, setNews] = useState();
  const [sentiments, setSentiments] = useState();
  const [recommended, setRecommended] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedNews, setSelectedNews] = useState(null);

  // useEffect(() => {
  //   const data = axios
  //     .post(
  //       'https://eventregistry.org/api/v1/article/getArticles',
  //       {
  //         apiKey: '29f8e3c1-573f-4fe8-94ef-593b9dafb04a',
  //         action: 'getArticles',
  //         keyword: '',
  //         sourceLocationUri: [
  //           'http://en.wikipedia.org/wiki/United_States',
  //           'http://en.wikipedia.org/wiki/Canada',
  //           'http://en.wikipedia.org/wiki/United_Kingdom',
  //         ],
  //         ignoreSourceGroupUri: 'paywall/paywalled_sources',
  //         articlesPage: 1,
  //         articlesCount: 50,
  //         articlesSortBy: 'date',
  //         articlesSortByAsc: false,
  //         dataType: ['news', 'pr'],
  //         forceMaxDataTimeWindow: 31,
  //         resultType: 'articles',
  //       },
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       if (res?.data?.articles) {
  //         setNews(res.data.articles.results);
  //       }
  //     });
  //   console.log(data);
  // }, []);

  useEffect(() => {
    axios
      .post('http://127.0.0.1:5000/getArticles')
      .then((res) => {
        setNews(res?.data?.articles);
        setSentiments(res?.data?.sentiments);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  useEffect(() => console.log('news:', news), [news]);

  useEffect(() => {
    axios
      .post('http://127.0.0.1:5000/recommended')
      .then((res) => {
        setRecommended(res?.data?.recommended);
        setSelectedNews(res?.data?.recommended?.[0]);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <div className="layoutGrid bg-[#EBF2FB] p-4 h-[100vh]">
        <div className="w-full overflow-hidden border-[#EBF2FB]  p-4 ">
          <Header />
          <div className="flex flex-col gap-8 py-8">
            <div className="flex gap-4">
              {recommended && <Section selectedNews={selectedNews} />}
              {/* <ImageCont /> */}
            </div>
            {/* <NewsSection /> */}
          </div>
        </div>

        <AnimatePresence>
          <div className="flex  rounded-2xl bg-white">
            {recommended && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <Recommendations
                  recommended={recommended}
                  onSelect={setSelectedNews}
                />
              </motion.div>
            )}
          </div>
        </AnimatePresence>
      </div>
      <div>
        <Tags
          setNews={setNews}
          setSentiments={setSentiments}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
        />
        <News news={news} sentiments={sentiments} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Layout;
