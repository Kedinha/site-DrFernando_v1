import React from "react"
import Layout from "../components/Layout"
import Link from "next/link"

const about = () => {
  return (
    <Layout>
      <div className='card card-body bg-primary text-light animate__animated animate__fadeIn'>
        <div className='row'>
          <div className='col-md-4'>
            <img src='/drFernando.jpg' alt='' className='img-fluid' />
          </div>
          <div className='col-md-8'>
            <h1>Dr. Fernando Paiva</h1>
            <h3>Neurologia - Neurocirurgia</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae atque ullam perferendis harum, nisi porro voluptate,
              iste consequuntur enim reprehenderit architecto consectetur cum?
              Totam ad molestias natus illum illo officia.
            </p>
            <Link href='/about'>
              <a className='btn btn-outline-light'>O Médico</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default about
