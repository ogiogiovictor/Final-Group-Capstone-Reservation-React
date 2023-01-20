import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser, selectAllUsers } from "../../redux/user/userSlice";
import Modal from "../UI/Modal";

const Login = (props) => {
  const [userLogin, setUserLogin] = useState({ name: "" });
  const { users } = useSelector(selectAllUsers);

  const onChange = (e) => {
    setUserLogin((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userName = [];
    users.map((user) => {
      Object.values(user).map((username) => {
        userName.push(username);
      });
    });

    if (userName.includes(userLogin.name)) {
      localStorage.setItem("username", JSON.stringify(userLogin.name));
      alert("login Successful");
      window.location.reload();
    } else alert("invalid user details");
  };

  return (
    <Modal onClose={props.onClose}>
      <Fragment>
        <h2>Login with username (username is case sensitive) </h2>
        <hr />
        <div className="container-fluid">
          <form onSubmit={onSubmit}>
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-2 col-form-label">
                Name
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="email"
                  value={userLogin.name}
                  placeholder="username"
                  onChange={onChange}
                />
              </div>
            </div>
            <br />
            <br />

            <div class="form-group row">
              <button type="submit" class="btn btn-block btn-vespa">
                Login
              </button>
            </div>
          </form>
        </div>
      </Fragment>
    </Modal>
  );
};

export default Login;
