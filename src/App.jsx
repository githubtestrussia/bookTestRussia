import {Route, Routes} from "react-router";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu.jsx";
import {BrowserRouter} from "react-router-dom";
import BookList from "./components/BookList/index.js";
import NewsList from "./components/NewsList/NewsList.jsx";
import LibraryEmployees from "./components/LibraryEmployees/LibraryEmployees.jsx";
import LibraryEvents from "./components/LibraryEvents/LibraryEvents.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";

const App = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <BrowserRouter>
                <NavigationMenu />
                <div style={{ width: '82%', marginLeft: '18%' }}>
                    <Routes>
                        <Route path="/" element={<BookList />} exact />
                        <Route path="/news" element={<NewsList />} />
                        <Route path="/employees" element={<LibraryEmployees />} />
                        <Route path="/events" element={<LibraryEvents />} />
                        <Route path="/book/:id" element={<BookDetails />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
