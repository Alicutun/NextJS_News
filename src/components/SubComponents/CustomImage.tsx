import Box from '@mui/material/Box';
import Image from 'next/image';
import React from 'react';

export const CustomImage: React.FC<{
  src?: string;
  sx?: any;
  style?: any;
  altImage?: string;
  onClick?: any;
}> = ({ src = '', sx = {}, style = {}, altImage = '', onClick }) => {
  return (
    <Box sx={sx} position="relative">
      <Image fill style={style} src={src} alt={altImage} onClick={onClick} />
    </Box>
  );
};
