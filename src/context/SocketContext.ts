import { createContext } from 'react';
import { NetworkRequest } from '@/common';
import { Socket, io } from 'socket.io-client';

export const socket = io(`${NetworkRequest.BASE_URL}`, {
  path: '/stream',
  reconnectionDelayMax: 10000,
});

export interface SocketCoin {
  socket: Socket;
}

socket.on('connect', () => {
  socket.emit('authenticate');
  // console.log('SOCKET CONNECTED');
});

socket.on('authenticated', () => {
  socket.emit('join', {
    rooms: ['market-price'],
  });
});

export const SocketContext = createContext<SocketCoin>({} as SocketCoin);
