import React, { useEffect, useState }   from 'react'
import { Button, Modal, Checkbox, Form, Input } from 'antd'

const Register = ({formopen,setformopen}) => {
  const [formdata,setformdata]=useState({
    username :"",
    password :"",
  });
  const handeldata =(e)=>{
    setformdata((set)=>({
      ...set,
      [e.target.name]:e.target.value,
    }));
  }
  useEffect(()=>{
    console.log(formdata);
  },[formdata])
  const handleOk = () => {
    console.log(formdata)
    setformopen(false);
  };
  const handleCancel = () => {
    setformopen(false);
  };
  return (
    <>
      <Modal title="Đăng kí tài khoản" open={formopen} onOk={handleOk} onCancel={handleCancel}  getContainer={false}>
           <input type="text" placeholder='username' name='username' onChange={handeldata} value={formdata.username} /> <br/>
           <input type='password' placeholder='password' name='password' onChange={handeldata} value={formdata.password} /><br />
      </Modal>
    </>
  );
}

export default Register;
