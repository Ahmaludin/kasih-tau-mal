import Footer from './Footer.js';
import Nav from './Nav.js';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div style={{ marginTop: '192.63px' }}>{children}</div>
      <Footer />
    </>
  );
}
