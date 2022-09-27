import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import iconSSD from '../../assets/img/iconSSD.svg';
import iconHDD from '../../assets/img/iconHDD.svg';
import iconTurbo from '../../assets/img/iconTurbo.svg';
import iconPlus from '../../assets/img/iconPlus.svg';
import { filterDistributiveAC } from '../../redux/actionCreators/tariffsAC';

function VpsTariffElement({ tariff, myKey, softwares }) {
  const { distributives, filterSoftwares } = useSelector((state) => state.tariffsRed);
  const dispatch = useDispatch();
  const [test, setTest] = React.useState('ubuntu-20-04');

  const getFilterDistributive = (e) => {
    dispatch(filterDistributiveAC(e));
    setTest(e.target.value.split(',').pop());
  };

  const dist = distributives.map((distrib) => (
    <option key={distrib.id} value={[distrib.panel_type, distrib.name]}>
      {distrib.description}
    </option>
  ));
  const soft = softwares.map((soft) => (
    <option key={soft.id} value={soft.name}>
      {soft.description}
    </option>
  ));
  const softSingle = filterSoftwares[`${test}`]?.map((soft) => (
    <option key={soft.id} value={soft.name}>
      {soft.description}
    </option>
  ));
  return (
    <div
      key={myKey}
      className={
        (tariff.category_id === '1' && 'container-element-ssd') ||
        (tariff.category_id === '2' && 'container-element-hdd') ||
        (tariff.category_id === '3' && 'container-element-turbo')
      }>
      <div className="container-element-title">
        <div className="tariffs-logo">
          <img
            src={
              (tariff.category_id === '1' && iconSSD) ||
              (tariff.category_id === '2' && iconHDD) ||
              (tariff.category_id === '3' && iconTurbo)
            }
            alt="logo"></img>
        </div>

        <div className="tariffs-name">{tariff.name}</div>
      </div>
      <div className="price-title">{tariff.price_per_month} ₽/мес.</div>
      <div className="additional-text">
        CPU{' '}
        <label className="basic-text">
          {tariff.cpu_cores} x{' '}
          {(tariff.category_id === '1' && <label>2,8 ГГц</label>) ||
            (tariff.category_id === '2' && <label>2,1 ГГц</label>) ||
            (tariff.category_id === '3' && <label>5 ГГц</label>)}
        </label>
      </div>
      <div className="additional-text">
        RAM <label className="basic-text">{tariff.ram}</label>
      </div>
      <div className="additional-text">
        DISK
        <label className="basic-text">
          {tariff.volume_disk} {tariff.disk_type}
        </label>
      </div>
      <div className="additional-text">Дистрибутив</div>
      <select onChange={getFilterDistributive} className="select-distribution" name="select">
        {dist}
      </select>
      <div className="additional-text">Программное обеспечение </div>
      <select className="select-software" name="select">
        {!softSingle ? soft : softSingle}
      </select>
      <div className="additional-text">Дата-центр </div>

      <form className="form_toggle">
        <div className="form_toggle-item item-1">
          <input id={tariff.billing_id} type="radio" name="radio" value="1" defaultChecked />
          <label htmlFor={tariff.billing_id}>Санкт-Петербург</label>
        </div>
        <div className="form_toggle-item item-2">
          <input id={tariff.billing_id + '2'} type="radio" name="radio" value="2" />
          <label htmlFor={tariff.billing_id + '2'}>Москва</label>
        </div>
      </form>

      <div className="additiona-options">
        <div className="plus-logo">
          <img src={iconPlus} alt="logo"></img>
        </div>
        <div className="additiona-options-text">
          <div>2 IP-адреса (lPv4 + lPv6)</div>
          {tariff.category_id !== '2' && <div>3 резервных копии</div>}
        </div>
      </div>

      <button className="btn">ЗАКАЗАТЬ</button>
    </div>
  );
}

export default VpsTariffElement;
