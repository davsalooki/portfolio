import './Header.css';

function Header({ name, title }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1>{name}</h1>
        <p className="title">{title}</p>
      </div>
    </header>
  );
}

export default Header;
