import { INIT_TARIFFS, FILTER_TARIFFS, FILTER_SOFTWARE } from '../actionTypes/tariffsAT.js';

const initialState = {
  vps: [],
  tariffs: [],
  categories: [],
  softwares: [],
  distributives: [],
  filterTariffs: [],
  filterSoftwares: {},
};

export const tariffsReduser = (state = initialState, action) => {
  switch (action.type) {
    case INIT_TARIFFS:
      return {
        ...state,
        vps: action.payload,
        tariffs: action.payload.vpsPlans,
        categories: action.payload.categories,
        softwares: action.payload.selectPanel,
        distributives: action.payload.selectOs,
        filterTariffs: action.payload.vpsPlans,
      };
    case FILTER_TARIFFS:
      const vpsPlans = [...state.tariffs];
      let vpsPlansEdit = [];
      if (action.payload.target.value === '0') vpsPlansEdit = vpsPlans;
      else vpsPlansEdit = vpsPlans.filter((el) => el.category_id === action.payload.target.value);
      return { ...state, filterTariffs: vpsPlansEdit };

    case FILTER_SOFTWARE:
      const filterSoftwares = action.payload.target.value.split(',');
      const filterSoftwaresForDistributiv = action.payload.target.value.split(',').pop();
      let editSoftwares = filterSoftwares.map((el) =>
        el === 'isp' ? (el = ['vps_isp6_lite', 'vps_isp6_pro', 'vps_isp6_host']) : el,
      );
      editSoftwares = editSoftwares.flat();
      return {
        ...state,
        filterSoftwares: {
          ...state.filterSoftwares,
          [filterSoftwaresForDistributiv]: state.softwares.filter((el) =>
            editSoftwares.includes(el.name),
          ),
        },
      };

    default:
      return state;
  }
};
