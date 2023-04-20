import { BASE_URL } from "@/constant";
import { io } from "socket.io-client";

export const socket = io(`${BASE_URL}`, {
	path: "/stream",
	reconnectionDelayMax: 10000,
});
