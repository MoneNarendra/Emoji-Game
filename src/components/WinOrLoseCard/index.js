import './index.css'

const WinOrLoseCard = props => {
  const {score, resetMatch} = props
  const resultImg =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const result = score === 12 ? 'Won' : 'Lose'
  const playAgain = () => {
    resetMatch()
  }
  return (
    <div className="win-lose-Container">
      <div className="win-loss-img-con">
        <img src={resultImg} alt="win or lose" className="win-loss-Img" />
      </div>
      <div className="win-lose-text-container">
        <h1 className="win-loss-heading">You {result}</h1>
        <p className="win-loss-score-text">Best Score</p>
        <p className="win-loss-score">{score}/12</p>
        <button
          className="paly-agiain-button"
          type="button"
          onClick={playAgain}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
