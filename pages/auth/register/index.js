import React, { useState, useEffect } from "react";
import { Form, Input, Button, notification } from "antd";
import { useRouter } from "next/router";
import { useGlobalState } from "../../../globalState";
import baseUrl from "../../../Config/baseUrl";
import { EMAIL_CHECK_DUPLICATE } from "../../../Services/Auth/auth.service";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [stateUsers, setStateUsers] = useGlobalState("users");
  const history = useRouter();

  useEffect(() => {
    const getUsersFromLocalStorage = () => {
      const localUsers = JSON.parse(localStorage.getItem("users"));
      if (localStorage.getItem("users") !== null) {
        setStateUsers(localUsers);
      } else {
        setStateUsers([]);
        localStorage.setItem("users", JSON.stringify([]));
      }
    };

    const getTrackUsersLocalStorage = () => {
      const localUsersLog = JSON.parse(localStorage.getItem("trackuserslog"));
      if (localUsersLog === null) {
        localStorage.setItem("trackuserslog", JSON.stringify([]));
      }
    };
    getUsersFromLocalStorage();
    getTrackUsersLocalStorage();
  }, []);

  const onFinish = async (values) => {
    setLoading(true);
    const isEmailExist = await EMAIL_CHECK_DUPLICATE(values.email);
    if (isEmailExist) {
      notification.error({
        message: "Email exist",
      });
    } else {
      let users = stateUsers;
      users.push(values);
      localStorage.setItem("users", JSON.stringify(users));
      notification.success({
        message: "Success create user",
        description: "Now you can sign in",
      });
      history.push(baseUrl.LOGIN);
    }
    setLoading(false);
  };

  const validatorPassword = async (rule, value) => {
    if (value.length < 5) {
      return Promise.reject("Password minimum 5 character !!");
    }
  };
  return (
    <div style={{ width: "50%", margin: "0 auto", marginTop: 80 }}>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            {
              type: "email",
              message: "Please input valid email !!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            {
              validator: validatorPassword,
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Create account
          </Button>
        </Form.Item>
      </Form>
      <div style={{ textAlign: "center" }}>
        <a href={baseUrl.LOGIN}>Already have account ? Sign in</a>
      </div>
    </div>
  );
};

export default Register;
