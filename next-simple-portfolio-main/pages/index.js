import Layout from "../components/Layout"
import Link from "next/link"

import { skills, experiences, projects } from "../profile"

const Index = () => (
  <Layout>
    <div
      id='carouselExampleSlidesOnly'
      className='carousel slide carousel-fade'
      data-bs-ride='carousel'
    >
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img src='./carrol01.png' className='d-block w-100' alt='' />
        </div>
        <div className='carousel-item'>
          <img src='./carrol02.png' className='d-block w-100' alt='...' />
        </div>
        <div className='carousel-item'>
          <img src='./carrol01.png' className='d-block w-100' alt='...' />
        </div>
      </div>

      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleControls'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleControls'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>

    {/* Porfolio */}
    <section>
      <div className='row'>
        <div className='col-md-12'>
          <div className='card card-body bg-info'>
            <div className='row'>
              <div className='col-md-12 my-2'>
                <h1 className='text-center text-light'>Portal</h1>
              </div>
              {projects.map(({ name, description, image }, index) => (
                <div className='col-md-4 p-2' key={index}>
                  <div className='card h-100'>
                    <div className='overflow'>
                      <img src={`/${image}`} alt='' className='card-img-top' />
                    </div>
                    <div className='card-body'>
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <a href='#!'>Saiba Mais</a>
                    </div>
                  </div>
                </div>
              ))}

              <div className='col-md-12 mt-4'>
                <div className='text-center'>
                  <Link href='/portfolio'>
                    <a className='btn btn-outline-light'>More Projects</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Index
