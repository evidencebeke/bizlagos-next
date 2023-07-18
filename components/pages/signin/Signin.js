import React, { useState } from "react";
import Layout from "../../Layout";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Link from "next/link";
import { object, string, ref } from "yup";
import { Formik, Form, useField, ErrorMessage } from "formik";

const Signin = () => {
  const LoginValidation = object().shape({
    username: string().required("Username Required"),
    password: string().required("Please enter your password"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <Layout>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={LoginValidation}
      >
        {() => {
          return (
            <Form className="container mx-auto flex justify-center items-center my-12 flex-col">
              <div className="grid w-[90%]  md:w-[80%] space-y-5 ">
                <Input name="username" type="text" label="Username" />
                <Input name="password" type="password" label="Password" />
              </div>
              <div className="w-[90%]  md:w-[80%] my-5">
                {" "}
                <Button type="submit">Sign in </Button>
              </div>
              <div>
                <p>
                  Don&apos;t have an account?{" "}
                  <Link className="text-green-500" href={"/signup"}>
                    Register
                  </Link>{" "}
                </p>
              </div>
            </Form>
          );
        }}
      </Formik>
    </Layout>
  );
};

export default Signin;
