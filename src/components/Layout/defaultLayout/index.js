import Header from './Header';
import Footer from './Footer';
function defaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default defaultLayout;
