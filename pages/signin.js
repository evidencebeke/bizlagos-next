import React from "react";

import Signin from "../components/pages/signin/Signin";
import Head from "next/head";

const signin = () => {
  return (
    <>
      <Head>
        <title>Bizlagos - Sign in</title>
        <meta name="description" content="Log in to your account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Signin />
    </>
  );
};

export default signin;
