import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState();
  //   console.log("styles", styles)
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <>
      <div
        data-collapse="medium"
        data-animation="default"
        data-duration="400"
        data-w-id="0b6d58b7-c8f6-c4c2-5d56-04a30b2a6532"
        role="banner"
        className="navigation no-color w-nav"
      >
        <div className="container grid w-container">
          <div id="w-node-04a30b2a6534-0b2a6532" className="flex-center">
            <Link passHref href="/" className="brand left-margin w-nav-brand">
              <a>
                <Image
                  width={150}
                  height={45}
                  alt="byecom logo"
                  src="/byecom-logo.png"
                />
              </a>
            </Link>
          </div>

          <div id="w-node-04a30b2a6534-0b2a6533" className="flex-center">
            <nav role="navigation" className="nav-menu w-nav-menu">
              <Link href="/career">
                <a className="nav-link w-nav-link">Careers</a>
              </Link>
              <Link href="/contact">
                <a className="nav-link w-nav-link">Contact</a>
              </Link>
            </nav>
          </div>

          {/* <div id="w-node-04a30b2a6592-0b2a6532" className="flex-center">
            <div className="menu-button w-nav-button">
              <div className="line-1"></div>
              <div className="line-3"></div>
              <div className="line-2"></div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="sabya">
        <nav>
          <div>
            <Link passHref href="/" className="brand left-margin w-nav-brand">
              <Image
                width={150}
                height={45}
                alt="byecom logo"
                src="/byecom-logo.png"
              />
            </Link>
          </div>
          {(toggleMenu || screenWidth > 500) && (
            <ul className="list">
              <li className="items">
                <Link href="/career" passHref>
                  <a style={{ textDecoration: "none" }}>Careers</a>
                </Link>
              </li>

              {/* <li className="items">Services</li> */}

              <li className="items">
                <Link href="/contact" passHref>
                  <a style={{ textDecoration: "none" }}>Contact</a>
                </Link>
              </li>
            </ul>
          )}
          <div>
            <button onClick={toggleNav} className="btn">
              <div className={!toggleMenu ? "container" : "change"}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </div>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
