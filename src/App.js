// import logo from './logo.svg';
import Header from './components/shared/Header';
import RentalHome from './pages/RentalHome';

import Login from './pages/Login';
import Register from './pages/Register';
import { Router, Route } from './components/Router'

function App() {

    const renderPages = () => {
        const { pathname } = window.location;

        switch (pathname) {
            case '/':
                return <RentalHome />;
            case '/login':
                return <Login />;
            case '/register':
                return <Register />;
            default:
                return <RentalHome />;
        }
    }

    return (
        <div>
            <Router>
                <Header />
                { renderPages() }
            </Router>
        </div>
    );
}

export default App;
