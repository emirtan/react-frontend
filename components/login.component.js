import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Tekrar hoş geldin!</h3>

        <div className="form-group">
          <label>E-POSTA VEYA TELEFON NUMARASI</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>ŞİFRE</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <p className="create-new-account">
          Bir hesaba mı ihtiyacın var? <a href="#">Kaydol</a>
        </p>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    );
  }
}
