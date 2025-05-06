import React, { useEffect, useState } from "react";
import { Input, Col, Row, Button } from "antd";

const Register = ({ formopen, setformopen }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [arrayUsers, setArrayUsers] = useState([]);
  const handleRegister = () => {
    const { username, password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      return alert("Xac nhan mat khau khong dung");
    }
    const checkExits = arrayUsers.filter(
      (item) => item.username === formData.username
    );
    console.log({ checkExits: checkExits.length });
    if (checkExits.length > 0) {
      return alert("Username da ton tai");
    }
    const payload = {
      username,
      password,
    };
    arrayUsers.push(payload);
    localStorage.setItem("users", JSON.stringify(arrayUsers));

    setFormData({
      username: "",
      password: "",
      confirmPassword: "",
    });
    alert("Đăng kí thành công");
  };
  useEffect(() => {
    const dataUsersLocalStorage = JSON.parse(localStorage.getItem("users"));
    if (dataUsersLocalStorage) {
      setArrayUsers(dataUsersLocalStorage);
    } else {
      setArrayUsers([]);
    }
  }, []);
  return (
    <>
      <h3>Register</h3>
      <Row gutter={[12, 12]}>
        <Col span={24}>
          {" "}
          <Input
            value={formData.username}
            placeholder="Username"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, username: e.target.value }))
            }
          />{" "}
        </Col>
        <Col span={24}>
          {" "}
          <Input
            value={formData.password}
            placeholder="Password"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </Col>
        <Col span={24}>
          {" "}
          <Input
            value={formData.confirmPassword}
            placeholder="Confirm password"
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              }))
            }
          />
        </Col>
        <Col span={12}>
          <Button onClick={handleRegister}>Register</Button>
        </Col>
      </Row>
    </>
  );
};

export default Register;
