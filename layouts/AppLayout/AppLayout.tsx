import type { FC, PropsWithChildren } from 'react';

import Footer from '../../components/shared/Footer';
import Navbar from '../../components/shared/Navbar';
import Sidebar from '../../components/shared/Sidebar';
import useToggle from '../../hooks/useToggle';
import Meta from '../../templates/Meta';
import type AppLayoutProps from './AppLayout.props';

const AppLayout: FC<PropsWithChildren<AppLayoutProps>> = ({
  meta,
  children,
}) => {
  const [showSidebar, toggleShowSidebar, setShowSidebar] = useToggle(false);

  return (
    <>
      <Meta {...meta} />
      <div className="flex w-full flex-col">
        <Navbar toggleSidebar={toggleShowSidebar} />
        <Sidebar isOpen={showSidebar} onClose={() => setShowSidebar(false)} />
        <main className="flex w-full flex-col">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
