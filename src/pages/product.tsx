import React from 'react'
import {Router} from '@reach/router'
import Layout from '../components/Layout'
import Main from '../components/Main'
import Product1 from '../components/Product1'
import Product2 from '../components/Product2'
import { Link } from 'gatsby'
const product = () => {
    return (
        <Layout>
            <div>
                <Link to='/product/p1'>Product1</Link>
                <br/>
                <Link to='/product/p2'>Product2</Link>

            </div>
            <Router basepath='/product'>
                <Product1 path='/p1' />
                <Product2 path='/p2' />
                <Main path='/' />
            </Router>
        </Layout>
    )
}

export default product
