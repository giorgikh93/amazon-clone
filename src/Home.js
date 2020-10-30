import React from 'react';
import './Home.css';
import Product from './Product';


function Home(props) {
    return (
        <div className='home'>
            <img
                className='home__image'
                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg'
                alt='background Image'
            />
            <div className='home__row'>

                <Product
                    id='3216g'
                    title='The lean sturtup:how constant innovation'
                    price={11.23}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                    rating={5}
                />
                <Product
                    id='sfw5'
                    title='The lean sturtup:how constant innovation'
                    price={11.23}
                    image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg'
                    rating={5}
                />
            </div>
            <div className='home__row'>

                <Product
                    id='321rfs'
                    title='The lean sturtup:how constant innovation'
                    price={11.23}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
                    rating={5}
                />
                <Product
                    id='asd23'
                    title='The lean sturtup:how constant innovation'
                    price={11.23}
                    image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg'
                    rating={5}
                />
                <Product
                    id='ga2331'
                    title='The lean sturtup:how constant innovation'
                    price={11.23}
                    image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg'
                    rating={5}
                />
            </div>
        </div>
    );
}

export default Home;