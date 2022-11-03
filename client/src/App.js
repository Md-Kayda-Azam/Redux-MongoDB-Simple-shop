import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product/Product";
import Shop from "./pages/Shop/Shop";
import './App.css';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProduct } from "./redux/product/action";
import SingleProductPayment from "./pages/Product/SingleProductPayment";
import WomensFashion from "./pages/category/womensFashion/WomensFashion";
import MansFashion from "./pages/category/mansFashion/MansFashion";
import Kids from "./pages/category/kids/Kids";
import Electronics from "./pages/category/electronics/Electronics";
import Beauty from "./pages/category/beauty/Beauty";
import Health from "./pages/category/health/Health";
import AllCategory from "./pages/category/allCategory/AllCategory";
import BeautyFDB  from "./pages/category/allCategoryForm/beauty/BeautyFDB";
import ElectronicsFDB  from "./pages/category/allCategoryForm/electronics/ElectronicsFDB";
import HealthFDB from "./pages/category/allCategoryForm/health/HealthFDB";
import KidsFDB from "./pages/category/allCategoryForm/kids/KidsFDB";
import MansFashionFDB from "./pages/category/allCategoryForm/mansfashion/MansFashionFDB";
import WomensFashionFDB from "./pages/category/allCategoryForm/womens fashion/WomensFashionFDB";
import { getAllWomensFashionProducts } from "./redux/womensFashion/action";
import WomensFashionSinglePage from "./pages/category/allCategoryForm/womens fashion/WomensFashionSinglePage";
import { getAllHealthProducts,  } from "./redux/health/action";
import { getAllCategories } from "./redux/category/action";
import AllCategoryItems from "./pages/category/allCategory/AllCategoryItems";
import { getAllABeauties } from "./redux/beauty/action";
import { getAlMansFashionProducts } from "./redux/mansFashion/action";
import { getAllKidProducts } from "./redux/kid/action";
import { getAllElectronicProducts } from "./redux/electronic/action";
import AllTags from "./pages/tags/AllTags";
import { getAllTags } from "./redux/tags/action";
import SinglePageBrand from "./pages/brand/SinglePageBrand";
import AllBrand from "./pages/brand/AllBrand";
import { getAllBrands } from "./redux/brand/action";
import Categorya from "./pages/accordion/category/Categorya";





function App() {

/// products
  const dispatch = useDispatch()


/// WomensFashion products
  useEffect(() => {

    dispatch(getAllProduct())
    dispatch(getAllWomensFashionProducts())
    dispatch(getAllHealthProducts())
    dispatch(getAllCategories())
    dispatch(getAllABeauties())
    dispatch(getAlMansFashionProducts())
    dispatch(getAllKidProducts())
    dispatch(getAllElectronicProducts())
    dispatch(getAllTags())
    dispatch(getAllBrands())


  },[dispatch]);



  return (
    <>

      <Routes>
        <Route path="/" element={ <Shop /> } />
        <Route path="/admin/product" element={ <Product /> } />
        <Route path="/admin/product/single" element={ <SingleProductPayment /> } />
        <Route path="/admin/product/womensFashion" element={ <WomensFashion /> } />
        <Route path="/admin/product/mensFashion" element={ <MansFashion /> } />
        <Route path="/admin/product/kids" element={ <Kids /> } />
        <Route path="/admin/product/health" element={ <Health /> } />
        <Route path="/admin/product/electronis" element={ <Electronics /> } />
        <Route path="/admin/product/beauty" element={ <Beauty /> } />
        <Route path="/admin/product/allCategory" element={ <AllCategory /> } />
        <Route path="/admin/product/allTags" element={ <AllTags /> } />
        <Route path="/admin/product/allCategory/items" element={ <AllCategoryItems /> } />
        <Route path="/admin/product/allCategory/beauty" element={ <BeautyFDB /> } />
        <Route path="/admin/product/allCategory/electronics" element={ <ElectronicsFDB /> } />
        <Route path="/admin/product/allCategory/health" element={ <HealthFDB /> } />
        <Route path="/admin/product/allCategory/kids" element={ <KidsFDB /> } />
        <Route path="/admin/product/allCategory/mansfashion" element={ <MansFashionFDB /> } />
        <Route path="/admin/product/allCategory/womensfashion" element={ <WomensFashionFDB /> } />
        <Route path="/admin/product/allCategory/womensfashion/singlePage" element={ <WomensFashionSinglePage/> } />
        <Route path="/admin/product/brand/singlePage" element={ <SinglePageBrand/> } />
        <Route path="/admin/product/allBrands" element={ <AllBrand/> } />
        <Route path="/admin/product/categorya" element={ <Categorya/> } />
      </Routes>

    </>
  );
}

export default App;
