import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <Link to="/posts/new">menu1</Link>
      <Link to="/posts">menu2</Link>
      <Link to="/profile">menu3</Link>
    </footer>
  );
}
