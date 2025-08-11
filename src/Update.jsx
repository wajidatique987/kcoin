import React from "react";
import "./Update.css";
import profile from "./assets/images/Profile.png";
const Update = () => {
  return (
    <div>
      <div className="container">
        <div className="header">Update Profile</div>

        <div className="avatar-container">
          <div className="avatar">
            <img src={profile} alt="Avatar" />
          </div>
        </div>

        <div className="form-group">
          <label>Full Name</label>
          <input type="text" value="Paul Jackson" />
        </div>

        <div className="form-group">
          <label>Username</label>
          <input type="text" value="@paul1234" />
        </div>

        <div className="form-group">
          <label>Bio</label>
          <textarea rows="3">
            Explorer of ideas, builder of connections. Here to share, learn, and
            grow. 🚀 Let’s make something amazing together!
          </textarea>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" value="youremail@domain.com" />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <div className="phone-container">
            <input type="tel" value="123-456-7890" />
          </div>
        </div>

        <div className="form-group">
          <label>Country</label>
          <select>
            <option>United States</option>
            <option>Canada</option>
            <option>India</option>
          </select>
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
};

export default Update;
