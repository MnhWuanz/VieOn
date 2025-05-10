import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/header.css";
import {
  DownOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

import {
  Alert,
  Avatar,
  Button,
  Dropdown,
  Form,
  Input,
  message,
  Modal,
  Popconfirm,
  Space,
  Table,
} from "antd";
import {
  deleteUser,
  getUserId,
  getUsers,
  updateUser,
} from "../services/user.service";

const Header = ({ numberFlim }) => {
  const navigate = useNavigate();
  const [user, setuser] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [arrayUsers, setArrayUsers] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [alter, setAlter] = useState(false);
  const [isAlterInFo, setIsAlterInfo] = useState({
    message: "",
    description: "",
    type: "",
  });
  const fetchDataUser = async () => {
    try {
      if (!user?.ID) {
        return;
      } else if (user.ID == 1) {
        const response = await getUserId(user.ID);
        setArrayUsers(response.data);
      } else if (user.ID != 1) {
        const response = await getUserId(user.ID);
        setArrayUsers([response.data]);
      }
    } catch (error) {
      setIsAlterInfo({
        message: "Thông báo",
        description: error.message,
        type: "warning",
      });
      setAlter(true);
    }
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const storedUse = localStorage.getItem("userID");
    if (storedUse) {
      setuser(JSON.parse(storedUse));
    }
  }, []);
  useEffect(() => {
    if (user) {
      fetchDataUser();
    }
  }, [user]);
  console.log(arrayUsers);
  const listMenu = [
    {
      label: "Trang chủ",
      url: "/",
    },
    {
      label: "Truyền hình",
      url: "truyen-hinh",
    },
    {
      label: "HBO GO",
      url: "hbo-go",
    },
    {
      label: "Thể Thao",
      url: "the-thao",
    },
    {
      label: "Thiếu nhi",
      url: "thieu-nhi",
    },
  ];
  const items = [
    {
      key: "account",
      label: (
        <span style={{ fontWeight: "bold" }}>
          {user?.ID == 1 ? "Admin" : user?.usernam || "My account"}
        </span>
      ),
      disabled: true,
    },
    {
      type: "divider",
    },
    user && {
      key: "Profile",
      label: user?.ID == 1 ? "Quản lý" : "Hồ sơ",
    },
    {
      key: user ? "Logout" : "Sign In",
      label: (
        <span style={{ color: user ? "red" : "green", fontWeight: "500" }}>
          {user ? "Đăng xuất" : "Đăng Nhập"}
        </span>
      ),
    },
  ];
  const handleDelete = async (id, confirm) => {
    if (!confirm) {
      return;
    }
    try {
      await deleteUser(id);
      fetchDataUser();
    } catch (error) {
      alert("Lỗi server");
    } finally {
    }
  };
  const handleUpdate = async (values) => {
    try {
      await updateUser(editUser.id, values);
      fetchDataUser();
      setIsEditModalOpen(false);
      setIsAlterInfo({
        message: "Thông báo",
        description: `Cập nhật ${values.username} thành công`,
        type: "success",
      });
      setAlter(true);
    } catch (error) {
      setIsAlterInfo({
        message: "Thông báo",
        description: `Cập nhật không thành công`,
        type: "error",
      });
    }
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
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
          <Popconfirm
            title={`Bạn có muốn xóa ${item.username} `}
            onConfirm={() => handleDelete(item.id, true)}
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
            okText="Yes"
            cancelText="No"
          >
            <Button color="orange">Delete</Button>
          </Popconfirm>

          <Button
            color="orange"
            onClick={() => {
              setEditUser(item);
              form.setFieldsValue({
                username: item.username,
                password: item.password,
              });
              setIsEditModalOpen(true);
            }}
          >
            Update
          </Button>
        </>
      ),
    },
  ];
  const handelLogout = () => {
    localStorage.removeItem("userID");
    setIsAlterInfo({
      message: "Thông báo",
      description: "Đăng xuất thành công",
      type: "info",
    });
    setAlter(true);
    setuser(null);
    navigate("/");
  };
  const handelMenuClick = ({ key }) => {
    if (key === "Logout") handelLogout();
    else if (key === "Sign In") navigate("/login");
    else if (key === "Profile" || key === "Admin") {
      setIsModalOpen(true);
    }
  };
  const [form] = Form.useForm();
  const [editUser, setEditUser] = useState(null);
  return (
    <div className="header-container">
      {alter && (
        <Alert
          message={isAlterInFo.message}
          description={isAlterInFo.description}
          type={isAlterInFo.type}
          showIcon
          closable
          style={{
            marginBottom: 16,
            position: "fixed",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1001,
          }}
          onClose={() => {
            setAlter(false);
          }}
        />
      )}
      <div className="logo" onClick={() => navigate("/")}>
        <img
          src="https://play-lh.googleusercontent.com/ybWP3ZXnTGMfmZzc--Dt8LsCU8mtTh5VXWBFQU0Jf1225e-OSe-cdjsXXBb-p9BI1rui"
          alt=""
        />
      </div>
      <div className="menu">
        <ul>
          {listMenu.map((item) => {
            return <Link to={item.url}>{item.label}</Link>;
          })}
        </ul>
      </div>
      <div className="favortie-flim" onClick={() => navigate("/playlist")}>
        <div className="img-icon" style={{ width: "50px", height: "50px" }}>
          <img
            style={{ width: "100%" }}
            src="https://cdn-icons-png.flaticon.com/512/5075/5075090.png"
            alt="Lỗi"
            srcset=""
          />
        </div>
        <div className="number-tag">{numberFlim}</div>
      </div>
      <div className="form">
        <Dropdown menu={{ items, onClick: handelMenuClick }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </a>
        </Dropdown>
      </div>
      <Modal
        title="Thông tin"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <Table dataSource={arrayUsers} columns={columns}></Table>
      </Modal>
      <Modal
        title="Thông tin cập nhật"
        closable={false}
        open={isEditModalOpen}
        onOk={() => form.submit()}
        onCancel={() => setIsEditModalOpen(false)}
        okText="Save"
      >
        <Form form={form} onFinish={handleUpdate} layout="vertical">
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Vui lòng nhập username" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Header;
