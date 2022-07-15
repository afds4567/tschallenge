import { BrowserRouter,Route,Routes } from "react-router-dom";
import Chart from "./routes/Chart";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Price from "./routes/Price";


export interface IRouterProps {
  isDark: boolean;
  setIsDark: (a: any) => void;
}

function Router({ isDark, setIsDark }: IRouterProps) {
	return (
		<Routes>
			<Route path="/" element={<Coins setIsDark={setIsDark} isDark={isDark}/>}></Route> 
			<Route path="/:coinId" element={<Coin />}>
				<Route path="price" element={<Price />} />
				<Route path="chart" element={<Chart setIsDark={setIsDark} isDark={isDark}/>} />
			</Route> 
		</Routes>
		)
};

export default Router;