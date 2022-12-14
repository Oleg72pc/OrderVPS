import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import iconSSD from '../../assets/img/iconSSD.svg';
import iconHDD from '../../assets/img/iconHDD.svg';
import iconTurbo from '../../assets/img/iconTurbo.svg';
import iconPlus from '../../assets/img/iconPlus.svg';
import { filterDistributiveAC } from '../../redux/actionCreators/tariffsAC';
import './vpsTariffElement.scss'

function VpsTariffElement({ tariff, myKey, softwares }) {
  const { distributives, filterSoftwares } = useSelector((state) => state.tariffsRed);
  const dispatch = useDispatch();
  const [filterSoftwaresSingle, setTfilterSoftwaresSingle] = React.useState('ubuntu-20-04');
  const [datacenterToggle, setDatacenterToggle] = React.useState(true);

  const toggle = () => setDatacenterToggle(!datacenterToggle);

  const getFilterDistributive = (e) => {
    dispatch(filterDistributiveAC(e));
    setTfilterSoftwaresSingle(e.target.value.split(',').pop());
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
  const softSingle = filterSoftwares[`${filterSoftwaresSingle}`]?.map((soft) => (
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
      <div className="price-title">{tariff.price_per_month} ???/??????.</div>
      <div className="additional-text">
        CPU{' '}
        <label className="basic-text">
          {tariff.cpu_cores} x{' '}
          {(tariff.category_id === '1' && <label>2,8 ??????</label>) ||
            (tariff.category_id === '2' && <label>2,1 ??????</label>) ||
            (tariff.category_id === '3' && <label>5 ??????</label>)}
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
      <div className="additional-text">??????????????????????</div>
      <select onChange={getFilterDistributive} className="select-distribution" name="select">
        {dist}
      </select>
      <div className="additional-text">?????????????????????? ?????????????????????? </div>
      <select className="select-software" name="select">
        {!softSingle ? soft : softSingle}
      </select>
      <div className="additional-text">????????-?????????? </div>

      <div className="switch-button-form">
          <div onClick={toggle} className={datacenterToggle ? "switch-button-active" : "switch-button"}>??????????-??????????????????</div>
          <div onClick={toggle} className={datacenterToggle ? "switch-button" : "switch-button-active"}>????????????</div>
      </div>

      <div className="additiona-options">
        <div className="plus-logo">
          <img src={iconPlus} alt="logo"></img>
        </div>
        <div className="additiona-options-text">
          <div>2 IP-???????????? (lPv4 + lPv6)</div>
          {tariff.category_id !== '2' && <div>3 ?????????????????? ??????????</div>}
        </div>
      </div>

      <button className="btn">????????????????</button>
    </div>
  );
}

export default VpsTariffElement;
