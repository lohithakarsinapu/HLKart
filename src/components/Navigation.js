
import "../styles/Style_navigation.css";
function Navigation() {
  return (
    <div className="navigation">
      <img
        src="https://www.meediagrupi.ee/wp-content/uploads/2016/10/HL-Logo_blue_with-correct-space.jpg"
        className="logo"
        alt="Logo"
      ></img>
        <h4><i>Welcome to HLKart</i></h4>
      <h3>Category</h3>
      <h3>Brands</h3>
      <h3>Fashion</h3>
      <h3>Network</h3>
      <div className="Search">
      <button>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.54 19.97L16.3 14.73C17.36 13.44 17.99 11.79 17.99 9.99C17.99 5.85 14.64 2.5 10.5 2.5C6.35 2.5 3 5.85 3 9.99C3 14.13 6.35 17.48 10.49 17.48C12.29 17.48 13.94 16.84 15.23 15.79L20.47 21.03C20.62 21.18 20.81 21.25 21 21.25C21.19 21.25 21.38 21.18 21.53 21.03C21.83 20.74 21.83 20.26 21.54 19.97ZM10.49 15.98C7.19 15.98 4.5 13.29 4.5 9.99C4.5 6.69 7.19 4 10.49 4C13.79 4 16.48 6.69 16.48 9.99C16.48 13.3 13.8 15.98 10.49 15.98Z"
            fill="black"
          ></path>
        </svg>
        </button>
        <form>
            
          <input placeholder="Seach" />
        </form>
      </div>
    </div>
  );
}

export default Navigation;
