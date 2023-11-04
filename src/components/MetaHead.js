import Head from 'next/head';

export default function MetaHead(props) {
  return (
    <Head>
      <title>{props.title}</title>

      <meta name="description" content={props.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      {props.image && <meta property="og:image" content={props.image} />}
      <meta property="og:url" content={props.url} />
      <meta property="og:type" content="article" />

      <meta name="twitter:card" content="summary" />
    </Head>
  );
}

// nanti isi dengan nick twitter jika sudah ada
// <meta name="twitter:site" content="@kasihtaumal" />
// <meta name="twitter:creator" content="@ahmaludin" />
