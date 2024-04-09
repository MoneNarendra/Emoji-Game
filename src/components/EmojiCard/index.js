import './index.css'

const EmojiCard = props => {
  const {eachEmoji, increaseScore} = props
  const {id, emojiName, emojiUrl} = eachEmoji
  const changeList = () => {
    increaseScore(id)
  }
  return (
    <li>
      <button
        className="each-emoji-container"
        type="button"
        onClick={changeList}
      >
        <img src={emojiUrl} alt={emojiName} className="each-emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
