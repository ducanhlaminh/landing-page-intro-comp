import React from "react";
import AppHeader from "../AppHeader";
import AppFooter from "../AppFooter";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Layout, Menu } from "antd";

const AppLayout = ({ children }) => {
  return (
    <>
      <Layout>
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <main className="bg-black">{children}</main>
        </Content>
        <Footer>
          <AppFooter />
        </Footer>
      </Layout>
    </>
  );
};

export default AppLayout;
