import React from 'react';
import { SortPopup } from '../components';
import { Comps } from '../components';
import { useSelector } from 'react-redux';

function Costumes() {
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
            { name: '42', type: 's42' },
            { name: '44', type: 's44' },
            { name: '46', type: 's46' },
            { name: '48', type: 's48' },
            { name: '50', type: 's50' },
            { name: '52', type: 's52' },
            { name: '54', type: 's54' },
            { name: '56', type: 's56' },
            { name: '58', type: 's58' },
            { name: '60', type: 's60' },
            { name: '62', type: 's62' },
            { name: '64', type: 's64' },
            { name: '66', type: 's66' },
            { name: '68', type: 's68' },
          ]}
          sok={'Размер:'}
          onClickItem={0}></SortPopup>

        <SortPopup
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цена меньше', type: 'lowprice' },
            { name: 'цена больше', type: 'highprice' },
          ]}
          sok={'Сортировка по:'}
          onClickItem={0}></SortPopup>
        {console.log(SortPopup.onClickItem)}
      </div>
      <h2 className="content__title">Весь товар</h2>
      <div className="content__items">
        {items.map((obj) => obj.type === 1 && <Comps key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Costumes;
