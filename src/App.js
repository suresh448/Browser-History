import {Component} from 'react'

import SearchItems from './components/SearchItems'

import './App.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedIn.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'hashNode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashNode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactJs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackOverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]
class App extends Component {
  state = {historyList: initialHistoryList, searchInput: '', yesHistory: true}

  onChangeSearch = event => {
    let {searchInput} = this.state
    const {yesHistory, historyList} = this.state

    searchInput = event.target.value
    const list = initialHistoryList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    // console.log(list)
    if (list.length === 0) {
      //  console.log('undefined')
      const changeBoolean = false
      this.setState({historyList: list, searchInput, yesHistory: changeBoolean})
    } else {
      this.setState({historyList: list, searchInput, yesHistory: true})
    }
  }

  onDeleteSearch = id => {
    const {historyList, yesHistory} = this.state
    const list = historyList.filter(each => each.id !== id)
    if (list.length === 0) {
      console.log('undefined')
      const changeBoolean = !yesHistory
      this.setState({historyList: list, yesHistory: changeBoolean})
    } else {
      this.setState({historyList: list})
    }
  }

  render() {
    const {historyList, yesHistory} = this.state

    return (
      <div className="bg-container">
        <div className="search-bar-bg">
          <img
            className="app-logo-image"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-container">
            <label className="label" htmlFor="inputElement">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png "
                alt="search"
              />
            </label>
            <div className="search-element-container">
              <input
                className="input-search"
                type="search"
                placeholder="search"
                id="inputElement"
                onChange={this.onChangeSearch}
              />
            </div>
          </div>
        </div>
        <ul className="search-result-container">
          {yesHistory ? (
            historyList.map(eachHistory => (
              <SearchItems
                key={eachHistory.id}
                listItem={eachHistory}
                deleteSearch={this.onDeleteSearch}
              />
            ))
          ) : (
            <p>There is no history to show</p>
          )}
        </ul>
      </div>
    )
  }
}
export default App
