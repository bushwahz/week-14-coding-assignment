// Import Navbar CSS
import "./Navbar.css";

// Create a function to render the Navbar
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="#top"><strong>Mike's Movie Reviews</strong></a>
      </div>
      <ul>
        <li>
          <a href="#top">Movies</a>
        </li>
        <li>
          <a href="#reviews">Leave Review</a>
        </li>
      </ul>
    </nav>
  );
};

// Export the Navbar component
export default Navbar;
