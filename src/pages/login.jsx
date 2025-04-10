import { Button, Input, Modal } from "antd";
import React, { useState } from "react";

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div style={{ marginTop: "200px" }}>
      <Input
        placeholder="Basic usage"
        onChange={(e) => console.log(e.target.value)}
      />
      <Button onClick={showModal}>Click modal</Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default Login;
