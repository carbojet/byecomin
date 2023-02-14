import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="footer white-bg">
      <div className="container">
        <div className="footer-gird">
          <div className="footer-column">
            <Link passHref href="/">
              <a className="footer-logo w-inline-block">
                <Image src="/byecom-logo.png" width={128} height={38} alt="" />
              </a>
            </Link>
            <div className="margin-25px">
              <p>Let’s Build The Future Of Hyperlocal Delivery Market Place</p>
            </div>
            {/* <div className='margin-30px'>
                            <a
                                href='../pages/sign-in.html'
                                className='button w-button'
                            >
                                Stay in Touch →
                            </a>
                        </div> */}
          </div>

          <div className="footer-column">
            <h4 className="footer-title dark-title">Useful Links</h4>
            <div className="margin-25px">
              <Link href="/">
                <a className="footer-link black">Home</a>
              </Link>

              <Link href="/career">
                <a className="footer-link black">Careers</a>
              </Link>

              <Link href="/contact">
                <a className="footer-link black">Contact</a>
              </Link>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-title dark-title">office</h4>
            <div className="margin-25px">
              <p>Mahavir Nagar, Stage-V Bhubaneswar - 751006, Odisha, India</p>
            </div>
            <div className="margin-25px">
              <p>
                #P- 477, #208 LOTUS COURT, Pune Satara Road, PUNE- 411009
                Maharashtra, India
              </p>
            </div>

            <div className="margin-30px">
              <p>
                <span style={{ fontWeight: "bold" }}>email: </span>
                <Link href="mailto:info@byecom.in" passHref>
                  <a>info@byecom.in</a>
                </Link>
                <br />
              </p>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-title dark-title">Follow</h4>
            <div className="margin-25px">
              <div className="social-wrapper left">
                <Link passHref href="#">
                  <a
                    className="
                                            social-icon
                                            only-left
                                            w-inline-block
                                        "
                  >
                    <Image src="/facebook.png" width={14} height={14} alt="" />
                  </a>
                </Link>

                <Link passHref href="#">
                  <a
                    className="
                                            social-icon
                                            only-left
                                            w-inline-block
                                        "
                  >
                    <Image src="/linkedin.png" width={14} height={14} alt="" />
                  </a>
                </Link>

                <Link passHref href="#">
                  <a
                    className="
                                            social-icon
                                            only-left
                                            w-inline-block
                                        "
                  >
                    <Image src="/instagram.png" width={15} height={15} alt="" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider white-bg"></div>

        <div className="copyright-flex">
          <p className="copyright gray">Copyright Byecom</p>
          <div className="copyright-dot"></div>
          <p className="copyright gray">
            Powered by &nbsp;
            <Link href="http://byecom.in/" target="_blank">
              Byecom
            </Link>
          </p>
        </div>
      </div>
      <div className="scribble-footer">
        <Image src="/scribbles-11.png" width={80} height={173} alt="" />
      </div>
    </div>
  );
}
