import Alert from '@/Components/Alert/Alert'
import Footer from '@/Components/Footer/Footer'
import AutoScrollCarousel from '@/Components/Home/Carousel/AutoScrollCarousel'
import CoverFirst from '@/Components/Home/CoverFirst'
import FanartSection from '@/Components/Home/FanartSection'
import MangaPosts from '@/Components/Home/Pagination/MangaPosts'
import Navbar from '@/Components/Navbar/Navbar'
import VisitorCounter from '@/Components/VisitorCounter/VisitorCounter'
import { Head } from '@inertiajs/react'
import React from 'react'



function Home() {
  return (
    <div>
        <Head title='Welcome' />
        <header>
            <Navbar></Navbar>
        </header>
        <section>
            <Alert></Alert>
            <CoverFirst></CoverFirst>
        </section>
        <section>
            <AutoScrollCarousel></AutoScrollCarousel>
            <MangaPosts></MangaPosts>
        </section>
        <section>
            <FanartSection></FanartSection>
        </section>
        <section>
            <Footer />
        </section>
    </div>
  )
}

export default Home