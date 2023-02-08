import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';
import HeaderAlt from '../components/header-alt';
import Header from "../components/header";

export default function Career() {
    return (
      <Layout title="Career">
        <Header />
        <div className="sub-hero-section">
          <div className="container">
            <div className="hero-title-center flex-inner">
              <div className="tag-text">Hiring now</div>

              <div className="margin-20px">
                <h1 className="hero-title color-white">
                  {"We are "}
                  <span className="add-scribble-below">{" Hiring "}</span>
                  Now
                  <span className="add-scribble-below">‍</span>
                  <br />
                </h1>
              </div>
            </div>

            <div className="margin-70px">
              <div className="container">
                <div className="features-grid">
                  <div className="features-photo"></div>
                  <div className="boxes-grid">
                    <div className="features-content">
                      <Image
                        src="/icons8-web-design-512.png"
                        width={50}
                        height={50}
                        alt=""
                      />
                      <h3>
                        HR Executive
                        <br />
                      </h3>
                      <p>
                        Candidate must have any Degree & IT Recruiting Experience.
                        <br />
                      </p>
                    </div>
                    <div className="features-content">
                      <Image
                        src="/icons8-smartphone-tablet-512.png"
                        width={50}
                        height={50}
                        alt=""
                      />
                      <h3>
                        Mobile App Developer
                        <br />
                      </h3>
                      <p>
                        Must have React Native with andriod and ios.
                        <br />
                      </p>
                    </div>
                    <div className="features-content">
                      <Image
                        src="/icons8-online-support-512.png"
                        width={50}
                        height={50}
                        alt=""
                      />
                      <h3>
                        Fullstack Developer 2
                        <br />
                      </h3>
                      <p>
                        Backend dev (nodejs, mongoDB & nuxtjs), Frontend dev
                        (reactjs, nextjs)
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
                        UI Designer
                        <br />
                      </h3>
                      <p>
                        Well Equiped with Adobe and all other graphic tool to
                        build web app and mobile templates.
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="scribble-2">
            <Image alt="" width={60} height={60} src="/scribbles-3.png" />
          </div>

          <div className="scribble-1">
            <Image alt="" width={120} height={120} src="/scribbles-2.png" />
          </div>
        </div>

        {/* <div className='section'>
                <div className='container'>
                    <div>
                        <div>
                            <div className='features-second-grid'>
                                <div className='features-content padding-box'>
                                    <Image
                                        alt=''
                                        width={50}
                                        height={50}
                                        src='/icons8-web-design-512.png'
                                    />
                                    <h3>
                                        Professionally Designed Demos
                                        <br />
                                    </h3>
                                    <p>
                                        Pixel perfect & expertly crafted to meet
                                        standards.
                                        <br />
                                    </p>
                                </div>

                                <div className='features-content padding-box'>
                                    <Image
                                        alt=''
                                        width={50}
                                        height={50}
                                        src='/icons8-smartphone-tablet-512.png'
                                    />

                                    <h3>
                                        Responsive On Any Device
                                        <br />
                                    </h3>
                                    <p>
                                        Showcase your site on all devices with
                                        confidence.
                                        <br />
                                    </p>
                                </div>

                                <div className='features-content padding-box'>
                                    <Image
                                        alt=''
                                        width={50}
                                        height={50}
                                        src='/icons8-online-support-512.png'
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
                            </div>
                        </div>

                        <div className='margin-50px'>
                            <div className='contribute-wrapper'>
                                <div className='tag-text'>New Features</div>
                                <p className='cookies-font check features-tag'>
                                    If you want to join the effort and help with
                                    the plugin, please
                                    <a href='#'> let us know</a>.
                                </p>
                            </div>
                        </div>

                        <div className='margin-block'>
                            <div className='illustrator-grid'>
                                <div className='illustration'>
                                    <Image
                                        alt=''
                                        width={575}
                                        height={492}
                                        src='/illustration-2.png'
                                    />
                                </div>

                                <div
                                    id='w-node-32e283d9392b-b54acc52'
                                    className='list-circle-wrapper'
                                >
                                    <div className='list-flex'>
                                        <div className='list-item'>
                                            <div className='number-text'>1</div>
                                            <p>
                                                <strong>
                                                    We have a bias for action.{' '}
                                                </strong>
                                                We act fast with clear
                                                priorities. We value speed, but
                                                take time to reflect when
                                                required.
                                                <br />
                                            </p>
                                        </div>

                                        <div className='list-item'>
                                            <div className='number-text'>2</div>
                                            <p>
                                                <strong>
                                                    We value diversity of
                                                    thought.{' '}
                                                </strong>
                                                We believe that a variety of
                                                ideas encourages newer and more
                                                forward-thinking solutions. We
                                                leverage unique talents and
                                                insights.
                                                <br />
                                            </p>
                                        </div>

                                        <div className='list-item no-bottom-line'>
                                            <div className='number-text'>3</div>
                                            <p>
                                                <strong>
                                                    We love our team.{' '}
                                                </strong>
                                                We support each other and ask
                                                for help when we are stuck. We
                                                value a good laugh during and
                                                outside of work. And yes, you
                                                can wear your pink unicorn suit
                                                to work.
                                                <br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        {/* <div className='get-started-section'>
                <div className='container'>
                    <div className='align-center'>
                        <h4 className='hero-title _50px'>Get Started</h4>
                        <div className='margin-15px'>
                            <p className='sub-heading'>
                                No credit card required!
                                <br />
                            </p>
                        </div>
                    </div>

                    <div className='subscribe-wrapper'>
                        <div className='w-form'>
                            <form
                                id='email-form'
                                name='email-form'
                                data-name='Email Form'
                                className='form'
                            >
                                <input
                                    type='text'
                                    className='
                                        text-field
                                        w-node-e45fd2118484-b54acc52 w-input
                                    '
                                    maxLength={256}
                                    name='Name'
                                    data-name='Name'
                                    placeholder='Enter your name'
                                    id='Name'
                                    required=''
                                />

                                <input
                                    type='email'
                                    className='
                                        text-field
                                        w-node-e45fd2118485-b54acc52 w-input
                                    '
                                    maxLength={256}
                                    name='Email'
                                    data-name='Email'
                                    placeholder='Enter your email'
                                    id='Email'
                                    required=''
                                />

                                <input
                                    type='submit'
                                    value='Get Started →'
                                    data-wait='Please wait...'
                                    className='button subscribe orange w-button'
                                />

                                <label
                                    id='w-node-e45fd2118487-b54acc52'
                                    className='w-checkbox checkbox-field'
                                >
                                    <div
                                        className='
                                            w-checkbox-input
                                            w-checkbox-input--inputType-custom
                                            checkbox
                                        '
                                    ></div>

                                    <input
                                        type='checkbox'
                                        id='checkbox'
                                        name='checkbox'
                                        data-name='Checkbox'
                                        required=''
                                        style={{
                                            opacity: 0,
                                            position: 'absolute',
                                            zIndex: -1,
                                        }}
                                    />

                                    <p className='cookies-font check'>
                                        By signing up you agree to our
                                        <a href='#'>Terms & Condition</a>.
                                    </p>

                                    <span className='checkbox-label w-form-label'>
                                        Checkbox
                                    </span>
                                </label>
                            </form>

                            <div className='success-message w-form-done'>
                                <div>
                                    Thank you! Your submission has been
                                    received!
                                </div>
                            </div>

                            <div className='error-message w-form-fail'>
                                <div>
                                    Oops! Something went wrong while submitting
                                    the form.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='or-line'>
                        <div className='or-block'>Or</div>
                    </div>

                    <div className='social-wrapper'>
                        <Link href='#'>
                            <a className='social-icon w-inline-block'>
                                <Image
                                    alt=''
                                    width={14}
                                    height={14}
                                    src='/facebook.png'
                                />
                            </a>
                        </Link>

                        <Link href='#'>
                            <a className='social-icon w-inline-block'>
                                <Image
                                    alt=''
                                    width={14}
                                    height={14}
                                    src='/twitter.png'
                                />
                            </a>
                        </Link>

                        <Link href='#'>
                            <a className='social-icon w-inline-block'>
                                <Image
                                    alt=''
                                    width={15}
                                    height={15}
                                    src='/instagram.png'
                                />
                            </a>
                        </Link>
                    </div>
                </div>

                <div className='scribble-3'>
                    <Image
                        alt=''
                        width={120}
                        height={120}
                        src='/scribbles-7.png'
                    />
                </div>
            </div> */}
      </Layout>
    );
}
