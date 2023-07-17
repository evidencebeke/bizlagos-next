import React, { useState } from "react";
import Layout from "../../Layout";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Link from "next/link";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ username, password });
  };
  return (
    <Layout>
      <form
        onSubmit={handleLogin}
        className="container text-lg tracking-widest   py-40 mx-auto flex items-center flex-col"
      >
        <div className="grid w-[80%] space-y-5 ">
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            label="Username"
            id="username`"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            label="Password"
            id="password"
          />
        </div>
        <div className="w-[80%] my-5">
          {" "}
          <Button>Sign in </Button>
        </div>
        <div>
          <p>
            Don't have an account?{" "}
            <Link className="text-green-500" href={"/signup"}>
              Register
            </Link>{" "}
          </p>
        </div>
      </form>
    </Layout>
  );
};

export default Signin;
