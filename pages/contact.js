import * as Yup from 'yup';
import Image from 'next/image';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import Layout from '../components/layout';
import HeaderAlt from '../components/header-alt';
import Header from "../components/header";

export default function Contact() {
    const [notification, setNotification] = useState({
        message: '',
        messageBarType: '',
    });

    const formik = useFormik({
        initialValues: {
            Name: '',
            UserEmail: '',
            Company: '',
            Country: '',
            Message: '',
        },
        validationSchema: Yup.object({
            Name: Yup.string()
                .trim()
                .matches(/^[A-Za-z ]*$/, ' Name should only contain Characters')
                .min(3, 'Too short! Minimum allowed length is 3')
                .max(30, 'Too long! Maximum allowed length is 30')
                .required('First Name is required'),
            UserEmail: Yup.string()
                .trim()
                .matches(
                    /^[a-z0-9][a-z0-9-_.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/,
                    'Enter a Valid Email'
                )
                .required('User Email is required'),
            Company: Yup.string()
                .trim()
                .matches(
                    /^[A-Za-z ]*$/,
                    'Company Name should only contain Characters'
                )
                .min(3, 'Too short! Minimum allowed length is 3')
                .max(30, 'Too long! Maximum allowed length is 30')
                .required('Company Name is required'),
            Country: Yup.string()
                .trim()
                .matches(
                    /^[A-Za-z ]*$/,
                    'Country should only contain Characters'
                )
                .min(3, 'Too short! Minimum allowed length is 3')
                .max(30, 'Too long! Maximum allowed length is 30')
                .required('Country is required'),

            Message: Yup.string()
                .trim()
                .matches(
                    /^[A-Za-z ]*$/,
                    'Message should only contain Characters'
                )
                .min(3, 'Too short! Minimum allowed length is 3')
                .max(150, 'Too long! Maximum allowed length is 150')
                .required('Country is required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            console.log('values', values);
            fetch('/api/mail', {
                method: 'POST',
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })
                .then((res) => res.json())
                .then((data) => {
                    resetForm();
                    console.log('Response succeeded!', data);
                    setNotification({
                        message: data.message,
                        messageBarType: 1,
                    });
                });
        },
    });

    return (
      <Layout title="Contact">
        <Header />
        <div className="sub-hero-section">
          <div className="container">
            <div className="hero-title-center flex-inner">
              <div
                className="welcome-icon"
                data-w-id="9c73eb64-847e-1aa7-2231-9cc4d4918eab"
              >
                <Image
                  src="/icons8-online-support.png"
                  width={80}
                  height={80}
                  alt=""
                />
              </div>
              <div>
                <h1
                  className="hero-title color-white"
                  data-w-id="ae77b4aa-56b7-3c0d-abd8-712c92aa6129"
                >
                  <span className="add-scribble-below">{"Reach "}</span>
                  {" out to us"}
                  <br />
                </h1>
              </div>
            </div>

            <div className="margin-50px">
              <div className="office-block">
                <div
                  className="office-content"
                  data-w-id="1401ff28-43f1-2619-c2ba-246054535508"
                >
                  <div>
                    <h2>Office</h2>
                    <p> City: Bhubaneswar, Khurda
                      <br />
                      Odisha, India
                    </p>
                  </div>

                  <div className="margin-30px">
                    <p>
                      <a href="#">hr@byecom.in</a>
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="scribble-2"
            data-w-id="ae77b4aa-56b7-3c0d-abd8-712c92aa6132"
          >
            <Image alt="" width={60} height={60} src="/scribbles-3.png" />
          </div>

          <div
            className="scribble-1"
            data-w-id="ae77b4aa-56b7-3c0d-abd8-712c92aa6133"
          >
            <Image
              alt=""
              width={120}
              height={120}
              className="scribble-1"
              src="/scribbles-2.png"
            />
          </div>
        </div>

        <div className="gray-section">
          <div className="container">
            <div className="align-center">
              <h4 className="hero-title _50px _50-percent">
                Get in touch with our
                <span className="add-scribble-below">{"support "}</span>
                {" team"}
                <span className="add-scribble-below"></span>
                <br />
              </h4>

              <div className="margin-20px">
                <p className="sub-heading">
                  Schedule a guided demo
                  <br />
                </p>
              </div>
            </div>

            <div className="margin-50px">
              <div className="w-form">
                <form className="form schelude" onSubmit={formik.handleSubmit}>
                  <input
                    required=""
                    type="text"
                    maxLength={256}
                    data-name="Name"
                    placeholder="Enter your name"
                    {...formik.getFieldProps("Name")}
                    className="
                                        text-field
                                        margin-bottom
                                        w-node-3419f8fa8a0b-359efabc w-input
                                    "
                  />

                  <input
                    required=""
                    type="email"
                    maxLength={256}
                    data-name="Email"
                    placeholder="Enter your email"
                    {...formik.getFieldProps("UserEmail")}
                    className="
                                        text-field
                                        margin-bottom
                                        w-node-3419f8fa8a0c-359efabc w-input
                                    "
                  />

                  <input
                    type="text"
                    required=""
                    maxLength={256}
                    data-name="Company"
                    placeholder="Company"
                    {...formik.getFieldProps("Company")}
                    className="text-field margin-bottom w-input"
                  />

                  <input
                    required=""
                    type="text"
                    maxLength={256}
                    data-name="Country"
                    placeholder="Country"
                    {...formik.getFieldProps("Country")}
                    className="text-field margin-bottom w-input"
                  />

                  <textarea
                    required=""
                    name="Message"
                    maxLength={5000}
                    data-name="Message"
                    placeholder="Your Message"
                    className="text-field area w-input"
                    {...formik.getFieldProps("Message")}
                  ></textarea>

                  <div className="margin-20px">
                    <input
                      type="submit"
                      value="Schelude a Demo →"
                      data-wait="Please wait..."
                      className="button subscribe orange w-button"
                      disabled={
                        !(formik.isValid && formik.dirty) || formik.isSubmitting
                      }
                    />
                  </div>

                  {notification.message}
                </form>

                <div className="success-message w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>

                <div className="error-message w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='loader'>
                <Image
                    src='/tail-spin.svg'
                    width={40}
                    height={40}
                    alt=''
                    className='loading-image'
                />
            </div> */}
      </Layout>
    );
}
