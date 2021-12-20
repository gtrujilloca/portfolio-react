import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './Header/Header'
import LeftContainer from './LeftContainer/LeftContainer'
import RightContainer from './RightContainer/RightContainer'

function App() {
  const [language, setLanguage] = useState('es');
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const languageData = async _ => {
      const requestJson = await fetch(`languages/${language}.json`);
      const texts = await requestJson.json();
      setJsonData(texts);
    }
    return languageData();
  }, [language, setLanguage, setJsonData])

  return (
    <>
      {
        jsonData === null
        ? <Loading />
        : <>
            <Header setLanguage={setLanguage}/>
            <main className="main">
              <LeftContainer profile={jsonData.profile} experiences={jsonData.experiences}/>
              <RightContainer projects={jsonData.projects} skills={jsonData.skills}/>
            </main>
          </>
      }
    </>
  )
}

const Loading = () => {
  return <h1>Loading....</h1>
}

export default App
