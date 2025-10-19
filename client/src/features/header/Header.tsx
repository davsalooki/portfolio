import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className="border-b border-gray-300">
        <div className="flex items-center justify-between p-4">
          <NavLink to="/" className={({ isActive }: { isActive: boolean }) => (isActive ? 'text-2xl text-green-800' : 'text-2xl')}>
            David Le
          </NavLink>

          <ul className="flex space-x-6 text-xl font-extralight">
            <li>
              <NavLink to="/" className={({ isActive }: { isActive: boolean }) => (isActive ? 'text-green-800 font-normal' : 'hover:text-green-600')}>
                about
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={({ isActive }: { isActive: boolean }) => (isActive ? 'text-green-800 font-normal' : 'hover:text-green-600')}>
                blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={({ isActive }: { isActive: boolean }) => (isActive ? 'text-green-800 font-normal' : 'hover:text-green-600')}>
                gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({ isActive }: { isActive: boolean }) => (isActive ? 'text-green-800 font-normal' : 'hover:text-green-600')}>
                projects
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
