import React from "react";
import Layout from "../../Layout";
import { Formik, Form } from "formik";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import Textarea from "../../ui/Textarea";
import { object, string, ref } from "yup";
const ListingnValidation = object().shape({
  listingTitle: string().required("Please input a title for your business"),
  listingType: string().required("Please select a business type"),
  location: string().required("Please enter the location of your business"),
  listingDescription: string().required(
    "Please enter a description appropriate to your business"
  ),
});

const CreateListing = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <Layout>
      <Formik
        initialValues={{
          listingTitle: "",
          listingType: "",
          location: "",
          listingDescription: "",
          listingImage: null,
        }}
        onSubmit={handleSubmit}
        validationSchema={ListingnValidation}
      >
        {() => {
          return (
            <Form className="container capitalize mx-auto flex justify-center items-center my-12 flex-col">
              <div className="grid md:grid-cols-2 gap-5 w-[90%]  md:w-[80%]">
                <Input name="listingTitle" label="Job Title" />

                <Input name="location" label="Location" />
                <Select name="listingType" label="Please select a job type" />
                <Input
                  name="listingImage"
                  label="An image depicting your work"
                  type="file"
                  accept=".jpg,.png"
                />
                <Textarea
                  name="listingDescription"
                  label="Describe your business"
                />
              </div>

              <div className="w-[90%]  md:w-[80%] my-5">
                <Button type="submit" className="mt-4 w-50">
                  Submit
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </Layout>
  );
};

export default CreateListing;
