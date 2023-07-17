import React, { useState } from "react";
import Input from "../../ui/Input";
import Layout from "../../Layout";
import { object, string, ref } from "yup";
import { Formik, Form, useField, ErrorMessage } from "formik";
import Button from "../../ui/Button";
import Link from "next/link";
const phoneRegExp = /^([0]{1})[0-9]{10}$/;
const RegisterValidation = object().shape({
  firstName: string().required("Required"),

  lastName: string().required("Required"),
  email: string()
    .required("Valid Email Required")
    .email("Valid Email Required"),
  username: string().required("Please enter a username"),
  password: string()
    .min(8, "Password must be at least 8 character long")
    .required("Required"),
  confirmPassword: string()
    .required("Please confirm your password")
    .oneOf([ref("password")], "Passwords do not match"),
  phone: string()
    .matches(phoneRegExp, "Please input a valid phone number")
    .required("Phone number is required"),
});
const Signup = () => {
  const handleSubmit = (value) => {
    console.log(value);
  };
  return (
    <Layout>
      <Formik
        initialValues={{
          firstName: "",

          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          phone: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={RegisterValidation}
        // validationSchema={null}
      >
        {() => {
          return (
            <Form className="container mx-auto flex justify-center items-center my-12 flex-col">
              <div className="grid md:grid-cols-2 gap-5  w-[80%]">
                <Input name="firstName" label="First Name" />

                <Input name="lastName" label="Last Name" />
                <Input type="email" name="email" label="Email" />
                <Input name="username" label="Username" />
                <Input type="password" name="password" label="Password" />
                <Input
                  type="password"
                  name="confirmPassword"
                  label="Confirm Password"
                />
                <Input type="tel" name="phone" label="Phone number" />
              </div>

              <div className="w-[80%] my-5">
                <Button type="submit" className="mt-4 w-50">
                  Submit
                </Button>
              </div>
              <div>
                <p>
                  Already have an account?{" "}
                  <Link className="text-green-500" href={"/signin"}>
                    Sign in!
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

export default Signup;
