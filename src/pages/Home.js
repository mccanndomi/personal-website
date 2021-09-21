import "./Home.css";
import { LeftBar } from "../components/LeftBar";
import { useState } from "react";

function Home() {
  // Initiate state
  const [tickTime, setTickTime] = useState(3000);
  const [rows, setRows] = useState(20);
  const [cols, setCols] = useState(20);
  const [food, setFood] = useState({
    row: Math.floor(Math.random() * rows),
    col: Math.floor(Math.random() * cols),
  });
  const [head, setHead] = useState({
    row: 10,
    col: 10,
  });
  const [snake, setSnake] = useState({ head });
  const [currentDirection, setCurrentDirection] = useState("right");
  const [grid, setGrid] = useState(() => {
    const tmpGrid = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const isFood = food.row === row && food.col === col;
        const isHead = snake.head.row === row && snake.head.col === col;
        tmpGrid.push({
          row,
          col,
          isFood,
          isHead,
        });
      }
    }

    return tmpGrid;
  });

  const gridItems = grid.map((grid) => {
    var style = "grid-item";
    if (grid.isFood) {
      style += " is-food";
    }
    if (grid.isHead) {
      style += " is-head";
    }
    return (
      <div
        key={grid.row.toString() + "-" + grid.col.toString()}
        className={style}
      ></div>
    );
  });

  // Set tick interval
  window.fnInterval = setInterval(() => {
    gameTick();
  }, tickTime);

  // Tick function
  function gameTick() {
    // console.log(printGrid());
    var newCol = head.row + 1;
    var newRow = head.col;

    setHead({
      row: newRow,
      col: newCol,
    });
  }

  // const printGrid = () => {
  //   var string = "";
  //   for (let row = 0; row < rows; row++) {
  //     for (let col = 0; col < cols; col++) {
  //       const isFood = food.row === row && food.col === col;
  //       const isHead = snake.head.row === row && snake.head.col === col;
  //       var tempUpdate = "_";

  //       if (isHead) {
  //         tempUpdate = "o";
  //       }
  //       if (isFood) {
  //         tempUpdate = "X";
  //       }

  //       string += tempUpdate;
  //     }
  //     string += "\n";
  //   }
  //   return string;
  // };

  return (
    <div className="container">
      <LeftBar />
      <div className="main">
        <div className="center-space">
          {/* <div className="text-area">
            <p className="title">DOMINIC MCCANN</p>
            <p className="sub-text">Full Stack Developer</p>
            <p className="body-text">
              Aenean ultricies consectetur quam eget blandit. Integer
              ullamcorper faucibus turpis, id aliquam odio egestas nec. Nunc eu
              lacus malesuada, posuere lectus et, tincidunt lectus. Donec ut
              rhoncus ligula, eu luctus sem. In quis orci egestas, vehicula
              risus id, convallis lacus. Curabitur faucibus, dolor faucibus
              elementum hendrerit, sem lorem tincidunt ligula, id viverra dui
              ipsum quis sapien. Donec nunc ante, bibendum in euismod sit amet,
              porta id libero. Quisque metus turpis, consequat sed faucibus
              quis, eleifend vel orci.
            </p>
          </div> */}
          <div className="snake-arena">{gridItems}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
