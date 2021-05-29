import Link from 'next/link';
import GitHub from '../public/assets/svg/github.svg';
import Twitter from '../public/assets/svg/twitter.svg';
import Instagram from '../public/assets/svg/instagram.svg';
import Mail from '../public/assets/svg/mail.svg';

const Footer = () => {
  return (
    <footer className="container mx-auto lg:px-60 py-5 text-center">
      <div className="flex space-x-5 justify-center items-center">
        <Link href="https://github.com/agustacandi">
          <a className="hover:text-blue-300">
            <GitHub />
          </a>
        </Link>
        <Link href="https://twitter.com/agustacandi">
          <a className="hover:text-blue-300">
            <Twitter />
          </a>
        </Link>
        <Link href="https://instagram.com/agustacandi">
          <a className="hover:text-blue-300">
            <Instagram />
          </a>
        </Link>
        <Link href="mailto:mugiwaraagusta@gmail.com">
          <a className="hover:text-blue-300">
            <Mail />
          </a>
        </Link>
      </div>
      <p className="py-3">
        Powered by{' '}
        <Link href="https://nextjs.org">
          <a className="font-bold hover:text-blue-300">NextJS</a>
        </Link>{' '}
        and{' '}
        <Link href="https://vercel.com">
          <a className="font-bold hover:text-blue-300">Vercel</a>
        </Link>
      </p>
      <p>
        Copyright &#169; 2021{' '}
        <Link href="https://github.com/agustacandi">
          <a className="font-bold hover:text-blue-300">agustacandi</a>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
