import Layout from '../components/layout';
import fetch from 'isomorphic-unfetch';
import React from 'react'

const Index = ({productData}) => {
    console.log(productData)
    return (
        <Layout>
            <div>
                <h1>Welcome to Next Application</h1>
                <h3>Product List</h3>
                {productData.map((item, i) => {
                   return (
                       <>
                   <li key={i}>{item.name}</li>
                   </>
                   )
               })}
            </div>
        </Layout>
    );
}

Index.getInitialProps = async function() {
    const response = await fetch(`https://gorest.co.in/public-api/products`);
    console.log(response)
    const result = await response.json();
    return { productData: result.data }
}

export default Index;