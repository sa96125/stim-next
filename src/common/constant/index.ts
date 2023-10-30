import { Roboto } from "next/font/google";

// export const API_KEY= process.env.API_KEY as string;
// export const API_END_POINT= process.env.API_END_POINT as string;
// export const NEXTAUTH_URL= process.env.NEXTAUTH_URL as string;
// export const NEXTAUTH_SECRET= process.env.NEXTAUTH_SECRET as string;
// export const NAVER_CLIENT_ID= process.env.NAVER_CLIENT_ID as string;
// export const NAVER_CLIENT_SECRET= process.env.NAVER_CLIENT_SECRET as string;
// export const KAKAO_CLIENT_ID= process.env.KAKAO_CLIENT_ID as string;
// export const KAKAO_CLIENT_SECRET= process.env.KAKAO_CLIENT_SECRET as string;
// export const UPSTASH_REDIS_REST_URL = process.env.UPSTASH_REDIS_REST_URL  as string;
// export const UPSTASH_REDIS_REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN  as string;

export const APP_FONT = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const APP_PAGE_LIST = {
  home: {
    id: 1,
    title: "Home",
    description: "",
    href: "/",
    icon: "/",
  },
  community: {
    id: 2,
    title: "Community",
    description: "",
    href: "/community",
    icon: "/",
  },
  search: {
    id: 3,
    title: "Search",
    description: "",
    href: "/search",
    icon: "/",
  },
  notification: {
    id: 4,
    title: "Notification",
    description: "",
    href: "/notification",
    icon: "/",
  },
  settings: {
    id: 5,
    title: "Settings",
    description: "",
    href: "/settings",
    icon: "/",
  },
};


