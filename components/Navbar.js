import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href={"/about"}>
              <a>About</a>
            </Link>
          </li>
          <li>
            <a>Products</a>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        nav {
          height: 50px;
          background: #dabc97;
        }

        ul {
          list-style: none;
          height: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        li {
          margin: 3em;
        }

        a {
          text-decoration: none;
          color: black;
          font-size: 1.6rem;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Navbar;
