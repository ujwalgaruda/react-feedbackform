
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {showThanksMsg: false}

  thanksMsg = () => this.setState({showThanksMsg: true})

  renderFeedbackCard = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-card">
        <h1 className="header">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-wrapper">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id}>
              <button className="btn" type="button" onClick={this.thanksMsg}>
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji-icon"
                />
                <br />
                <span className="emoji-title">{eachEmoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThanksCard = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="feedback-card thanks-card">
        <img className="love-icon" alt="love emoji" src={loveEmojiUrl} />
        <h1 className="thanks-header">Thank You</h1>
        <p className="desc">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {showThanksMsg} = this.state

    return (
      <div className="bg-container">
        {showThanksMsg ? this.renderThanksCard() : this.renderFeedbackCard()}
        <div className='img-container'>
            <img src='./images/grey-img.svg' className='feedback-img' alt="feedback"/>
        </div>
      </div>
    )
  }
}

export default Feedback
