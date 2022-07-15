import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { IRouterProps } from "../Router";

const Container = styled.div`
  padding: 0px 20px;
  max-width:480px;
  margin:0 auto;
`;

const Header = styled.header`
  height:10vh;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: black;
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: flex;
    align-items:center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size:48px;
  color:${(props) => props.theme.accentColor};  
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width:35px;
  height35px;
  margin-right:10px;  
`;

const ToggleBtn = styled.button`
  position: fixed;
  right: 10px;
  top: 10px;
  width: 50px;
  height: 50px;
  font-size: 20px;
  text-align: center;
  border-radius: 50%;
  background-color: #b19696;
  text-color: black;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins({ isDark, setIsDark }: IRouterProps) {
   const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
  return (
    <Container>
      <Header>
        <Title>코인</Title>
        <ToggleBtn onClick={setIsDark}>{isDark ? "On" : "Off"}</ToggleBtn>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
      <CoinsList>
        {data?.slice(0,100).map((coin) => (
          <Coin key={coin.id}>
            <Link to={`/${coin.id}`} state={{ name: coin.name }}>
            <Img
              src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
              />
              {coin.name} &rarr;
            </Link>
          </Coin>
        ))}
        </CoinsList>
          )}
    </Container>
  )
}
export default Coins