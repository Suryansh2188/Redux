import './App.css';
import {
  createBrowserRouter, RouterProvider,} from "react-router-dom";

import Header from './components/Header';
import ProductListing from './components/productListing';
import ProductDetails from './components/productDetails';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductListing/>
    },
    {
      path: "/product/:productId",
      element: <ProductDetails/>
    },
  ])
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    {/* <Routes>
      <Route path='/' exact Component={productListing}/>
      <Route path='/product/:productId' exact Component={productDetails}/>
      <Route >404 not found!</Route>
    </Routes> */}
    </>
  );
}

export default App;
