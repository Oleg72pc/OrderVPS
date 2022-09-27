import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postFetchTariffsAC } from '../../redux/thunk/thunk';
import './vpsOrder.scss';
import Preloader from '../../components/Preloader/Preloader';
import PageHeader from '../../components/PageHeader/PageHeader';
import VpsTariffElement from '../../components/VpsTariffElement/VpsTariffElement';

function VPSOrder() {
  const { tariffs, filterTariffs, softwares } = useSelector((state) => state.tariffsRed);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postFetchTariffsAC());
    setIsLoading(false);
  }, [dispatch]);

  return (
    <>
      {!isLoading && tariffs.length ? (
        <div className="vpsorder-container">
          <div className="vpsorder">
            <PageHeader />
            <div className="container-tariffs">
              {filterTariffs.map((tariff) => (
                <VpsTariffElement
                  tariff={tariff}
                  key={tariff.billing_id}
                  myKey={tariff.billing_id}
                  softwares={softwares}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default VPSOrder;
