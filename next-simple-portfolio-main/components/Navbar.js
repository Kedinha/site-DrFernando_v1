import Link from "next/link"

const Navbar = () => {
  return (
    <header className='container'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <div className='container'>
          <Link href='/'>
            <a className='navbar-brand'>HOME</a>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link href='/blog'>
                  <a className='nav-link active' aria-current='page'>
                    BLOG
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/about'>
                  <a className='nav-link ' aria-current='page'>
                    SOBRE
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/experience'>
                  <a className='nav-link'>FORMAÇÃO</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar