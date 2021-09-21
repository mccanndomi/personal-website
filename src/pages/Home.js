import "./Home.css";
import { LeftBar } from "../components/LeftBar";
import Snake from "react-simple-snake";

// import { useState } from "react";

function Home() {
  // // Initiate state
  // const [tickTime, setTickTime] = useState(3000);
  // const [rows, setRows] = useState(20);
  // const [cols, setCols] = useState(20);
  // const [food, setFood] = useState({
  //   row: Math.floor(Math.random() * rows),
  //   col: Math.floor(Math.random() * cols),
  // });
  // const [head, setHead] = useState({
  //   row: 10,
  //   col: 10,
  // });
  // const [snake, setSnake] = useState({ head });
  // const [currentDirection, setCurrentDirection] = useState("right");
  // const [grid, setGrid] = useState(() => {
  //   const tmpGrid = [];

  //   for (let row = 0; row < rows; row++) {
  //     for (let col = 0; col < cols; col++) {
  //       const isFood = food.row === row && food.col === col;
  //       const isHead = snake.head.row === row && snake.head.col === col;
  //       tmpGrid.push({
  //         row,
  //         col,
  //         isFood,
  //         isHead,
  //       });
  //     }
  //   }

  //   return tmpGrid;
  // });

  // const gridItems = grid.map((grid) => {
  //   var style = "grid-item";
  //   if (grid.isFood) {
  //     style += " is-food";
  //   }
  //   if (grid.isHead) {
  //     style += " is-head";
  //   }
  //   return (
  //     <div
  //       key={grid.row.toString() + "-" + grid.col.toString()}
  //       className={style}
  //     ></div>
  //   );
  // });

  // // Set tick interval
  // window.fnInterval = setInterval(() => {
  //   gameTick();
  // }, tickTime);

  // // Tick function
  // function gameTick() {
  //   // console.log(printGrid());
  //   var newCol = head.row + 1;
  //   var newRow = head.col;

  //   setHead({
  //     row: newRow,
  //     col: newCol,
  //   });
  // }

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
          <div className="text-area">
            <p className="title">DOMINIC MCCANN</p>
            <p className="sub-text">Full Stack Developer</p>
            <p className="body-text">
              Hi, My name is Dominic McCann. I was born in Sheffield, UK and
              moved to New Zealand when I was 9. In late 2020 I graduated from
              Victoria University of Wellington with a Bachelor of Science
              majoring in Computer Science. Since then I have worked as a Junior
              Developer for a small wellington based software company called
              Eyemagnet. I spend a lot of my free time hanging out with friends,
              running and gaming but ultimately my passion is football. I like
              to spend the remainder of my time tinkering with small software
              projects. My aim is never to create a finished product but to
              learn something new.
            </p>
          </div>
          <div className="snake-arena">
            <Snake
              percentageWidth={100}
              snakeColor="#00000010"
              appleColor="#ff000027"
            />
          </div>
          {/* <div className="snake-arena">{gridItems}</div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
