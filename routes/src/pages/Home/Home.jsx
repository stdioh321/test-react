import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/posts">posts </Link>
        </li>
        {/* <li>
          <Link to="/comments">comments </Link>
        </li>
        <li>
          <Link to="/albums">albums </Link>
        </li>
        <li>
          <Link to="/photos">photos </Link>
        </li>
        <li>
          <Link to="/todos">todos </Link>
        </li>
        <li>
          <Link to="/users">users </Link>
        </li> */}
      </ul>
    </div>
  );
}
