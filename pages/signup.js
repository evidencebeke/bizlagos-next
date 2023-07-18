import React from "react";
import Signup from "../components/pages/signup/Signup";
import Head from "next/head";

const signup = () => {
  return (
    <>
      <Head>
        <title>Bizlagos - Sign up</title>
        <meta name="description" content="Log in to your account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Signup />
    </>
  );
};

export default signup;
