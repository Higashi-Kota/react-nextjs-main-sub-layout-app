import Footer from '@/components/Footer';
import Header from '@/components/Header';

const routes = [
  {
    pathName: `/404`,
    pageName: `Not Found`,
    activeMenuName: `Not Found`,
    header: () => {
      return <Header />;
    },
    footer: () => {
      return <Footer />;
    },
  },
  {
    pathName: `/500`,
    pageName: `System Error`,
    activeMenuName: `System Error`,
    header: () => {
      return <Header />;
    },
    footer: () => {
      return <Footer />;
    },
  },
  {
    pathName: `/`,
    pageName: `Home`,
    activeMenuName: `Home`,
    header: () => {
      return <Header />;
    },
    footer: () => {
      return null;
    },
  },
  {
    pathName: `/event`,
    pageName: `Event`,
    activeMenuName: `Event`,
    header: () => {
      return <Header />;
    },
    footer: () => {
      return null;
    },
  },
  {
    pathName: `/event/halloween`,
    pageName: `Halloween`,
    activeMenuName: `Event`,
    header: () => {
      return <Header />;
    },
    footer: () => {
      return null;
    },
  },
  {
    pathName: `/event/christmas`,
    pageName: `Christmas`,
    activeMenuName: `Event`,
    header: () => {
      return <Header />;
    },
    footer: () => {
      return null;
    },
  },
  {
    pathName: `/shop`,
    pageName: `Shop`,
    activeMenuName: `Shop`,
    header: () => {
      return <Header />;
    },
    footer: () => {
      return null;
    },
  },
  {
    pathName: `/shop/restaurant/[shopId]`,
    pageName: `Restaurant`,
    activeMenuName: `Shop`,
    header: () => {
      return <Header />;
    },
    footer: () => {
      return null;
    },
  },
  {
    pathName: `/shop/cafe/[shopId]`,
    pageName: `Cafe`,
    activeMenuName: `Shop`,
    header: () => {
      return <Header />;
    },
    footer: () => {
      return null;
    },
  },
  {
    pathName: `/shop/sushi/[shopId]`,
    pageName: `Sushi`,
    activeMenuName: `Shop`,
    header: () => {
      return <Header />;
    },
    footer: () => {
      return null;
    },
  },
];

const getMatchedRoute = ({pathName}) => {
  return routes.find((route) => {
    return route.pathName === pathName;
  });
};

export {routes, getMatchedRoute};
