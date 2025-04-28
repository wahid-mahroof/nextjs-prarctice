"use client";

import axios from "axios";

export default function () {
  return (
    <div>
      Sign In
      <input type="text"></input>
      <input type="text"></input>
      <button
        onClick={async () => {
          const res = await axios.post("http://localhost:3000/api/signin", {
            username: "wahid",
            password: "123123",
          });
          localStorage.setItem("token", res.data.token);
        }}
      >
        Sign In{" "}
      </button>
    </div>
  );
}
