import { createContext } from 'react';
import { BASE_URL } from '@/common';
import { Socket, io } from 'socket.io-client';

export const socket = io(`${BASE_URL}`, {
  path: '/stream',
  reconnectionDelayMax: 10000,
});

export interface SocketCoin {
  socket: Socket;
}

export const SocketContext = createContext<SocketCoin>({} as SocketCoin);
