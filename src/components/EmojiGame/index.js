import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, listScoreEmojis: [], gameOver: false}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  resetMatch = () => {
    const {score, topScore} = this.state
    const topScoresVal = score >= topScore ? score : topScore

    this.setState({
      score: 0,
      topScore: topScoresVal,
      listScoreEmojis: [],
      gameOver: false,
    })
  }

  increaseScore = id => {
    const {listScoreEmojis} = this.state
    const emojiNotInList = listScoreEmojis.every(ids => ids !== id)
    // const topScoresVal = score <= topScore ? score : topScore

    if (emojiNotInList === false || listScoreEmojis.length === 12) {
      this.setState(prevState => ({
        gameOver: !prevState.gameOver,
      }))
    } else if (emojiNotInList) {
      this.setState(prevVal => ({
        score: prevVal.score + 1,
        listScoreEmojis: [...prevVal.listScoreEmojis, id],
      }))
    }
  }

  render() {
    const {score, topScore, gameOver, listScoreEmojis} = this.state
    const resultEmojisList = this.shuffledEmojisList()

    let result

    if (gameOver || listScoreEmojis.length === 12) {
      result = <WinOrLoseCard score={score} resetMatch={this.resetMatch} />
    } else if (gameOver === false) {
      result = (
        <ul className="emojis-container-list">
          {resultEmojisList.map(eachEmoji => (
            <EmojiCard
              eachEmoji={eachEmoji}
              increaseScore={this.increaseScore}
              key={eachEmoji.id}
            />
          ))}
        </ul>
      )
    }

    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} gameOver={gameOver} />
        <div className="emojis-container">{result}</div>
      </div>
    )
  }
}

export default EmojiGame
