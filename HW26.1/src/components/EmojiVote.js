import React, { useState, useEffect } from 'react';

const EmojiVote = () => {
  const [emojis, setEmojis] = useState([
    { emoji: '😊', votes: 0 },
    { emoji: '😂', votes: 0 },
    { emoji: '😢', votes: 0 },
    { emoji: '😡', votes: 0 }
  ]);

  useEffect(() => {
    const savedVotes = JSON.parse(localStorage.getItem('emojiVotes'));
    if (savedVotes) {
      setEmojis(savedVotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('emojiVotes', JSON.stringify(emojis));
  }, [emojis]);

  const handleVote = (index) => {
    const newEmojis = [...emojis];
    newEmojis[index].votes += 1;
    setEmojis(newEmojis);
  };

  const handleShowResults = () => {
    const maxVotes = Math.max(...emojis.map(emoji => emoji.votes));

    if (maxVotes === 0) {
      alert('No votes yet!');
      return;
    }

    const winners = emojis.filter(emoji => emoji.votes === maxVotes);

    if (winners.length === 1) {
      alert(`The winner is: ${winners[0].emoji} with ${winners[0].votes} votes!`);
    } else {
      const winnerEmojis = winners.map(winner => winner.emoji).join(' ');
      alert(`It's a tie! The winners are: ${winnerEmojis} with ${maxVotes} votes each!`);
    }
  };

  const handleClearResults = () => {
    const resetEmojis = emojis.map(emoji => ({ ...emoji, votes: 0 }));
    setEmojis(resetEmojis);
    localStorage.removeItem('emojiVotes');
  };

  return (
    <div>
      <h1>Vote for your favorite emoji!</h1>
      <div>
        {emojis.map((item, index) => (
          <button key={index} onClick={() => handleVote(index)}>
            {item.emoji} ({item.votes})
          </button>
        ))}
      </div>
      <button onClick={handleShowResults}>Show Results</button>
      <button onClick={handleClearResults}>Clear Results</button>
    </div>
  );
};

export default EmojiVote;
