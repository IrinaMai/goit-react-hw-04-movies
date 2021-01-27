import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../../routes/routes';
import NotFoundPage from '../../pages/NotFoundPage'

const MainContent = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                      <Route path={routes.secondaryRoutes.path} 
                    exact={routes.secondaryRoutes.exact}
                    key={routes.secondaryRoutes.path}
                    component = {routes.secondaryRoutes.component}
                />
                {routes.mainRoutes.map(({ path, exact, component: MyComponent }) =>
                    <Route path={path}
                        exact={exact}
                        key={path}
                        render={(props) => <MyComponent {...props}/>}
                    />)}
          
                <Route component={NotFoundPage}/>
            </Switch>
            </Suspense>
            
    );
}

export default MainContent;
