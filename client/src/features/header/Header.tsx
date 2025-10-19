const Header = () => {
  return (
    <div className="mx-4 md:mx-20 lg:mx-70">
      <nav className="border-b border-gray-300">
        <div className="flex items-center justify-between p-4">
          <a href="/" className="text-2xl">
            David Le
          </a>

          <ul className="flex space-x-6 text-xl font-extralight">
            <li>
              <a href="/" className="hover:text-blue-600">
                about
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-blue-600">
                blog
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-blue-600">
                gallery
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-blue-600">
                projects
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
