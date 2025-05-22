import { Alert, Button, Checkbox, Flex, Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { getUsers } from "../services/user.service";
const Login = () => {
  const navigate = useNavigate();
  const [arrayUsers, setArrayUsers] = useState([]);
  const [alter, setAlter] = useState(false);
  const [alterInfo, setAlterInfo] = useState({
    message: "Đăng nhập thất bại",
    description: "Bạn sai tài khoản hay mật khẩu",
    type: "error",
  });

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setArrayUsers(response.data);
    } catch (error) {
      alert(error.message);
    }
  };

  console.log(arrayUsers);
  const check = (values) => {
    const checkExits = arrayUsers.find(
      (item) => item.username === values.username
    );
    if (checkExits) {
      if (checkExits.password === values.password) {
        if (values.remember) {
          localStorage.setItem(
            "rememberme",
            JSON.stringify({
              username: values.username,
              password: values.password,
            })
          );
        } else {
          localStorage.removeItem("rememberme");
        }
        localStorage.setItem("userID", JSON.stringify({ ID: checkExits.id }));
        setAlterInfo({
          message: "Đăng nhập thành công !",
          description: `Chào mừng ${values.username} đã quay trở lại.`,
          type: "success",
        });
        setAlter(true);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setAlter(true);
      }
    } else {
      setAlter(true);
    }
  };
  const [form] = Form.useForm();
  useEffect(() => {
    fetchUsers();
    const remember = JSON.parse(localStorage.getItem("rememberme"));
    if (remember) {
      form.setFieldsValue({
        username: remember.username,
        password: remember.password,
        remember: true,
      });
    }
  }, []);
  return (
    <div className="login-container">
      {alter && (
        <Alert
          message={alterInfo.message}
          description={alterInfo.description}
          type={alterInfo.type}
          showIcon
          closable
          style={{
            marginBottom: 16,
            position: "fixed",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 999,
          }}
          onClose={() => {
            setAlter(false);
          }}
        />
      )}
      <div className="logo-login" onClick={() => navigate("/")}>
        <img
          src="https://play-lh.googleusercontent.com/ybWP3ZXnTGMfmZzc--Dt8LsCU8mtTh5VXWBFQU0Jf1225e-OSe-cdjsXXBb-p9BI1rui"
          alt=""
        />
      </div>
      <div className="login-container-on">
        <div className="login-content">
          <h3 className="login-title">Đăng nhập</h3>
          <Form
            form={form}
            name="login"
            initialValues={{ remember: false }}
            style={{ color: "white !important" }}
            onFinish={check}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: "Vui lòng nhập tài khoản!" }]}
            >
              <Input
                size="large"
                prefix={<UserOutlined />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
            >
              <Input
                size="large"
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Flex justify="space-between" align="center">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox style={{ color: "white" }}>Remember me</Checkbox>
                </Form.Item>
                <a href="" style={{ color: "white" }}>
                  Forgot password
                </a>
              </Flex>
            </Form.Item>

            <Form.Item style={{ color: "white", lineHeight: "20px" }}>
              <Button
                size="large"
                block
                style={{ backgroundColor: "red", color: "white", border: 0 }}
                htmlType="submit"
              >
                Log in
              </Button>
              Bạn chưa có tài khoản ? <a href="/register_new">Register now!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
