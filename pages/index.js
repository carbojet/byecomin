import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import Header from "../components/header";

export default function Home() {
  return (
    <Layout title="Home">
      <Header />
      <div className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div id="w-node-5038eeef659c-0e15684b">
              <h1
                data-w-id="2ed10de6-2495-8eef-7dda-117fa3821790"
                className="hero-title"
              >
                {"Let’s Build "} 
                <span className="add-scribble-below">{" the India’s"}</span>
                {"upcoming Online Neighborhood Delivery Marketplace"}
                <br />
              </h1>

              <div className="margin-40px">
                <p
                  data-w-id="059c0b0c-a0ee-feb4-95c5-8c9c0684e254"
                  className="sub-heading"
                >
                 Organise The
                  Unorganised Local Service Delivery Process With Customer
                  Enhancements and Partner Visibility & Grow With Enhanced
                  Technology with Operations Know How!
                </p>
              </div>
            </div>

            <div className="illustration">
              <Image
                width={800}
                height={867}
                alt="build design"
                src="/home-section-1-image-800x867.png"
                data-w-id="399e8c32-6738-71ad-2624-e1b30882b726"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section bg-padding-top">
        <div className="container">
          <div className="lightbox-wrapper">
            <Link href="#">
              <a
                className="lightbox-link w-inline-block w-lightbox"
                data-w-id="1773fd31-dd51-aac7-5599-7e7783962954"
              >
                <Image alt="" width={25} height={25} src="/play-filled.svg" />
              </a>
            </Link>

            <div className="margin-40px">
              <div
                className="scribble-arrow"
                data-w-id="056f5a68-f594-ef10-7547-2e1486dcaf67"
              >
                <Image alt="" width={50} height={50} src="/scribbles-6.png" />
              </div>

              <h2
                className="hero-title _50px"
                data-w-id="ae36a5cd-d205-a375-9f37-d6ef78019124"
              >
                {" "}
                <span className="add-scribble-below">{" Innovate "}</span>
                {" to scale and disrupt"}
              </h2>

              <div className="margin-15px">
                <p
                  className="sub-heading"
                  data-w-id="07f2d188-0f77-6fc0-b04c-7532349c8825"
                >
                  bringing you the finest platform directly to you.
                  <br />
                </p>
              </div>
            </div>
          </div>

          <div className="margin-block">
            <div className="author-quote">
              <div className="author-circle"></div>
              <div className="author-wrapper">
                <div className="content-inside">
                  <div className="_80-percent-block">
                    <Image alt="" width={120} height={41} src="/logo-1.png" />

                    <div className="margin-40px">
                      <p>
                        “We are talking about a platform that act as a medium to
                        scale and automate your business with aggregated and
                        individual know how”
                        <br />
                      </p>
                    </div>

                    <div className="margin-20px">
                      <h4>Sunil Kumar Mutaka, Technical Strategy</h4>
                    </div>
                  </div>
                </div>
                <div className="shape">
                  <Image alt="" width={750} height={352} src="/shape.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <div className="features-grid _50">
            <div className="boxes-grid">
              <div className="features-content">
                <Image
                  alt=""
                  width={50}
                  height={50}
                  src="/icons8-web-design-512.png"
                />
                <h3>
                  Professionally Designed Demos
                  <br />
                </h3>
                <p>
                  Pixel perfect & expertly crafted to meet standards.
                  <br />
                </p>
              </div>

              <div className="features-content">
                <Image
                  alt=""
                  width={50}
                  height={50}
                  src="/icons8-smartphone-tablet-512.png"
                />
                <h3>
                  Responsive On Any Device
                  <br />
                </h3>
                <p>
                  Showcase your site on all devices with confidence.
                  <br />
                </p>
              </div>

              <div className="features-content">
                <Image
                  alt=""
                  width={50}
                  height={50}
                  src="/icons8-online-support-512.png"
                />
                <h3>
                  Professional, World-Class Support
                  <br />
                </h3>
                <p>
                  We love what we do & who we do it for.
                  <br />
                </p>
              </div>

              <div className="features-content">
                <Image
                  alt=""
                  width={50}
                  height={50}
                  src="/icons8-view-quilt-512.png"
                />
                <h3>
                  Unlimited Layouts & Designs
                  <br />
                </h3>
                <p>
                  Design anything. The only limit is your imagination.
                  <br />
                </p>
              </div>
            </div>

            <div className="features-photo"></div>
          </div>
        </div>

        <div className="scribble-3">
          <Image alt="" width={60} height={60} src="/scribbles-5.png" />
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
                    We act fast with clear priorities. We value speed, but take
                    time to reflect when required.
                    <br />
                  </p>
                </div>

                <div className="list-item">
                  <div className="number-text">2</div>
                  <p>
                    <strong>We value diversity of thought. </strong>
                    We believe that a variety of ideas encourages newer and more
                    forward-thinking solutions. We leverage unique talents and
                    insights.
                    <br />
                  </p>
                </div>

                <div className="list-item no-bottom-line">
                  <div className="number-text">3</div>
                  <p>
                    <strong>We love our team. </strong>We support each other and
                    ask for help when we are stuck. We value a good laugh during
                    and outside of work. And yes, you can wear your pink unicorn
                    suit to work.
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
  );
}
