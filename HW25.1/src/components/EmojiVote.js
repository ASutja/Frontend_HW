import React, { Component } from 'react';

class EmojiVote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emojis: [
        { emoji: '😊', votes: 0 },
        { emoji: '😂', votes: 0 },
        { emoji: '😢', votes: 0 },
        { emoji: '😡', votes: 0 }
      ]
    };
  }

  componentDidMount() {
    const savedVotes = JSON.parse(localStorage.getItem('emojiVotes'));
    if (savedVotes) {
      this.setState({ emojis: savedVotes });
    }
  }

  handleVote = (index) => {
    const newEmojis = [...this.state.emojis];
    newEmojis[index].votes += 1;
    this.setState({ emojis: newEmojis });
    localStorage.setItem('emojiVotes', JSON.stringify(newEmojis));
  }

  showResults = () => {
    const { emojis } = this.state;
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
      alert(`The winners are: ${winnerEmojis} with ${maxVotes} votes each!`);
    }
  }

  clearResults = () => {
    const resetEmojis = this.state.emojis.map(emoji => ({ ...emoji, votes: 0 }));
    this.setState({ emojis: resetEmojis });
    localStorage.removeItem('emojiVotes');
  }

  render() {
    return (
      <div>
        <h1>Vote for your favorite emoji!</h1>
        <div>
          {this.state.emojis.map((item, index) => (
            <button key={index} onClick={() => this.handleVote(index)}>
              {item.emoji} ({item.votes})
            </button>
          ))}
        </div>
        <button onClick={this.showResults}>Show Results</button>
        <button onClick={this.clearResults}>Clear Results</button>
      </div>
    );
  }
}

export default EmojiVote;
