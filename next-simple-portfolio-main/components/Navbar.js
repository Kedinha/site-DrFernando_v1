import Link from "next/link"

const Navbar = () => {
  return (
    <header className='container'>
      <nav className='navbar navbar-expand-lg navbar-dark font-weight-bold  bg-primary'>
        <div className='container'>
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
            <ul className='navbar-nav navbar-nav col-md-12 d-flex justify-content-around fw-bold'>
              <li className='nav-item active'>
                <Link href='/'>
                  <a className='nav-link ' aria-current='page'>
                    HOME
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/experience'>
                  <a className='nav-link ' aria-current='page'>
                    SOBRE
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/about'>
                  <a className='nav-link ' aria-current='page'>
                    NEUROCIRURGIA
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/blog'>
                  <a className='nav-link ' aria-current='page'>
                    COLUNA
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/experience'>
                  <a className='nav-link'>CLÍNICA</a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/github'>
                  <a className='nav-link'>AGENDA</a>
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
