import { useNavigate } from 'react-router-dom';
import '../styles/home.css';


function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container" style={{ backgroundImage: "url('/home-bg.jpg')" }}>
      <div className="home-card">
        <button className="home-button" onClick={() => navigate('/detail/menu')}>
          <img src="/icons/menu.png" alt="Menu Icon" />
          <p>MENU</p>
        </button>
        <button className="home-button" onClick={() => navigate('/detail/stores')}>
          <img src="/icons/stores.png" alt="Stores Icon" />
          <p>STORES</p>
        </button>
        <button className="home-button" onClick={() => navigate('/detail/cart')}>
          <img src="/icons/cart.png" alt="Cart Icon" />
          <p>CART</p>
        </button>
      </div>
    </div>
  );
}

export default Home;
