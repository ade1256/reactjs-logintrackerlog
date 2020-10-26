import Head from "next/head";
import React from "react";
import { Header} from "../Components";

const Home = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Logintracker</title>
      
        <link
          rel="icon"
          href="assets/favicon.svg"
          type="image/svg"
          sizes="16x16"
        />
        <link rel="stylesheet" href="assets\css\bootstrap.min.css" />
        <link rel="stylesheet" href="assets\fonts\line-icons.css" />
        <link rel="stylesheet" href="assets\css\slicknav.css" />
        <link rel="stylesheet" href="assets\css\owl.carousel.min.css" />
        <link rel="stylesheet" href="assets\css\owl.theme.css" />
        <link rel="stylesheet" href="assets\css\magnific-popup.css" />
        <link rel="stylesheet" href="assets\css\nivo-lightbox.css" />
        <link rel="stylesheet" href="assets\css\animate.css" />
        <link rel="stylesheet" href="assets\css\main.css" />
        <link rel="stylesheet" href="assets\css\responsive.css" />
        <script src="assets\js\jquery-min.js"></script>
        <script src="assets\js\popper.min.js"></script>
        <script src="assets\js\bootstrap.min.js"></script>
        <script src="assets\js\owl.carousel.min.js"></script>
        <script src="assets\js\jquery.mixitup.js"></script>
        <script src="assets\js\wow.js"></script>
        <script src="assets\js\jquery.nav.js"></script>
        <script src="assets\js\scrolling-nav.js"></script>
        <script src="assets\js\jquery.easing.min.js"></script>
        <script src="assets\js\jquery.counterup.min.js"></script>
        <script src="assets\js\nivo-lightbox.js"></script>
        <script src="assets\js\jquery.magnific-popup.min.js"></script>
        <script src="assets\js\waypoints.min.js"></script>
        <script src="assets\js\jquery.slicknav.js"></script>
        <script src="assets\js\main.js"></script>
        <script src="assets\js\form-validator.min.js"></script>
      </Head>
      <Header />
    </>
  );
};

export default Home;
