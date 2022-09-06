import './App.css';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import { publicRouter } from './routes/index';
import defaultLayout from './components/Layout/defaultLayout';
import { Fragment } from 'react';
function App() {
    return (
        <HashRouter>
            <div className="App">
                <Routes>
                    {publicRouter.map((router, index) => {
                        const Page = router.component;
                        let Layout = defaultLayout;
                        if (router.layout) {
                            Layout = router.layout;
                        } else if (router.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={router.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;
