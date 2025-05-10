import React, { useEffect, useState } from "react";
import { Input, Col, Row, Button, Table, Spin } from "antd";
import {
  deleteUser,
  getUsers,
  registerService,
} from "../services/user.service";

const Register = ({ formopen, setformopen }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [arrayUsers, setArrayUsers] = useState([]);
  const handleRegister = async () => {
    const { username, password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      return alert("Xac nhan mat khau khong dung");
    }

    const payload = {
      username,
      password,
    };
    await registerService(payload);
    fetchDataUsers();
    setFormData({
      username: "",
      password: "",
      confirmPassword: "",
    });
    alert("Đăng kí thành công");
  };
  const fetchDataUsers = async () => {
    try {
      const response = await getUsers();
      setArrayUsers(response.data);
      console.log(arrayUsers);
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    fetchDataUsers();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Bạn có muốn xóa không?");
    if (!confirm) {
      return;
    }
    try {
      setLoading(true);
      await deleteUser(id);
      fetchDataUsers();
    } catch (error) {
      alert("Lỗi server");
    } finally {
      setLoading(false);
    }
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
      render: (text) => <a style={{ color: "red" }}>{text}</a>,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, item) => (
        <>
          <Button color="orange" onClick={() => handleDelete(item.id)}>
            Delete
          </Button>
          <Button color="orange">Update</Button>
        </>
      ),
    },
  ];
  return (
    <Spin spinning={loading}>
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
      <Table dataSource={arrayUsers} columns={columns}></Table>
    </Spin>
  );
};

export default Register;
