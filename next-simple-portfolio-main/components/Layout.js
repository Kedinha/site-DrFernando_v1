import { useEffect } from "react"
import { useRouter } from "next/router"
import Navbar from "./Navbar"
import PropTypes from "prop-types"
import NProgress from "nprogress"
import nProgress from "nprogress"
import classNames from "classnames"
import Link from "next/link"

const Layout = ({ children, title, footer = true, dark = false }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url)
      NProgress.start()
    }

    router.events.on("routeChangeStart", handleRouteChange)

    router.events.on("routeChangeComplete", () => NProgress.done())

    router.events.on("routeChangeError", () => nProgress.done())

    return () => {
      router.events.off("routeChangeStart", handleRouteChange)
    }
  }, [])

  return (
    <div className={classNames({ "bg-primary": dark, "bg-light": !dark })}>
      <div className='container'>
        <nav className='navbar navbar-expand-lg navbar-info bg-light'>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link href='/blog'>
                  <a className='nav-link active' aria-current='page'>
                    redes Sociais logos
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/blog'>
                  <a className='nav-link active' aria-current='page'>
                    redes Sociais logos
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <Navbar />
      <main className='container py-4'>
        {/* Title */}
        {title && (
          <h1 className={classNames("text-center", { "text-light": dark })}>
            {title}
          </h1>
        )}

        {/* Content */}
        {children}
      </main>

      {footer && (
        <footer className='bg-primary text-light text-center'>
          <div className='container p-4'>
            <h1>&copy; Dr. Fernando Paiva</h1>
            <p>2000 - {new Date().getFullYear()}</p>
            <p>All rights Reserved.</p>
          </div>
        </footer>
      )}
    </div>
  )
}

Layout.proptypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  footer: PropTypes.bool,
}

export default Layout
