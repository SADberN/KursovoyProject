import { Header, Categories } from './components';
import { Home, Cart, Top, Pants, Shoes, Costumes, Jackets, Product } from './pages/index.js';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setProducts } from './redux/actions/product';
import { setColors } from './redux/actions/colors';
import { setSizes } from './redux/actions/sizes';
import { setShosizes } from './redux/actions/shosizes';
import { Slider } from './components';
import { SimpleAdaptiveSlider } from './components/Slider.js';
import { setCart } from './redux/actions/cart';
// function App() {
// const [banners, setBanner] = React.useState([]);
// React.useEffect(() => {
//   fetch('http://localhost:3000/db.json')
//     .then((resp) => resp.json())
//     .then((json) => {
//       setBanner(json.banners);
//     });
// }, []);

function App() {
  const dispatch = useDispatch();
  const item = [];
  React.useEffect(() => {});
  document.addEventListener('DOMContentLoaded', function () {
    // инициализация слайдера
    console.log('kek');
    new SimpleAdaptiveSlider('.slider', {
      loop: true,
      autoplay: true,
      interval: 5000,
      swipe: true,
    });
  });
  React.useEffect(() => {
    axios.get('http://localhost:5000/api/item/').then(({ data }) => {
      data.map((prod) => item.push(prod));
      dispatch(setProducts(data));
    });
  }, []);
  React.useEffect(() => {
    axios.get('http://localhost:5000/api/color/').then(({ data }) => {
      dispatch(setColors(data));
    });
  }, []);
  React.useEffect(() => {
    axios.get('http://localhost:5000/api/clothsize/').then(({ data }) => {
      dispatch(setSizes(data));
    });
  }, []);
  React.useEffect(() => {
    axios.get('http://localhost:5000/api/shoessize/').then(({ data }) => {
      dispatch(setShosizes(data));
    });
  }, []);
  React.useEffect(() => {
    axios.get('http://localhost:5000/api/basketitem/').then(({ data }) => {
      dispatch(setCart(data));
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />

      <div className="cont">
        <div className="container">
          <div className="content__top">
            <Categories items={['Костюмы', 'Пиджаки', 'Брюки', 'Рубашки', 'Обувь']}></Categories>
          </div>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/costumes" element={<Costumes />} />
            <Route path="/costumes/:id" element={<Product />} />
            <Route exact path="/jackets" element={<Jackets />} />
            <Route path="/jackets/:id" element={<Product />} />
            <Route exact path="/pants" element={<Pants />} />
            <Route path="/pants/:id" element={<Product />} />
            <Route exact path="/top" element={<Top />} />
            <Route path="/top/:id" element={<Product />} />
            <Route exact path="/shoes" element={<Shoes />} />
            <Route path="/shoes/:id" element={<Product />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
