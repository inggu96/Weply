import { Routes, Route } from 'react-router-dom';
import DynamicItem from './Link';
import SidebarMui from './SidebarMui';
import { SIDEBAR_DATA } from './Data';
import styles from './sidemui.module.scss';

const SideMui = () => {
  return (
    <div className={styles.mainContainer}>
      <SidebarMui>
        <Routes>
          <Route path="/" element={<DynamicItem page="homepage" />} />
          {SIDEBAR_DATA &&
            SIDEBAR_DATA.map((item, index) => (
              <Route
                key={index}
                path={item.path}
                element={<DynamicItem page={item.name} />}
              />
            ))}
        </Routes>
      </SidebarMui>
    </div>
  );
};

export default SideMui;
