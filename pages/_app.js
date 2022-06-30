import Link from 'next/link'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    /* px-4 lg:px-0 bununla yazıya ekrana göre padding verebildik. */
    <div className='max-w-4.5xl mx-auto px-4 lg:px-0'>
      <header className='px-2 pt-12'>
        <Link href='/'>
          <a className='inline-block font-bold border-b-[3px] border-gray-300 cursor-pointer text-[32px] tracking-tight'>
            Jamon Holmgren
          </a>
        </Link>
        <nav className='py-8'>
          <ul className='flex flex-wrap'>
            <li className='flex-1'>
              <Link href='/beginnings'>
                <a className='a_tagi'>beginnings</a>
              </Link>
            </li>
            <li className='flex-1'>
              <Link href='/now'>
                <a className='a_tagi'>now</a>
              </Link>
            </li>
            <li className='flex-1'>
              <Link href='/tech'>
                <a className='a_tagi'>tech</a>
              </Link>
            </li>
            <li className='flex-1'>
              <Link href='/talks'>
                <a className='a_tagi'>talks</a>
              </Link>
            </li>
            <li className='flex-1'>
              <Link href='/connect'>
                <a className='a_tagi'>connect</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
