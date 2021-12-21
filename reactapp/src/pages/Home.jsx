import React from 'react';
import { Categories, SortPopup, Comps, Slider } from '../components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './styli.css';
import m1 from '../assets/img/m1.jpg';
import m2 from '../assets/img/m2.jpg';
import r1 from '../assets/img/r1.jpg';
import r2 from '../assets/img/r2.jpg';
import s1 from '../assets/img/s1.jpg';
import s2 from '../assets/img/s2.jpg';
import p1 from '../assets/img/p1.jpg';
import p2 from '../assets/img/p2.jpg';
import o1 from '../assets/img/o1.jpg';
import o2 from '../assets/img/o2.jpg';
import man from '../assets/img/man.jpg';

function Home() {
  const items = useSelector(({ products }) => products.items);

  return (
    <div className="site  js-site">
      <h2>Сделай свой выбор</h2>
      <div className="b-main-grid">
        <div className="outer">
          <div className="outer-inner">
            <div className="b-main-grid__wrap-common">
              <div className="row">
                <div className="col sm-12 md-12 lg-8">
                  <div className="b-main-grid__container">
                    <div className="row">
                      <div className="col sm-12 md-6">
                        <div className="b-main-grid__item m-grid-top" id="bx_1373509569_240">
                          <Link to="/costumes">
                            <img
                              className="b-main-grid__image-second js-lazy-img js-ready lazy-loaded"
                              alt="Костюмы"
                              role="presentation"
                              src={s2}
                            />
                            <img
                              className="b-main-grid__image-first js-lazy-img js-ready lazy-loaded"
                              alt="Костюмы"
                              role="presentation"
                              src={s1}
                            />
                            <p className="theme-white">Костюмы</p>
                          </Link>
                        </div>
                      </div>
                      <div className="col sm-12 md-6">
                        <div className="b-main-grid__item m-grid-top" id="bx_1373509569_242">
                          <Link to="/notfound">
                            <img
                              className="b-main-grid__image-second js-lazy-img js-ready lazy-loaded"
                              alt="Верхняя одежда"
                              role="presentation"
                              src={p1}
                            />
                            <img
                              className="b-main-grid__image-first js-lazy-img js-ready lazy-loaded"
                              alt="Верхняя одежда"
                              role="presentation"
                              src={p2}
                            />
                            <p className="theme-white">Верхняя одежда</p>
                          </Link>
                        </div>
                      </div>
                      <div className="col sm-12 md-12">
                        <div className="b-main-grid__item m-grid-middle" id="bx_1373509569_239">
                          <Link to="/shoes">
                            <img
                              className="b-main-grid__image-second js-lazy-img js-ready lazy-loaded"
                              alt="Туфли"
                              role="presentation"
                              src={o2}
                            />
                            <img
                              className="b-main-grid__image-first js-lazy-img js-ready lazy-loaded"
                              alt="Туфли"
                              role="presentation"
                              src={o1}
                            />
                            <p className="theme-black">Туфли</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col sm-12 md-12 lg-4">
                  <div className="b-main-grid__container">
                    <div className="row">
                      <div className="col sm-12 md-6 lg-12">
                        <div className="b-main-grid__item m-grid-bottom" id="bx_1373509569_241">
                          <Link to="/jackets">
                            <img
                              className="b-main-grid__image-second js-lazy-img js-ready lazy-loaded"
                              alt="Пиджаки"
                              role="presentation"
                              src={m1}
                            />
                            <img
                              className="b-main-grid__image-first js-lazy-img js-ready lazy-loaded"
                              alt="Пиджаки"
                              role="presentation"
                              src={m2}
                            />
                            <p className="theme-white">Пиджаки</p>
                          </Link>
                        </div>
                      </div>
                      <div className="col sm-12 md-6 lg-12">
                        <div className="b-main-grid__item m-grid-bottom" id="bx_1373509569_243">
                          <Link to="/top">
                            <img
                              className="b-main-grid__image-second js-lazy-img js-ready lazy-loaded"
                              alt="Рубашки"
                              role="presentation"
                              src={r1}
                            />
                            <img
                              className="b-main-grid__image-first js-lazy-img js-ready lazy-loaded"
                              alt="Рубашки"
                              role="presentation"
                              src={r2}
                            />
                            <p className="theme-white">Рубашки</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="outer-inner">
        <div className="b-main-description__wrap">
          <h1>Мужская одежда</h1>
          <div className="b-main-description__img">
            <img alt="Магазин мужской одежды Сударь" src={man} />
          </div>
          <div className="b-main-description__text">
            <p>
              В магазине мужской одежды Сударь более 100 тысяч наименований модной и удобной одежды
              для мужчин по доступным ценам.
            </p>
            <p>
              <span className="b-main-description__title">Классика и casual.</span>Мы предлагаем
              одежду в деловом и повседневном стиле, в которой вы будете выглядеть элегантно и
              привлекательно в разной обстановке. Помимо мужских костюмов и сорочек в каталоге
              большой выбор трикотажа, аксессуаров, удобных брюк и верхней одежды для любой погоды.
            </p>
            <p>
              <span className="b-main-description__title">
                Костюм как от портного, только дешевле.&nbsp;
              </span>
              Наша гордость —&nbsp;ассортимент классических костюмов разного кроя, типа и цвета. На
              протяжении многих лет мы улучшали систему лекал, чтобы костюмы сидели идеально на
              разных типах фигуры, подчеркивая ее достоинства и скрывая недостатки. Размерный ряд
              костюмов — от 44 до 68, а цены начинаются от 6000 рублей.
            </p>
            <p>
              <span className="b-main-description__title">Рядом с домом или офисом.&nbsp;</span>Сеть
              «Сударь» насчитывает более 90 магазинов в Москве и Московской области. В каждом из них
              ассортимент классических и современных моделей регулярно обновляется, чтобы вы могли
              найти подходящую мужскую одежду нужного размера и фасона.
            </p>
            <p>
              <span className="b-main-description__title">Гарантия качества.&nbsp;</span>Ткани для
              пошива мужской одежды мы закупаем только у проверенных производителей, заранее
              тестируя образцы. Собственное производство позволяет нам полностью контролировать
              качество.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
