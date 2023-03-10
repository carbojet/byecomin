/* eslint-disable @next/next/no-page-custom-font */
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import Header from "../components/header";
import Head from "next/head";

export default function Home() {
  const team = [
    {
      image: "/priya.png",
    },
    {
      image: "/jaga.png",
    },
    {
      image: "/sunil.png",
    },
    {
      image: "/raj.png",
    },
  ];
  const playStoreUrl =
    "https://play.google.com/store/apps/details?id=com.vinkelmarket";
  const playStoreMerchUrl =
    "https://play.google.com/store/apps/details?id=com.vinkelstore";
  return (
    <>
      <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      </Head>
      <Layout title="Home">
        <Header />
        <div className="hero-section initial">
          <div className="container">
            <div className="hero-grid initial">
              <div id="w-node-5038eeef659c-0e15684b">
                <div
                  style={{
                    height: "76.85px",
                    width: "73.44px",
                    position: "absolute",
                    background: "rgb(189, 189, 155, 0.3)",
                    borderRadius: "50%",
                    left: "-0.49%",
                    right: "83.64%",
                    top: "4.39%",
                    bottom: "90.99%",
                  }}
                ></div>
                <h1
                  data-w-id="2ed10de6-2495-8eef-7dda-117fa3821790"
                  className="hero-title initial-alignment-left"
                >
                  {/* {"Let’s Build "} 
                <span className="add-scribble-below">{" the India’s"}</span>
                {"upcoming Online Neighborhood Delivery Marketplace"} */}
                  We Discover Design and Implement Technology That Helps
                  Partners & Consumers Solve Problems and The Society Run
                  Better.
                  <br />
                </h1>

                <div className="margin-40px">
                  <p
                    data-w-id="059c0b0c-a0ee-feb4-95c5-8c9c0684e254"
                    className="sub-heading"
                  >
                    Organise The Unorganised Local Service Delivery Process With
                    Customer Enhancements and Partner Visibility & Grow With
                    Enhanced Technology with Operations Know How!
                  </p>
                </div>
              </div>

              <div className="illustration">
                <Image
                  width={800}
                  height={867}
                  alt="build design"
                  src="/groupA.png"
                  data-w-id="399e8c32-6738-71ad-2624-e1b30882b726"
                />
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: "10vh", marginTop: "5vh" }}>
          <h2
            className="hero-title innovate-disrupt-title"
            data-w-id="ae36a5cd-d205-a375-9f37-d6ef78019124"
          >
            {" "}
            {/* <span className="add-scribble-below">{" Innovate "}</span> */}
            <span className="">{" Innovate "}</span>
            {" to scale and disrupt"}
          </h2>

          <div className="">
            <p
              className="hero-title innovate-disrupt-subtitle"
              data-w-id="07f2d188-0f77-6fc0-b04c-7532349c8825"
            >
              Bringing the Finest Platform Directly to you
              <br />
            </p>
          </div>
        </div>

        <div className="hero-section innovate-disrupt mid">
          <div className="container">
            <div className="hero-grid innovate-disrupt">
              <div className="illustration">
                <Image
                  width={667}
                  height={349}
                  alt="build design"
                  src="/mockups.png"
                  data-w-id="399e8c32-6738-71ad-2624-e1b30882b726"
                />
              </div>

              <div id="w-node-5038eeef659c-0e15684b">
                <h1
                  data-w-id="2ed10de6-2495-8eef-7dda-117fa3821790"
                  className="hero-title innovate-disrupt"
                >
                  India’s upcoming Neighborhood Marketplace
                  <br />
                </h1>

                <div className="subtext-view innovate-disrupt">
                  <p
                    data-w-id="059c0b0c-a0ee-feb4-95c5-8c9c0684e254"
                    className="sub-heading innovate-disrupt"
                  >
                    shop Online and experience the ease of home delivery
                    <br />
                    <Image
                      width={133}
                      height={40}
                      alt="build design"
                      src="/groupVinkel.png"
                      data-w-id="399e8c32-6738-71ad-2624-e1b30882b726"
                    />
                    <br />
                    <p className="sub-heading innovate-disrupt learn-more">
                      Learn More ...
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-section innovate-disrupt">
          <div className="container">
            <div className="hero-grid innovate-disrupt">
              <div className="illustration">
                <div className="hero-section innovate-disrupt play-store">
                  <div className="container">
                    <div className="hero-grid innovate-disrupt play-store">
                      <p>Download The Shopping App </p>
                      <p className="now">&nbsp;Now</p>
                      <div className="illustration">
                        <Image
                          width={141.4}
                          height={42.98}
                          alt="build design"
                          src="/appStore.png"
                          data-w-id="399e8c32-6738-71ad-2624-e1b30882b726"
                        />
                      </div>

                      <div className="illustration">
                        <Link passHref href={playStoreUrl}>
                          <a target={"_blank"}>
                            <Image
                              width={141.4}
                              height={42.98}
                              alt="build design"
                              src="/playStore.png"
                              data-w-id="399e8c32-6738-71ad-2624-e1b30882b726"
                            />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="w-node-5038eeef659c-0e15684b">
                <div className="subtext-view innovate-disrupt">
                  <Link passHref href={playStoreMerchUrl}>
                    <a target={"_blank"}>
                      <p
                        data-w-id="059c0b0c-a0ee-feb4-95c5-8c9c0684e254"
                        className="sub-heading innovate-disrupt play-store"
                      >
                        bring Your store online with Vinkel
                      </p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: "#00DB68", paddingTop: "30px" }}>
          <h2
            className="hero-title team-title"
            data-w-id="ae36a5cd-d205-a375-9f37-d6ef78019124"
          >
            {" "}
            {/* <span className="add-scribble-below">{" Innovate "}</span> */}
            <span className="">{"Meet Our Team Behind The Idea"}</span>
            {/* {" to scale and disrupt"} */}
          </h2>
        </div>

        <div className="hero-section team-grid-padding">
          <div className="container">
            <div className="team-grid">
              {team.map((row, index) => (
                <div key={index} style={{ marginTop: "2vh" }}>
                  <Image
                    width={286.96}
                    height={256.2}
                    alt="build design"
                    src={row.image}
                    data-w-id="399e8c32-6738-71ad-2624-e1b30882b726"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="illustrator-grid">
              <div className="illustration">
                <Image
                  alt=""
                  width={750}
                  height={750}
                  src="/home-section-3-image-500x542.png"
                />
              </div>

              <div className="list-circle-wrapper">
                <div className="list-flex">
                  <div className="list-item">
                    <div className="number-text">1</div>
                    <p>
                      <strong>We have a bias for action. </strong>
                      We act fast with clear priorities. We value speed, but
                      take time to reflect when required.
                      <br />
                    </p>
                  </div>

                  <div className="list-item">
                    <div className="number-text">2</div>
                    <p>
                      <strong>We value diversity of thought. </strong>
                      We believe that a variety of ideas encourages newer and
                      more forward-thinking solutions. We leverage unique
                      talents and insights.
                      <br />
                    </p>
                  </div>

                  <div className="list-item no-bottom-line">
                    <div className="number-text">3</div>
                    <p>
                      <strong>We love our team. </strong>We support each other
                      and ask for help when we are stuck. We value a good laugh
                      during and outside of work. And yes, you can wear your
                      pink unicorn suit to work.
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*
            <div className="line-divider"></div>
            
            <div className="margin-block">
              <div className="align-center">
                <h3 className="hero-title _50px">Meet Your Colleagues</h3>

                <div className="margin-15px">
                  <p className="sub-heading">
                    Join our global team and enjoy the ride!
                    <br />
                  </p>
                </div>
              </div>

               <div className="team-content">
                <div>
                  <div className="team-image"></div>
                  <h4>John Doe, CEO Founder</h4>

                  <div className="margin-15px">
                    <p>
                      &quot;As an designer, I love the technical challenges that
                      come with a fast growing company.&quot;
                      <br />
                    </p>
                  </div>
                </div>

                <div>
                  <div className="team-image _2"></div>
                  <h4>John Doe, Designer</h4>
                  <div className="margin-15px">
                    <p>
                      &quot;As an designer, I love the technical challenges that
                      come with a fast growing company.&quot;
                      <br />
                    </p>
                  </div>
                </div>

                <div>
                  <div className="team-image _3"></div>
                  <h4>John Doe, Developer</h4>
                  <div className="margin-15px">
                    <p>
                      &quot;As an designer, I love the technical challenges that
                      come with a fast growing company.&quot;
                      <br />
                    </p>
                  </div>
                </div>
              </div> 

              

               <div className="container">
                <div className="logo-grid">
                  <Image alt="" width={140} height={40} src="/logo-3.png" />
                  <Image alt="" width={140} height={40} src="/logo-2.png" />
                  <Image alt="" width={140} height={40} src="/logo-6.png" />
                  <Image alt="" width={140} height={40} src="/logo-5.png" />
                  <Image alt="" width={140} height={40} src="/logo-1.png" />
                  <Image alt="" width={140} height={40} src="/logo-4.png" />
                </div>
              </div> 
            </div>*/}
          </div>

          <div
            className="scribble-1"
            data-w-id="d231c77e-6839-fee5-c24d-70d08997d5cc"
          >
            <Image alt="" width={140} height={140} src="/scribbles-2.png" />
          </div>
        </div>

        {/* <div className="get-started-section">
          <div className="container">
            <div className="align-center">
              <h4 className="hero-title _50px">Get Started</h4>
              <div className="margin-15px">
                <p className="sub-heading">
                  No credit card required!
                  <br />
                </p>
              </div>
            </div>

            <div className="subscribe-wrapper">
              <div className="w-form">
                <form
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  className="form"
                >
                  <input
                    type="text"
                    className="
                                        text-field
                                        w-node-e45fd2118484-b54acc52 w-input
                                    "
                    maxLength={256}
                    name="Name"
                    data-name="Name"
                    placeholder="Enter your name"
                    id="Name"
                    required=""
                  />

                  <input
                    type="email"
                    className="
                                        text-field
                                        w-node-e45fd2118485-b54acc52 w-input
                                    "
                    maxLength={256}
                    name="Email"
                    data-name="Email"
                    placeholder="Enter your email"
                    id="Email"
                    required=""
                  />

                  <input
                    type="submit"
                    value="Get Started →"
                    data-wait="Please wait..."
                    className="button subscribe orange w-button"
                  />

                  <label
                    id="w-node-e45fd2118487-b54acc52"
                    className="w-checkbox checkbox-field"
                  >
                    <div
                      className="
                                            w-checkbox-input
                                            w-checkbox-input--inputType-custom
                                            checkbox
                                        "
                    ></div>

                    <input
                      type="checkbox"
                      id="checkbox"
                      name="checkbox"
                      data-name="Checkbox"
                      required=""
                      style={{
                        opacity: 0,
                        position: "absolute",
                        zIndex: -1,
                      }}
                    />

                    <p className="cookies-font check">
                      By signing up you agree to our
                      <a href="#">Terms & Condition</a>.
                    </p>

                    <span className="checkbox-label w-form-label">
                      Checkbox
                    </span>
                  </label>
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

            <div className="or-line">
              <div className="or-block">Or</div>
            </div>

            <div className="social-wrapper">
              <Link href="#">
                <a className="social-icon w-inline-block">
                  <Image alt="" width={14} height={14} src="/facebook.png" />
                </a>
              </Link>

              <Link href="#">
                <a className="social-icon w-inline-block">
                  <Image alt="" width={14} height={14} src="/twitter.png" />
                </a>
              </Link>

              <Link href="#">
                <a className="social-icon w-inline-block">
                  <Image alt="" width={15} height={15} src="/instagram.png" />
                </a>
              </Link>
            </div>
          </div>

          <div className="scribble-3" data-w-id='c4c19508-0136-1eef-f777-8c88277a848d'>
            <Image alt="" width={120} height={120} src="/scribbles-7.png" />
          </div>
        </div> */}
      </Layout>
    </>
  );
}
