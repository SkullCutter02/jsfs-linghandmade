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
            <Link href={"/products"}>
              <a>Products</a>
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        nav {
          height: 50px;
          background: #dabc97;
          width: 100%;
        }

        ul {
          list-style: none;
          height: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        li {
          margin: 4em;
        }

        a {
          text-decoration: none;
          color: black;
          font-size: 1.6rem;
          padding: 0.5em;
        }

        @media screen and (max-width: 500px) {
          nav {
            height: 100px;
          }

          ul {
            flex-direction: column;
            justify-content: space-evenly;
          }

          li {
            margin: 0 auto;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Navbar;
