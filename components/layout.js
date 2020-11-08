import Head from 'next/head';
import Navbar from './navbar';

const Layout = (props) => {
    return(
        <div>
            <Head>
                <title>Hello Next.js</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
            </Head>
            <Navbar />
            <div className="container">
                {props.children}
            </div>
        </div>
    );
}

export default Layout;