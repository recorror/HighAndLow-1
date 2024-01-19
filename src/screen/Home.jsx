import React from "react";
import './Home.css'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  return (
    <section className="Home">
      <article className="Home-header">
        <div className="Title">
          <p>ようこそ </p>
          <p> "High & Low" </p>
          <p> ゲームに</p>
        </div>
        <button className="Home-button" onClick={ () => navigate('/Game') }>
          <p>GameStart</p>
        </button>
        <p>チャンスは10回</p>
      </article>
    </section>
  )
}

export default Home;