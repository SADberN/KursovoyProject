import React from 'react';
import { Link } from 'react-router-dom';

const Categories = React.memo(function Categories({ items }) {
  let page = window.location.href.substring(
    window.location.href.lastIndexOf('/') + 1,
    window.location.href.length,
  );
  let pg = null;
  if (page == 'costumes') {
    pg = 0;
  } else if (page == 'jackets') {
    pg = 1;
  } else if (page == 'pants') {
    pg = 2;
  } else if (page == 'top') {
    pg = 3;
  } else if (page == 'shoes') {
    pg = 4;
  }
  const [activeItem, setActiveItem] = React.useState(pg);
  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  const lk = (index) => {
    if (index === 0) {
      return '/costumes';
    } else if (index === 1) {
      return '/jackets';
    } else if (index === 2) {
      return '/pants';
    } else if (index === 3) {
      return '/top';
    } else if (index === 4) {
      return '/shoes';
    }
  };
  const myRef = React.useRef(null);

  const doScroll = () => myRef.current.scrollIntoView();

  return (
    <div className="categories" ref={myRef}>
      <ul>
        <Link to="/">
          <li
            className={activeItem === null ? 'active' : ''}
            onClick={() => (onSelectItem(null), doScroll())}>
            Рекомендации
          </li>
        </Link>
        {items &&
          items.map((name, index) => (
            <Link to={lk(index)}>
              <li
                onClick={() => (onSelectItem(index), doScroll())}
                className={activeItem === index ? 'active' : ''}
                key={`${name}_${index}`}>
                {name}
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
