import { IDataSocket } from '@/common';
import { useState } from 'react';
import { socket } from './SocketContext';

export const useDataSocket = () => {
  const [dataSocket, setDataSocket] = useState<IDataSocket[]>([]);

  socket?.on('market-price', (args) => {
    console.log('args', args);
    setDataSocket(args);
  });

  return { dataSocket };
};
