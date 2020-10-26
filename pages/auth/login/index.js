import React, { useState, useEffect } from "react";
import { Form, Input, Button, notification } from "antd";
import { useRouter } from "next/router";
import { AUTH_LOGIN } from "../../../Services/Auth/auth.service";
import baseUrl from "../../../Config/baseUrl";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const history = useRouter();
  const onFinish = async (values) => {
    setLoading(true)
    const serviceLogin = await AUTH_LOGIN(values.email, values.password);
    if (serviceLogin.isLogin) {
      notification.success({
        message: "Sign in successfully",
      });
      history.push(baseUrl.DASHBOARD);
      localStorage.setItem("user", JSON.stringify(serviceLogin));
    } else {
      notification.error({
        message: `Email or password didn't match`,
      });
    }
    setLoading(false)
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    const getTrackUsersLocalStorage = () => {
      const localUsersLog = JSON.parse(localStorage.getItem("trackuserslog"));
      if (localUsersLog === null) {
        localStorage.setItem("trackuserslog", JSON.stringify([]));
      }
    };
    getTrackUsersLocalStorage();
  }, []);

  return (
    <div style={{ width: "50%", margin: "0 auto", marginTop: 80 }}>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Sign in
          </Button>
        </Form.Item>
      </Form>
      <div style={{ textAlign: "center" }}>
        <a href={baseUrl.REGISTER}>Don't have account ? Create an account</a>
      </div>
    </div>
  );
};

export default Login;
