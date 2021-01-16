import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

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
        <div className="icon">
          <FontAwesomeIcon icon={faShoppingCart} color={"grey"} size={"2x"} />
        </div>
      </nav>

      <style jsx>{`
        nav {
          height: 50px;
          background: #dabc97;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
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

        .icon {
          cursor: pointer;
          margin-right: 40px;
        }

        @media screen and (max-width: 500px) {
          nav {
            height: 130px;
            flex-direction: column;
          }

          ul {
            flex-direction: column;
            justify-content: space-evenly;
          }

          li {
            margin: 0 auto;
          }

          .icon {
            margin: 10px 0;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Navbar;
