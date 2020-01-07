// @flow

// Vendors
import React, { useEffect, useState, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './config/routes';

// Components
import { Menu, MenuToggle, Page } from './components';

// Styles
import './app.scss';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const root = document.documentElement;
    if (root) {
      if (menuOpen) root.classList.add('html--menu-open');
      else root.classList.remove('html--menu-open');
    }
  }, [menuOpen]);

  return (
    <Router>
      <>
        <MenuToggle toggleMenu={toggleMenu} menuIsOpen={menuOpen} />
        <Menu toggleMenu={toggleMenu} menuIsOpen={menuOpen} />
        <Switch>
          {routes.map(({ path, exact, name, component: RouteComponent }) => (
            <Route key={path} exact={exact} path={path}>
              <Suspense fallback={<div>Loading...</div>}>
                <Page title={name}>
                  <RouteComponent />
                </Page>
              </Suspense>
            </Route>
          ))}
        </Switch>
        <div className="framework__backdrop" onClick={toggleMenu} />
      </>
    </Router>
  );
};

export default App;
