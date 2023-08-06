import { IncrementalCache } from "next/dist/server/lib/incremental-cache";
import Link from "next/link";
import React from "react";
import { GET_ALL_POSTS } from "../graphql/queries";

export default function Nav() {
  return (
    <header>
      <nav className="nav container">
        <div class="menu menu-dropdown">
          <Link className="link-item" href="/">
            Home
          </Link>
          <Link className="link-item" href="#">
            About
          </Link>
          <Link className="link-item" href="#">
            Skills
          </Link>
          <Link className="link-item" href="#">
            Work
          </Link>
          <Link className="link-item" href="#">
            Contact
          </Link>
        </div>
        <div className="menu-icon">
          <box-icon name="menu"></box-icon>
        </div>
      </nav>
    </header>
  );
}

