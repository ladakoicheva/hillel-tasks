import { useEffect, useState } from "react";
import "./App.css";
import SmileList from "./Components/SmileList";

function App() {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [winner, setWinner] = useState(null);

  const handleToggle = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/data.json");
        const result = await response.json();

        setData(result);
      } catch (error) {
        console.error("Помилка завантаження даних:", error);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    console.log("Стан 'data' оновився:", data);
    if (data.length === 0) {
      setWinner(null);
      return;
    }

    let maxVotes = -1;
    let currentWinner = null;

    data.forEach((item) => {
      if (item.counter > maxVotes) {
        maxVotes = item.counter;
        currentWinner = item;
      }
    });

    if (maxVotes > 0) {
      setWinner(currentWinner);
    } else {
      setWinner(null);
    }
  }, [data]);

  function handleVote(clickedId) {
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.id !== clickedId) {
          return item;
        }
        return {
          ...item,
          counter: item.counter + 1,
        };
      });
    });
  }

  return (
    <div className="app-container">
      <h1>Голосування за найкращий смайлик</h1>

      <SmileList onVote={handleVote} list={data} />

      <button onClick={handleToggle} className="button-primary" type="text">
        {visible ? "Hide" : "Show Results"}
      </button>
      <div>{visible && <h1>Winner:</h1>}</div>
      <div>
        {winner && visible && (
          <div className="winner-item">
            <span className="winner-item-icon">{winner.smile}</span>
            <span className="winner-item-content">
              {" "}
              {winner.content} - {winner.counter} votes
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
