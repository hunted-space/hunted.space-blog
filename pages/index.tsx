import Link from "next/link";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>
          A place to see dashboards, statistics & a calendar view of Product
          Hunt launches
        </title>
        <meta
          name="description"
          content="View advanced dashboards on your product votes & comments and statistics of Product Hunt launches. Understand how successful launches come to be. Get an overview of the best products, explore upvotes, comments, topics and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://hunted.space" />
        <meta property="og:image" content="https://hunted.space/api/ogImg" />
        <meta property="og:image:alt" content="Hunted Space" />
        <meta content="white" name="theme-color" />
        <meta
          content="A place to see dashboards, statistics & a calendar view of Product Hunt launches"
          property="og:title"
        />
        <meta
          property="og:description"
          content="View advanced dashboards on your product votes & comments and statistics of Product Hunt launches. Understand how successful launches come to be. Get an overview of the best products, explore upvotes, comments, topics and more."
        />
        <meta name="twitter:image" content="https://hunted.space/api/ogImg" />
        <meta
          name="twitter:description"
          content="View advanced dashboards on your product votes &amp; comments and statistics of Product Hunt launches. Understand how successful launches come to be. Get an overview of the best products, explore upvotes, comments, topics and more."
        />
        <link
          rel="/hunted.space/apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/hunted.space/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/hunted.space/favicon-16x16.png"
        />
        <link rel="manifest" href="/hunted.space/site.webmanifest" />
        <link rel="icon" href="/hunted.space/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <div className="p-20" id="page-container">
          <div id="page-wrapper">
            <h1 className="text-4xl font-semibold text-white">
              Hunted Space Blog
            </h1>
            <p className="text-greybs my-2 border-b-2 border-borderlint pb-8">
              Discover projects, and works done by the team of hunted space
            </p>
          </div>
          {/* Card Wrapper */}
          <div
            className="grid grid-rows-1 grid-cols-1 gap-4 mt-7 sm:grid-cols-2"
            id="card-wrapper"
          >
            <div
              className="bg-gradient-to-r from-tango hover:from-borderlint p-5 rounded border-2 border-borderlint cursor-pointer"
              id="cards"
            >
              <span className="text-greywhite text-sm">July 18, 2023</span>
              <h2 className="text-textGrade text-2xl font-bold mt-1">
                Getting Started
              </h2>
              <p className="break-all text-greywhite">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                iste a ut labore fugit. Aspernatur, ab beatae molestias minus,
                deleniti dignissimos ex ipsa, fugiat similique repellat odit
                suscipit neque corporis.
              </p>
              <div className="mt-2">
                <Link href="/blog/getting-started" className="text-minblue">
                  Read More
                </Link>
              </div>
            </div>
            <div
              className="bg-gradient-to-r from-tango hover:from-borderlint p-5 rounded border-2 border-borderlint cursor-pointer"
              id="cards"
            >
              <span className="text-greywhite text-sm">July 18, 2023</span>
              <h2 className="text-textGrade text-2xl font-bold mt-1">
                Getting Started
              </h2>
              <p className="break-all text-greywhite">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                iste a ut labore fugit. Aspernatur, ab beatae molestias minus,
                deleniti dignissimos ex ipsa, fugiat similique repellat odit
                suscipit neque corporis.
              </p>
              <div className="mt-2">
                <Link href="/" className="text-minblue">
                  Read More
                </Link>
              </div>
            </div>
            <div
              className="bg-gradient-to-r from-tango hover:from-borderlint p-5 rounded border-2 border-borderlint cursor-pointer"
              id="cards"
            >
              <span className="text-greywhite text-sm">July 18, 2023</span>
              <h2 className="text-textGrade text-2xl font-bold mt-1">
                Getting Started
              </h2>
              <p className="break-all text-greywhite">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                iste a ut labore fugit. Aspernatur, ab beatae molestias minus,
                deleniti dignissimos ex ipsa, fugiat similique repellat odit
                suscipit neque corporis.
              </p>
              <div className="mt-2">
                <Link href="/" className="text-minblue">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
