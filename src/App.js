import { Route, Routes } from "react-router-dom";

import Auth from "./routes/auth/auth";
import Checkout from "./routes/checkout/checkout";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation";
import Shop from "./routes/shop/shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="alisveris" element={<Shop />} />
        <Route path="kullanici-dogrulama" element={<Auth />} />
        <Route path="sepetim" element={<Checkout />} />

      </Route>
    </Routes>
  );
};

export default App;
