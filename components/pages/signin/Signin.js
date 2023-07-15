import React from "react";
import Layout from "../../Layout";
import Input from "../../ui/Input";

const Signin = () => {
  return (
    <Layout>
      <form className="container text-lg tracking-widest  h-screen py-40 mx-auto flex items-center flex-col">
        <div className="grid w-[80%]">
          <Input type="text" label="Username" id="username" />
          <Input type="password" label="Password" id="password" />
        </div>
        <button>Sign in</button>
      </form>
    </Layout>
  );
};

export default Signin;
