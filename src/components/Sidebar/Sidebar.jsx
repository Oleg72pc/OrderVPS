import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import iconMenu from '../../assets/img/iconsSidebar/iconMenu.svg';
import iconMenuBlack from '../../assets/img/iconsSidebar/iconMenuBlack.svg';
import iconVpsOrder from '../../assets/img/iconsSidebar/iconVpsOrder.svg';
import iconAccount from '../../assets/img/iconsSidebar/iconAccount.svg';
import iconServers from '../../assets/img/iconsSidebar/iconServers.svg';
import iconMonitoring from '../../assets/img/iconsSidebar/iconMonitoring.svg';
import iconDomains from '../../assets/img/iconsSidebar/iconDomains.svg';
import iconSsl from '../../assets/img/iconsSidebar/iconSsl.svg';
import iconStore from '../../assets/img/iconsSidebar/iconStore.svg';
import iconSeo from '../../assets/img/iconsSidebar/iconSeo.svg';
import iconSupport from '../../assets/img/iconsSidebar/iconSupport.svg';
import iconIdea from '../../assets/img/iconsSidebar/iconIdea.svg';
import './sidebar.scss';

const routes = [
  {
    path: '/',
    name: 'Заказать VSP',
    icon: <img className="iconSidebar" src={iconVpsOrder} alt="icon"></img>,
  },
  {
    path: '/account',
    name: 'АККАУНТ',
    icon: <img className="iconSidebar" src={iconAccount} alt="icon"></img>,
  },
  {
    path: '/servers',
    name: 'СЕРВЕРЫ',
    icon: <img className="iconSidebar" src={iconServers} alt="icon"></img>,
  },
  {
    path: '/monitoring',
    name: 'МОНИТОРИНГ',
    icon: <img className="iconSidebar" src={iconMonitoring} alt="icon"></img>,
  },
  {
    path: '/domains',
    name: 'ДОМЕНЫ',
    icon: <img className="iconSidebar" src={iconDomains} alt="icon"></img>,
  },
  {
    path: '/ssl',
    name: 'SSL',
    icon: <img className="iconSidebar" src={iconSsl} alt="icon"></img>,
  },
  {
    path: '/store',
    name: 'МАГАЗИН',
    icon: <img className="iconSidebar" src={iconStore} alt="icon"></img>,
  },
  {
    path: '/seo',
    name: 'SEO И РЕКЛАМА',
    icon: <img className="iconSidebar" src={iconSeo} alt="icon"></img>,
  },
  {
    path: '/support',
    name: 'ПОДДЕРЖКА',
    icon: <img className="iconSidebar" src={iconSupport} alt="icon"></img>,
  },
  {
    path: '/idea',
    name: 'ЕСТЬ ИДЕЯ',
    icon: <img className="iconSidebar" src={iconIdea} alt="icon"></img>,
  },
];

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="main-container">
      <div className={isOpen ? 'icon-menu-activ' : 'icon-menu'}>
        <img onClick={toggle} className="icon-sidebar" src={iconMenuBlack} alt="iconSidebar"></img>
      </div>
      <div className={isOpen ? 'sidebar-activ' : 'sidebar'}>
        <div className="top_section">
          {isOpen && <img className="logo" src={logo} alt="logo"></img>}
          <div className="bars">
            <img onClick={toggle} className="icon-sidebar" src={iconMenu} alt="iconSidebar"></img>
          </div>
        </div>

        <section className="routes">
          {routes.map((route) => (
            <NavLink
              onClick={toggle}
              to={route.path}
              key={route.name}
              className={({ isActive }) => (isActive ? 'link_active' : 'link')}>
              <div className="icon-sidebar">{route.icon}</div>
              <AnimatePresence>
                {isOpen && <div className="link-text">{route.name}</div>}
              </AnimatePresence>
            </NavLink>
          ))}
        </section>
      </div>
      <main className={isOpen ? 'main-active' : 'main'}>{children}</main>
    </div>
  );
}

export default Sidebar;
