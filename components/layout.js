import Link from "next/link";
import Head from "next/head";

const Layout = ({ children }) => (
  <div className="container">
    <Head>
      <title>Workout Splits</title>
      <link rel="stylesheet" href="/style.css" />
      <link
        rel="icon"
        href="https://tse2.mm.bing.net/th?id=OIG4.A.I9yB1dFxcE6tLfhzSD&pid=ImgGn"
      />
    </Head>
    <header>
      <h1>Workout Splits</h1>
      <nav>
        <Link href="/">Home</Link>
      </nav>
    </header>

    <main>{children}</main>
    <footer>
      <p>&copy; Workout Splits Blog</p>
    </footer>
  </div>
);

export default Layout;
