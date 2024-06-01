import { getCookie } from "cookies-next";

import { USER_TOKEN_KEY } from "@/constants";

export const getToken = () => getCookie(USER_TOKEN_KEY) || "";
