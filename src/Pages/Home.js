import logo2 from "../assets/budget-buddy-logo-2.png";
import Gif from "../Components/Gif";

export default function Home() {
  return (
    <div>
      <img width="200px" style={{ resize: "0px" }} src={logo2} alt="logo2" />
      <p>Your digital wealth manager</p>
      <Gif link="https://giphy.com/embed/S5uMJDmtnATLbjjw3h" />
    </div>
  );
}
