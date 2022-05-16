import React from 'react';
import Layout from '../layout'
import '../styles/home.scss'

const Home = () => {
    return(
        <Layout>
            <div className="container">
                <div className="presentation">HOLA! YO SOY</div>
                <div className="name">Antonio Morales</div>
                <div className="specialty">Desarrollador <span className="specialty-name">Frontend<span className="animation">&#160;</span></span></div>
                {/* <div className="circle"></div> */}
            </div>
        </Layout>
    )
}

export default Home;