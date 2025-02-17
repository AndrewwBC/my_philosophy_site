import { Link } from "react-router-dom";
import { AthensImg, Main, TextDiv } from "./styles";

import athensImg from "../../assets/images/athens.jpg";
import Header from "../../Layout/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <TextDiv>
          <h1 className="title">Estudos em Filosofia</h1>

          <Link to="/feed">
            <button>Acessar</button>
          </Link>
        </TextDiv>
        <div>
          <AthensImg src={athensImg} />
        </div>
      </Main>
    </>
  );
};

export default Home;
