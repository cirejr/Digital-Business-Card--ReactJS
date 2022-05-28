import React from "react";
import pfp from "../assets/anime-boy-pfp.jpg";

export default function Info() {
  return (
    <div className="Info">
      <img src={pfp} />
      <div className="texts">
        <h3>Ciré Jr</h3>
        <h5>Frontend Developer</h5>
        <p>& Mobile Developer</p>
      </div>
      <div className="btn">
        <button>
          <i class="fas fa-envelope"></i> Email
        </button>
        <button>
          <i class="fa-brands fa-linkedin"></i> linkedin
        </button>
      </div>
    </div>
  );
}
