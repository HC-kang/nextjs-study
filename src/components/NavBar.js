import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link className={router.pathname === '/' ? 'active' : ''} href='/'>
        home
      </Link>
      <Link
        className={router.pathname === '/about' ? 'active' : ''}
        href='/about'
      >
        about
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </nav>
  );
}
