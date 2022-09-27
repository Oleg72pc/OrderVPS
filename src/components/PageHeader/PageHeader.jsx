import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTariffsAC } from '../../redux/actionCreators/tariffsAC';

function PageHeader() {
  const { categories } = useSelector((state) => state.tariffsRed);
  const dispatch = useDispatch();

  const getFilterTariffs = (e) => {
    dispatch(filterTariffsAC(e));
  };

  return (
    <div className="vpsorder-header">
      <div className="account-title">АККАУНТ</div>
      <div className="page-title">ЗАКАЗАТЬ VPS</div>
      <div className="line"></div>
      <div className="category-title">Категория</div>
      <select onChange={getFilterTariffs} className="select-category" name="select">
        <option value="0">Все</option>
        {categories.slice(0, 3).map((categori) => (
          <option key={categori.id} value={categori.id} className="select-category-option">
            {categori.name}
          </option>
        ))}
        ;
      </select>
    </div>
  );
}

export default PageHeader;
