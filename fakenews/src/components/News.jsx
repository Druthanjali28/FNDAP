import React from 'react';
import NewsCard from './NewsCard';
import Skeleton from './Skeleton';

// const sampleNews = {
//   uri: '8679028739',
//   lang: 'eng',
//   isDuplicate: false,
//   date: '2025-05-15',
//   time: '02:14:32',
//   dateTime: '2025-05-15T02:14:32Z',
//   dateTimePub: '2025-05-15T02:11:18Z',
//   dataType: 'news',
//   sim: 0.7490196228027344,
//   url: 'http://theconversation.com/ferocity-fitness-and-fast-bowling-how-virat-kohli-revolutionised-indian-cricket-256560',
//   title:
//     'Ferocity, fitness and fast bowling: how Virat Kohli revolutionised Indian cricket',
//   body: 'Virat Kohli announced his retirement from Test cricket on Monday.\n\nWhile his Instagram message just said this was the "right time", his poor recent Test form, mental fatigue and desire to spend more time with his family, charity foundation and expanding business empire have been suggested as other influential factors.\n\nDuring his 14-year Test career "King Kohli" has been the backbone of the Indian batting line-up, and his absence is a huge blow as the Indians prepare to tour England next month.\n\nThe megastar scored 9,230 runs in 123 Tests at an average of 46.85, including 30 centuries.\n\nThese numbers put him in the top five Indian test batsmen of all time, but his legacy extends far beyond his batting achievements.\n\nKohli, 36, quit Twenty20 Internationals last year (after India won its second world title). He may continue to play one-day internationals.\n\nRising to the top of Test cricket\n\nKohli has been the greatest Indian batsman of his generation.\n\nHe made his Test debut in 2011 against the West Indies and played his final match against Australia in January.\n\nHe scored centuries against every country he played against, with more than half of these coming overseas.\n\nHis seven Test centuries in Australia is the second most by an overseas batsman.\n\nHe was at his peak between 2014 and 2019, when he averaged more than 60 in Test cricket and became one of the "fab four" (the world\'s best Test batsmen) alongside Steve Smith, Kane Williamson and Joe Root.\n\nRead more: Is Steve Smith set to become the best? What data says about Test cricket\'s elite 10,000+ run club\n\nThis period also included six double-hundreds in 18 months, and 13 months as the number one ranked Test batsman in the world.\n\nKohli the leader\n\nKohli is India\'s greatest ever Test captain.\n\nHis tenure from 2014 to 2022 was a golden age for Indian Test cricket.\n\nIndia won 40 of 68 Tests (59%) in this period and did not lose a Test series at home. India was the number one ranked Test team in the world from 2016-20 and won its first Test series in Australia in 2018-19.\n\nThese statistics make Kohli one of the most successful Test captains of all time.\n\nBeyond these numbers, he was a charismatic and aggressive captain who redefined India\'s approach to Test cricket by bringing a more competitive edge to the team.\n\nHe drove higher expectations around fitness, training intensity and fast bowling that continue to shape Indian cricket.\n\nMandatory fitness testing and improved dieting and recovery practices, which redefined the team\'s standards, are attributed to Kohli\'s leadership.\n\nSimilarly, Indian success was strongly contributed to by Kohli encouraging the development of a world-class pace bowling attack, which marked a significant shift from the spin-heavy approach of Indian cricket.\n\nControversies\n\nWhile Kohli\'s energy, passion and intensity contributed to his success as batsman and captain, they also led to numerous confrontations with opposition players, which some believed to be disrespectful and arrogant.\n\nHis intense celebrations and assertive body language also drew criticism from conservative cricketing audiences.\n\nMany of these controversies have occurred in Australia, where Kohli enjoyed a love-hate relationship with Australian players and crowds.\n\nExamples include flipping the bird to the crowd, making sandpaper gestures (in reference to the 2018 Australian ball tampering scandal, also known as Sandpapergate) and shoulder-barging young Australian batsman Sam Konstas.\n\nWhat will his Test legacy be?\n\nFor more than a decade, Kohli has been the heartbeat of the Indian Test team, and his retirement marks the end of an era.\n\nHe reshaped the mindset of Indian cricket and cultivated a faster, fitter, fiercer, more successful team.\n\nKohli was also one of the greatest ambassadors of Test cricket, and has played a significant role in ensuring the game remains relevant in an era increasingly dominated by T20 cricket.\n\nHe made Test cricket aspirational again because he wanted it to thrive. He knew India needed to dominate the hardest format to be respected.\n\nHis social media reach (272 million followers on Instagram and 67.8 million on X) is more than Tiger Woods, LeBron James and Tom Brady combined, and was even referred to by LA2028 Olympics organisers when they announced cricket\'s entry into the games.\n\nIn recent days, Kohli has been described as "a modern-day giant", a "provocateur in chief", and "his generation\'s most profound figure".\n\nLove him or hate him, he elevated the spectacle of Test cricket. His electric energy brought the best out of India and its opponents and made him impossible to ignore when batting or fielding.\n\nAs respected cricket writer Peter Lalor noted recently:\n\nNobody is irreplaceable, but nobody can replace Virat.',
//   source: {
//     uri: 'theconversation.com',
//     dataType: 'news',
//     title: 'The Conversation',
//   },
//   authors: [],
//   image:
//     'https://images.theconversation.com/files/667484/original/file-20250513-68-jn8lpc.jpg?ixlib=rb-4.1.0&rect=0%2C14%2C2466%2C1233&q=45&auto=format&w=1356&h=668&fit=crop',
//   eventUri: 'eng-10598862',
//   sentiment: 0.3411764705882352,
//   wgt: 484971272,
//   relevance: 1,
// };

const News = ({ news, sentiments, isLoading }) => {
  return (
    <div className="grid grid-cols-4 gap-6 p-16">
      {!isLoading ? (
        news?.map((item, index) => (
          <NewsCard {...item} sentiment={sentiments[index]} key={index} />
        ))
      ) : (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      )}
    </div>
  );
};

export default News;
