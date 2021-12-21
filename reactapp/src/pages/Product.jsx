import React from 'react';
import man from '../assets/img/man.jpg';
import '../global.js';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import axios from 'axios';
import '../App.css';
function Product() {
  const basket = useSelector(({ cart }) => cart.items);

  const color = useSelector(({ colors }) => colors.items);
  const szes = useSelector(({ sizes }) => sizes.items);
  const sses = useSelector(({ shosizes }) => shosizes.items);
  const avSizes = [];
  let item = new Array();
  let idd = window.location.href.substring(
    window.location.href.lastIndexOf('/') + 1,
    window.location.href.length,
  );
  idd = parseInt(idd, 10);
  const items = useSelector(({ products }) => products.items);

  items.map((obj) => (obj.id === idd ? (item = obj) : ''));
  if (item.type === 5) {
    sses.map((sec) => avSizes.push(sec.name));
  } else {
    szes.map((sec) => avSizes.push(sec.name));
  }
  const [activeType, setActiveType] = React.useState(0);
  //const [activeSize, setActiveSize] = React.useState(avSizes.indexOf(sz[0]));
  try {
    onSelectSize(item.sz[0]);
  } catch (e) {}
  const [activeSize, setActiveSize] = React.useState(0);

  const onSelectType = (index) => {
    setActiveType(index);
  };
  const onSelectSize = (index) => {
    setActiveSize(index);
  };
  let len = basket.length;
  const [activeNum, setActiveNum] = React.useState(basket.length);
  const onChangeNum = (lenn) => {
    setActiveNum(lenn);
  };
  activeType === 0 && item.col[0] != 0 && onSelectType(item.col[0]);
  return (
    <div className="outer-inner">
      <div className="b-main-description__wrap">
        <h1>{item.name}</h1>

        <div className="b-main-description__img">
          <img alt="Магазин мужской одежды Сударь" src={item.imageUrl} />
        </div>

        <div className="b-main-description__text">
          <div
            className="product-block__selector"
            style={{
              //width: '290px',
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <b>Цвета</b>
            <ul className="colors">
              {color.map(
                (col1, index) =>
                  item.col.indexOf(index) > -1 && (
                    <li
                      className="colors"
                      key={col1}
                      key={index}
                      onClick={() => onSelectType(index)}
                      className={classNames({
                        active: activeType === index,
                        disabled: !item.col.includes(index),
                      })}>
                      {col1.colname}
                    </li>
                  ),
              )}
            </ul>

            <b>Размеры</b>

            <ul className="sizes">
              {avSizes.map(
                (size, index) => (
                  activeSize === 0 &&
                    item.sz.includes(size) &&
                    setActiveSize(avSizes.indexOf(item.sz[0])),
                  (
                    <li
                      key={size}
                      onClick={() => onSelectSize(index)}
                      className={classNames({
                        active: activeSize === index,

                        disabled: !item.sz.includes(size),
                      })}>
                      {size}
                    </li>
                  )
                ),
              )}
            </ul>
          </div>
          <p style={{ marginTop: '50px' }}>{item.info}</p>
          {item.count > 0 ? (
            <div className="product-block__bottom">
              <div
                style={{
                  fontWeight: 'bold',
                  fontSize: '34px',
                  lineHeight: '27px',
                  letterSpacing: '0.015em',
                  marginTop: '50px',
                  marginLeft: '25px',
                }}>
                от {item.price} ₽
              </div>

              <div
                className="button button--outline button--add"
                onClick={() => (
                  axios.post(
                    'http://localhost:5000/api/basketitem/addbasketitem?itemId=' +
                      item.id +
                      '&name=' +
                      item.name +
                      '&imageUrl=' +
                      item.imageUrl +
                      '&color=' +
                      color[activeType].colname +
                      '&size=' +
                      avSizes[activeSize] +
                      '&price=' +
                      item.price,
                  ),
                  activeNum > 0 ? (len = activeNum + 1) : len++,
                  onChangeNum(len),
                  (global.fPrice = global.fPrice + item.price)
                )}
                style={{ padding: '20px 60px', marginTop: '50px' }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                    fill="white"
                  />
                </svg>
                <span
                  style={{
                    fontWeight: 'bold',
                    fontSize: '28px',
                    lineHeight: '27px',
                    letterSpacing: '0.015em',
                    marginTop: '50px',
                  }}>
                  Добавить
                </span>
                {len > 0 ||
                  (activeNum > 0 && (
                    <i
                      style={{
                        //marginTop:'10px',
                        width: '32px',
                        height: '32px',
                        fontWeight: 'bold',
                        fontSize: '24px',
                        lineHeight: '27px',
                        paddingTop: '2px',
                      }}>
                      {activeNum > 0 ? activeNum : len}
                    </i>
                  ))}
              </div>
            </div>
          ) : (
            <div
              style={{
                fontWeight: 'bold',
                fontSize: '38px',
                lineHeight: '27px',
                letterSpacing: '0.015em',
                marginTop: '50px',
              }}>
              Нет в наличии
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
