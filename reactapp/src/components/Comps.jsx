import React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../global.js';
import axios from 'axios';

const Comps = React.memo(function Comps({ id, name, imageUrl, price, sz, col, count, type }) {
  const basket = useSelector(({ cart }) => cart.items);
  const color = useSelector(({ colors }) => colors.items);
  const szes = useSelector(({ sizes }) => sizes.items);
  const sses = useSelector(({ shosizes }) => shosizes.items);
  const avSizes = [];
  const cnt = [];
  basket.map((item) => id === item.itemId && cnt.push(item.itemId));
  let lk = '';
  if (type === 1) {
    lk = 'costumes';
  } else if (type === 2) {
    lk = 'jackets';
  } else if (type === 3) {
    lk = 'pants';
  } else if (type === 4) {
    lk = 'top';
  } else if (type === 5) {
    lk = 'shoes';
  }
  if (type === 5) {
    sses.map((sec) => avSizes.push(sec.name));
  } else {
    szes.map((sec) => avSizes.push(sec.name));
  }
  const [activeType, setActiveType] = React.useState(0);
  //const [activeSize, setActiveSize] = React.useState(avSizes.indexOf(sz[0]));
  const [activeSize, setActiveSize] = React.useState(0);

  const onSelectType = (index) => {
    setActiveType(index);
  };
  activeType === 0 && col[0] != 0 && onSelectType(col[0]);
  const onSelectSize = (index) => {
    setActiveSize(index);
  };
  let len = cnt.length;
  const [activeNum, setActiveNum] = React.useState(cnt.length);
  const onChangeNum = (lenn) => {
    setActiveNum(lenn);
  };
  return (
    <div className="product-block">
      <Link to={'/' + lk + '/' + id}>
        <img
          className="product-block__image"
          src={imageUrl}
          alt={name}
          onClick={() => (global.ids = id)}
        />
      </Link>
      <h4 className="product-block__title">{name}</h4>
      <div className="product-block__selector">
        <b>Цвета</b>
        <ul className="colors">
          {color.map(
            (col1, index) =>
              col.indexOf(index) > -1 && (
                <li
                  className="colors"
                  key={col1}
                  key={index}
                  onClick={() => onSelectType(index)}
                  className={classNames({
                    active: activeType === index,
                    disabled: !col.includes(index),
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
              activeSize === 0 && sz.includes(size) && setActiveSize(avSizes.indexOf(sz[0])),
              (
                <li
                  key={size}
                  onClick={() => onSelectSize(index)}
                  className={classNames({
                    active: activeSize === index,

                    disabled: !sz.includes(size),
                  })}>
                  {size}
                </li>
              )
            ),
          )}
        </ul>
      </div>
      {count > 0 ? (
        <div className="product-block__bottom">
          <div className="product-block__price">от {price} ₽</div>

          <div
            className="button button--outline button--add"
            onClick={() => (
              axios.post(
                'http://localhost:5000/api/basketitem/addbasketitem?itemId=' +
                  id +
                  '&name=' +
                  name +
                  '&imageUrl=' +
                  imageUrl +
                  '&color=' +
                  color[activeType].colname +
                  '&size=' +
                  avSizes[activeSize] +
                  '&price=' +
                  price,
              ),
              activeNum > 0 ? (len = activeNum + 1) : len++,
              onChangeNum(len)
            )}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {(len > 0 || activeNum > 0) && <i>{activeNum > 0 ? activeNum : len}</i>}
          </div>
        </div>
      ) : (
        <div className="product-block__price" style={{ marginTop: '15px' }}>
          Нет в наличии
        </div>
      )}
    </div>
  );
});

export default Comps;
