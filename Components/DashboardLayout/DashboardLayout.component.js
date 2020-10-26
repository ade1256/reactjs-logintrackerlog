import { Layout, Menu, Avatar } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const { Header, Sider, Content } = Layout;

const DashboardLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState(["1"]);
  const [user, setUser] = useState({})
  const router = useRouter();

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const logout = () => {
    localStorage.removeItem('user')
    router.push("/auth/login");
  }

  const onClickMenu = ({ keyPath }) => {
    setActiveMenu(keyPath);
    if (keyPath[0] === "3") {
      router.push("/dashboard/movies/add");
    }
    
    if (keyPath[0] === "2") {
      router.push("/dashboard/movies");
    }
    if (keyPath[0] === "1") {
      router.push("/dashboard");
    }

    if (keyPath[0] === "4") {
      router.push("/dashboard/movies/add-mass");
    }
  };

  useEffect(() => {
    if (router.pathname === "/dashboard/movies/add") {
      setActiveMenu(["3"]);
    }
    if (router.pathname === "/dashboard/movies") {
      setActiveMenu(["2"]);
    }
    if (router.pathname === "/dashboard") {
      setActiveMenu(["1"]);
    }
    if (router.pathname === "/dashboard/movies/add-mass") {
      setActiveMenu(["4"]);
    }

    if (localStorage.getItem("user") === null) {
      router.push("/auth/login");
    } else {
      setUser(JSON.parse(localStorage.getItem("user")))
    }
  }, []);
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="dark">
        <div className="logo" />
        <Menu theme="dark" mode="inline" selectedKeys={activeMenu}>
          <Menu.Item
            key="1"
            icon={<UserOutlined />}
            onClick={(e) => onClickMenu(e)}
          >
            Overview
          </Menu.Item>

          <Menu.Item
            key="5"
            icon={<LogoutOutlined />}
            onClick={() => logout()}
          >
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Avatar
            style={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
              right: "24px",
              position: "relative",
              top: "15px",
              float: 'right'
            }}
          >
            U
          </Avatar>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
