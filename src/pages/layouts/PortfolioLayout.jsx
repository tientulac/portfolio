import React from 'react'
import { Outlet } from 'react-router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


const PortfolioLayout = ({ info }) => {
    return (
        <div>
            <nav>
                <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
                <Header info={info} />
                <Footer/>
            </nav>
            <main className="main-class">
                <Outlet />
            </main>
        </div>
    )
}

export default PortfolioLayout