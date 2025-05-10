import {
  Alert,
  Button,
  Checkbox,
  Col,
  Flex,
  Form,
  Input,
  message,
  Row,
} from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "../styles/register_new.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers, registerService } from "../services/user.service";
import Item from "antd/es/list/Item";

const Register_new = () => {
  const navigate = useNavigate();
  const [alter, setAlter] = useState(false);
  const [isAlterInfo, setIsAlterInfo] = useState({
    message: "",
    description: "",
    type: "",
  });
  const [arrayUsers, setArrayUsers] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const fetchDataUsers = async () => {
    try {
      const response = await getUsers();
      setArrayUsers(response.data);
    } catch (error) {
      alter(error.message);
    }
  };
  useEffect(() => {
    fetchDataUsers();
  }, []);
  console.log(arrayUsers);
  const onFinish = async () => {
    const { username, password, confirmPassword } = formData;
    const existingUser = arrayUsers.find((user) => user.username === username);
    if (existingUser) {
      setIsAlterInfo({
        message: "Thông báo",
        description: "Tài khoản tồn tại",
        type: "info",
      });
      setAlter(true);
      return;
    }
    if (password !== confirmPassword) {
      setIsAlterInfo({
        message: "Thông báo",
        description: "Hai mật khẩu không khớp",
        type: "info",
      });
      setAlter(true);
      return;
    }

    try {
      const payload = {
        username,
        password,
      };
      await registerService(payload);
      setIsAlterInfo({
        message: "Thông báo",
        description: "Đăng kí thành công",
        type: "success",
      });
      setAlter(true);
      setFormData({
        username: "",
        password: "",
        confirmPassword: "",
      });
      fetchDataUsers();
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      setIsAlterInfo({
        message: "Lỗi",
        description: error.message || "Đăng ký thất bại",
        type: "error",
      });
    } finally {
      setAlter(true);
    }
  };
  return (
    <div className="register_container">
      {alter && (
        <Alert
          message={isAlterInfo.message}
          description={isAlterInfo.description}
          type={isAlterInfo.type}
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
      <div className="logo_register" onClick={() => navigate("/")}>
        <img
          src="https://play-lh.googleusercontent.com/ybWP3ZXnTGMfmZzc--Dt8LsCU8mtTh5VXWBFQU0Jf1225e-OSe-cdjsXXBb-p9BI1rui"
          alt=""
        />
      </div>
      <div className="register_container-on">
        <Row>
          <Col span={12} className="img_register"></Col>
          <Col span={12}>
            <div className="register_content">
              <h3 className="register_title">Đăng Ký</h3>
              <Form
                // form={form}
                name="login"
                initialValues={{ remember: false }}
                style={{ color: "white !important" }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: "Vui lòng nhập tài khoản!" },
                  ]}
                >
                  <Input
                    size="large"
                    prefix={<UserOutlined />}
                    placeholder="Username"
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        username: e.target.value,
                      }))
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Vui lòng nhập mật khẩu!" },
                  ]}
                >
                  <Input
                    size="large"
                    prefix={<LockOutlined />}
                    type="password"
                    placeholder="Password"
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="passwordComfrom"
                  rules={[
                    { required: true, message: "Vui lòng nhập mật khẩu!" },
                  ]}
                >
                  <Input
                    size="large"
                    prefix={<LockOutlined />}
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        confirmPassword: e.target.value,
                      }))
                    }
                  />
                </Form.Item>

                <Form.Item style={{ color: "white", lineHeight: "20px" }}>
                  <Button
                    size="large"
                    block
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      border: 0,
                    }}
                    htmlType="submit"
                  >
                    REGISTER
                  </Button>
                  Bạn đã có tài khoản ? <a href="/login">Sign now</a>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Register_new;
