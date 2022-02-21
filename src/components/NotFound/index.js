// Write your code here
import Header from '../Header'

import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="not-found-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="not-image"
      />
      <h1 className="not-head">Lost Your Way?</h1>
      <p className="not-dec">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </>
)

export default NotFound
