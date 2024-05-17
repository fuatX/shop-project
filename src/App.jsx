import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/NavbarFiles/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Container from "./Components/Container";
import Row from "./Components/Row";
import NewProducts from "./pages/NewProducts";
import BestSellingDiscounted from "./pages/dropdownpages/BestSellingDiscounted";
import DailyDiscounted from "./pages/dropdownpages/DailyDiscounted";
import NewlyDiscounted from "./pages/dropdownpages/NewlyDiscounted";
import CategoryPage from "./Components/Categorys/CategoryPage";
import SingleProductPage from "./Components/Categorys/SingleProductPage";
function App() {
  return (
    <>
      <Navbar />
      <Container className={`my-4`}>
        <Row>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new-products" element={<NewProducts />} />
            <Route path="/best-selling" element={<BestSellingDiscounted />} />
            <Route path="/daily-discount" element={<DailyDiscounted />} />
            <Route path="/newly-discount" element={<NewlyDiscounted />} />
            <Route
              path="/category-page/:categoryName"
              element={<CategoryPage />}
            />
            <Route
              path="/single-product-page/:id"
              element={<SingleProductPage />}
            />
          </Routes>
        </Row>
      </Container>
    </>
  );
}

export default App;
