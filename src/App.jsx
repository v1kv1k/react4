import { useState } from 'react'
import DataFetcher from './components/DataFetcher'
import './App.css'

function App() {
  const [userId, setUserId] = useState(1)

  const handleUserChange = (newId) => {
    setUserId(newId)
  }

  return (
    <div className="app-container">
      <h1>React Data Fetching Demo</h1>
      
      <div className="user-selector">
        <p>Select User ID:</p>
        <div className="button-group">
          {[1, 2, 3, 4, 5].map(id => (
            <button 
              key={id} 
              onClick={() => handleUserChange(id)}
              className={userId === id ? 'active' : ''}
            >
              {id}
            </button>
          ))}
        </div>
      </div>
      
      <DataFetcher userId={userId} />
    </div>
  )
}

export default App 