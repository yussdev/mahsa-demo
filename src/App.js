import "./styles.css";
import ReactConfetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { useState } from "react";

export default function App() {
  const [run, setRun] = useState(false);
  const { height, width } = useWindowSize();
  return (
    <div dir="rtl" className="App">
      <h1>سلام مهسا بانوووووووووو 😍</h1>
      <h2>فسفری 💚</h2>
      <h2>خوشگل 👸🏻</h2>
      <h2>مهربون 🫂</h2>
      <h2>صدا قشنگ 😍</h2>

      <button onClick={() => setRun(true)}>بزن روی دکمه</button>
      <ReactConfetti
        run={run}
        numberOfPieces={180}
        // confettiSource={{
        //   w: 0,
        //   h: 0,
        //   x: width / 2,
        //   y: 150,
        // }}
        width={width}
        height={height}
      />
    </div>
  );
}
