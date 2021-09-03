import "./Home.css";
import { LeftBar } from "../components/LeftBar";

function Home() {
  return (
    <div className="container">
      <LeftBar />
      <div className="main">
        <div className="center-space">
          <p className="title">DOMINIC MCCANN</p>
          <p className="sub-text">Full Stack Developer</p>
          <p className="body-text">
            Aenean ultricies consectetur quam eget blandit. Integer ullamcorper
            faucibus turpis, id aliquam odio egestas nec. Nunc eu lacus
            malesuada, posuere lectus et, tincidunt lectus. Donec ut rhoncus
            ligula, eu luctus sem. In quis orci egestas, vehicula risus id,
            convallis lacus. Curabitur faucibus, dolor faucibus elementum
            hendrerit, sem lorem tincidunt ligula, id viverra dui ipsum quis
            sapien. Donec nunc ante, bibendum in euismod sit amet, porta id
            libero. Quisque metus turpis, consequat sed faucibus quis, eleifend
            vel orci.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
