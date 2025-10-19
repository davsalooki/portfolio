const Header = () => {
    return (
        <div>
            <nav className="border-b border-gray-300">
            <a>David Le</a>
                <ul className="flex space-x-4 p-4 text-xl text-white">
                    <li>
                        <a href="/">about</a>
                    </li>
                    <li>
                        <a href="/about">blog</a>
                    </li>
                    <li>
                        <a href="/contact">gallery</a>
                    </li>
                    <li>
                        <a href="/contact">projects</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
