import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <React.Fragment>
      <div>
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
        </ul>
      </div>

      <style jsx>{`
        div {
          height: 30px;
          background: grey;
        }

        ul {
          list-style: none;
          height: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        li {
          margin: 3em;
        }

        a {
          text-decoration: none;
          color: yellow;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Navbar;
