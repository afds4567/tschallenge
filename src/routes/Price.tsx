import { useQuery } from "react-query";
import { useParams } from "react-router";
import styled from "styled-components";
import { fetchCoinHistory, fetchexchangeRate, fetchCoinTickers } from "../api";
import { PriceData } from "./Coin";

const Table = styled.table`
  width: 60%;
  margin: 0 auto;
`;

const Tbody = styled.tbody``;

const Tr = styled.tr``;

const Td = styled.td`
  text-align: center;
  width: 50%;
  padding: 10px;
  border: 1px solid black;
`;

function Price() {
  const { coinId } = useParams();
  const { isLoading: priceLoading, data: priceInfo } = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId!)
  );

  const { isLoading: ohlcvLoading, data: ohlcv } = useQuery(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId)
  );

  const { isLoading: exchangeRateLoading, data: exchangeRate } = useQuery(
    "rate",
    fetchexchangeRate
  );

  const comparedPreviousDay = (today?: number, yesterday?: number) => {
    if (today && yesterday) {
      const diff = today - yesterday;
      return `${Math.floor(diff * exchangeRate[0].basePrice)}원 (${(
        (diff / yesterday) *
        100
      ).toFixed(2)}%)`;
    }
  };

  const loading = priceLoading || ohlcvLoading || exchangeRateLoading;
  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <Table>
          <Tbody>
            <Tr>
              <Td>현재가격(원)</Td>
              <Td>
                {priceInfo?.quotes.USD.price
                  ? `${Math.floor(priceInfo?.quotes.USD.price * 1326)}원`
                  : ""}
              </Td>
            </Tr>
            
            <Tr>
              <Td>1시간전 대비</Td>
              <Td>{priceInfo?.quotes.USD.percent_change_1h}%</Td>
            </Tr>
            <Tr>
              <Td>12시간전 대비</Td>
              <Td>{priceInfo?.quotes.USD.percent_change_12h}%</Td>
            </Tr>
            <Tr>
              <Td>1달전 대비</Td>
              <Td>{priceInfo?.quotes.USD.percent_change_30d}%</Td>
            </Tr>
            <Tr>
              <Td>1년전 대비</Td>
              <Td>{priceInfo?.quotes.USD.percent_change_1y}%</Td>
            </Tr>
          </Tbody>
        </Table>
      )}
    </>
  );
}

export default Price;