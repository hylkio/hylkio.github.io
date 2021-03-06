import "../App.css";
import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="mailto:mirosopa@gmail.com">Email</a>
          </li>
          <li>
            <a href="https://github.com/sopanem">Github</a>
          </li>
          <li>
            <a href="https://twitter.com/sopanenm">Twitter</a>
          </li>
          <li>
            <a href="https://sopanem.github.io/blog">Blog</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
