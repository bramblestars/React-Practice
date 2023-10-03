// import logo from './logo.svg';
import Header from './components/shared/Header';
import RentalHome from './pages/RentalHome';

import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, 
         Routes,
         Route
} from 'react-router-dom';

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
                <div class="container bwm-container">
                    <Routes>
                        <Route path="/" element={ <RentalHome/> } />
                        <Route path="/login" element={ <Login/> } />
                        <Route path="/register" element={ <Register/> } />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
