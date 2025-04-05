import { Menu } from "antd";

function AppHeader() {
  const items = [
    {
      key: "trang-chu",
      label: `TRANG CHỦ`,
    },
    {
      key: "gioi-thieu",
      label: `GIỚI THIỆU`,
    },
    {
      key: "thanh-lap-cong-ty",
      label: `THÀNH LẬP CÔNG TY`,
    },
    {
      key: "dau-tu-nuoc-ngoai",
      label: `ĐẦU TƯ NƯỚC NGOÀI`,
    },
    {
      key: "dich-vu-phap-luy",
      label: `DỊCH VỤ PHÁP LÝ KHÁC`,
    },
    {
      key: "blog-luat",
      label: `BLOG LUẬT`,
    },
    {
      key: "tuyen-dung",
      label: `TUYỂN DỤNG`,
    },
    {
      key: "lien-he",
      label: `LIÊN HỆ`,
    },
  ];

  return (
    <>
      <div className="demo-logo bg-black px-6 flex justify-center">
        <img
          src="https://novalaw.vn/wp-content/uploads/2021/10/logo-Nova-Law-black-e1636370203875.png"
          alt=""
          style={{
            height: "50px",
          }}
        />
      </div>

      <Menu
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items}
        style={{
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "15px",
          padding: "15px 0",
        }}
      />
    </>

    // <header>
    //   <nav class=" dark:bg-gray-900">
    //     <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
    //       <div
    //         class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
    //         id="mobile-menu-2"
    //       >
    //         <Menu theme="light" mode="horizontal" items={items} />
    //       </div>
    //     </div>
    //   </nav>
    // </header>
  );
}

export default AppHeader;
