import React, { useEffect, useState } from "react";
import './Game.css'
import { Link, useNavigate  } from "react-router-dom"

function Game() {
  let navigate = useNavigate();

  const [userValue, setUserValue] = useState("");
  const [stack, setStack] = useState(0);

  const changeUserValue = (e) => {
    let value = e.target.value;

    if (!/^\d*$/.test(value)) {
      value = "";
    }

    setUserValue(value);
  };

  const isItReal = (e) => {
    if (e === realNum) {
      alert("you win");
      navigate('/')
    } else if (realNum < e) {
      alert("High")
      return true
    } else {
      alert("Low")
      return false
    }
  }

  const enter = () => {
    const validValue = parseInt(userValue);
    if (!isNaN(validValue) && validValue >= 1 && validValue <= 1000) {
      isItReal(validValue);
    } else {
      alert("1以上1000以下の数を入力してください。");
    }
    if (stack < 9) {
      setStack(stack => stack + 1)
    } else {
      alert("you lose");
      navigate('/')
    }
  };

  const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

  const [realNum, setRealNum] = useState(0);
  console.log(realNum)
  useEffect(() => {
    setRealNum(randomNumberInRange(1, 1000))
  },[])

  return (
    <section className="Game-home">
      <article className="Game-home-center">
        <Link to={"/"} className="Game-to-home">
          <p>⌈　ーーーーーーーー　⌉</p>
          <p>🏠 [Return to Home] 🏠</p>
          <p>⌊　ーーーーーーーー　⌋</p>
        </Link>
        <div>
          <p>回数 : {stack}</p>
        </div>
        <div className="User-value">
          <p>答え : </p>
          <input type="text" value={userValue} onChange={changeUserValue} />
          <button onClick={enter}>Enter</button>
        </div>
      </article>
    </section>
  );
}

export default Game;
