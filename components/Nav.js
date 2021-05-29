import Typed from 'react-typed';
import Link from 'next/link';
import { withRouter } from 'next/router';

const Nav = ({ router }) => {
  const navs = [
    { name: 'Posts', href: '/posts' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
  ];
  return (
    <nav className="bg-gray-100 hover:shadow-lg py-4 transition-all duration-300 sticky top-0 z-10">
      <div className="container mx-auto lg:px-40 px-30 flex justify-between w-10/12">
        <Link href="/">
          <a className="font-bold transform scale-150">
            <Typed strings={['#!']} typeSpeed={100} />
          </a>
        </Link>
        <div className="flex space-x-5">
          {navs.map((nav) => {
            return (
              <Link href={nav.href} key={nav.name}>
                <a
                  className={
                    router.pathname == nav.href
                      ? 'transform hover:scale-110 hover:text-blue-300 text-blue-300 font-bold'
                      : 'transform hover:scale-110 hover:text-blue-300'
                  }
                >
                  {nav.name}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Nav);
