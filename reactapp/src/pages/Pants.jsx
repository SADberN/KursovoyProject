import React from 'react';
import { SortPopup } from '../components';
import { Comps } from '../components';
import { useSelector } from 'react-redux';

function Pants() {
  // const { items } = useSelector((state) => {
  //   return {
  //     items: state.products.items,
  //     sortBy: state.filters.sortBy,
  //   };
  // });
  const items = useSelector(({ products }) => products.items);
  return (
    <div>
      <h2>Фильтры</h2>
      <div className="content__top">
        <SortPopup
          items={[
            { name: 'нет', type: 'no' },
            { name: 'белый', type: 'white' },
            { name: 'черный', type: 'black' },
          ]}
          sok={'Цвет:'}></SortPopup>

        <SortPopup
          items={[
            { name: 'нет', type: 'no' },
            { name: '35', type: 's35' },
            { name: '36', type: 's36' },
            { name: '37', type: 's37' },
            { name: '38', type: 's38' },
            { name: '39', type: 's39' },
            { name: '40', type: 's40' },
            { name: '41', type: 's41' },
            { name: '42', type: 's42' },
            { name: '43', type: 's43' },
            { name: '44', type: 's44' },
          ]}
          sok={'Размер:'}></SortPopup>

        <SortPopup
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цена меньше', type: 'lowprice' },
            { name: 'цена больше', type: 'highprice' },
          ]}
          sok={'Сортировка по:'}></SortPopup>
      </div>
      <h2 className="content__title">Весь товар</h2>
      <div className="content__items">
        {items.map((obj) => obj.type === 3 && <Comps key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Pants;
