import { useRouter } from "next/router";
import Head from "next/head";
export default function Blog() {
  const router = useRouter();
  const { name } = router.query;
  return (
    <>
      <Head>
        <title>{name}</title>
        <meta
          name="description"
          content="View advanced dashboards on your product votes & comments and statistics of Product Hunt launches. Understand how successful launches come to be. Get an overview of the best products, explore upvotes, comments, topics and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://hunted.space" />
        <meta property="og:image" content="https://hunted.space/api/ogImg" />
        <meta property="og:image:alt" content="Hunted Space" />
        <meta content="white" name="theme-color" />
        <meta content={name} property="og:title" />
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
      <div className="p-20 w-full bg-gradient-to-r from-tango text-center">
        <h1 className="text-6xl font-semibold text-white">{name}</h1>
        <p className="mt-10 text-greybs text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          aliquam exercitationem qui eum, ea voluptates recusandae dolor aperiam
          pariatur aspernatur! Odit quam voluptatem velit repellendus numquam
          rem quo vero tenetur.
        </p>
      </div>
      <div className="p-20 w-full h-full bg-lightwhite flex content-center justify-center flex-col text-center"></div>
    </>
  );
}
