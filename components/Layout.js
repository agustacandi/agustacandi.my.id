import Head from 'next/head';
import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{`${title} | Agustacandi`}</title>
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="@agustacandi Website" />
        <meta property="og:url" content="https://agustacandi.my.id" />
        <meta
          property="og:description"
          content="Candi Agusta Islamiano - GNU/Linux & Web Enthusiast - Network Engineer - Indonesia - Bondowoso"
        />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="/gutsss.jpg" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Nav />
      <main>
        <div className="container mx-auto lg:px-60 py-10">
          <div className="w-10/12 mx-auto">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
