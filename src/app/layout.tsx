"use client";

import * as React from "react";
import { useState } from "react";

import { APP_FONT, APP_PAGE_LIST } from "@/common/constant";

import {AppPage, DefaultProps} from "../common/type";
import ThemeRegistry from "@/common/provider/material-ui/ThemeRegistry";
import StoreRegistry from "@/common/provider/react-query/StoreRegistry";
import TabBar from "../common/component/template/tab-bar";
import NavBar from "../common/component/template/nav-bar";

export default function RootLayout({ children }: DefaultProps) {
  const [pageInfo, setPageInfo] = useState<AppPage>(APP_PAGE_LIST.home);
  const click = () => console.log("Icon clicked");
  const tab = (selected: AppPage) => setPageInfo(selected);

  return (
      <html lang="en" className={APP_FONT.variable}>
      <body className={APP_FONT.className}>
      <ThemeRegistry>
        <StoreRegistry>
          <NavBar icon={pageInfo?.icon} onIconClick={click}>
          <NavBar.Title>{pageInfo?.title}</NavBar.Title>
              <NavBar.Description>{pageInfo?.description}</NavBar.Description>
          </NavBar>
          {children}
          <TabBar onTab={tab}>
            <TabBar.Button {...APP_PAGE_LIST.home} />
            <TabBar.Button {...APP_PAGE_LIST.community} />
            <TabBar.Button {...APP_PAGE_LIST.search} />
            <TabBar.Button {...APP_PAGE_LIST.notification} />
            <TabBar.Button {...APP_PAGE_LIST.settings} />
          </TabBar>
        </StoreRegistry>
      </ThemeRegistry>
      </body>
      </html>
  );
}
