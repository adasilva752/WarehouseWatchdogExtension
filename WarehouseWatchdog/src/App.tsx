import costcoLogo from './assets/costco128.png'
import './App.css'

function App() {
  const onclick = async () => {
    let [tab] = await chrome.tabs.query({active : true, currentWindow: true});
    console.log("Tab:", tab);
    chrome.scripting.executeScript({
      target:{tabId: tab.id!},
      func: () => {
        alert('This is Warehouse Watchdog, your personal receipt scanner!');
      }
    })
  }

  return (
    <>
      <div>
        <a href="https://costco.com" target="_blank">
          <img src={costcoLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Warehouse Watchdog</h1>
      <div className="card">
        <button onClick={() => onclick()}>
          Click Me!
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Costco logo to take you to the costco homepage.
      </p>
    </>
  )
}

export default App
