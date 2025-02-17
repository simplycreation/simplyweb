import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="keywords"
            content="CV Simply Creation, rotan furniture Cirebon, furniture rotan, kursi rotan, meja rotan, sofa rotan, kerajinan rotan Cirebon, dekorasi rotan, desain interior rotan, home decor rotan, perabot rotan, rotan berkualitas, handmade furniture, eco-friendly furniture, mebel rotan Cirebon, outdoor furniture, indoor furniture, custom furniture rotan, pengrajin rotan Cirebon, produk rotan unik, industri rotan Cirebon"
          />
          <meta
            name="description"
            content="Simply Creation is a Cirebon-based company specializing in high-quality rattan furniture. Our designs combine traditional craftsmanship with modern innovation, offering unique and sustainable furniture solutions for your home or business."
          />
          <meta name="author" content="" />

          <link rel="shortcut icon" href="/assets/img/favicon.ico" />

          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Teko:300,400,500,600,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display:400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
