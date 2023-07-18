import Head from "next/head";
import React from "react";
import CreateListing from "../components/pages/create_listing/CreateListing";

const create_listing = () => {
  return (
    <>
      <Head>
        <title>Bizlagos - Create listing</title>
        <meta name="description" content="Log in to your account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CreateListing />
    </>
  );
};

export default create_listing;
