import {css} from '@emotion/css';
import MainSidebar from '@/components/MainSidebar';
import SubSidebar from '@/components/event/SubSidebar';

const Sidebar = () => {
  return (
    <aside
      className={css`
        position: fixed;
        top: 3rem;
        height: calc(100vh - 3rem);
        left: 0;
        width: 320px;
        transition: width 0.4s ease 200ms;
        @media (max-width: 768px) {
          width: 0;
        }
      `}
    >
      <MainSidebar />
      <SubSidebar />
    </aside>
  );
};

export default Sidebar;
