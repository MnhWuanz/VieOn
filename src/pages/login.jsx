import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import FormItem from "antd/es/form/FormItem";
const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [arrayUsers, setArrayUsers] = useState([]);
  const check = () => {
    const checkExits = arrayUsers.find(
      (item) => item.username === data.username
    );
    console.log(checkExits);
    if (checkExits) {
      if (checkExits.password === data.password) {
        localStorage.setItem("user", JSON.stringify(checkExits));
        navigate("/");
        return alert("Đăng nhập thành công");
      } else {
        return alert("Sai tài khoản hay mật khẩu");
      }
    } else {
      return alert("Sai tài khoản hay mật khẩu");
    }
  };
  useEffect(() => {
    const dataUserLocalStorage = JSON.parse(localStorage.getItem("users"));
    if (dataUserLocalStorage) {
      setArrayUsers(dataUserLocalStorage);
    } else {
      setArrayUsers([]);
    }
  }, []);
  return (
    <div className="login-container">
      <div className="login-container-on">
        <div className="login-content">
          <h3 className="login-title">Đăng nhập</h3>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Vui lòng nhập tài khoản của bạn!" },
              ]}
            >
              <Input
                placeholder="UserName"
                onChange={(e) =>
                  setData((prev) => ({ ...prev, username: e.target.value }))
                }
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
            >
              <Input.Password
                placeholder="Password"
                onChange={(e) =>
                  setData((prev) => ({ ...prev, password: e.target.value }))
                }
              />
            </Form.Item>
            <FormItem>
              <Link to="/register">Bạn chưa có tài khoản ?</Link>
            </FormItem>

            <Form.Item>
              <Button type="primary" htmlType="submit" onClick={check}>
                Đăng Nhập
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
