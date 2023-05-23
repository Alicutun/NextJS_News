import Box from '@mui/material/Box';
import Image from 'next/image';
import React from 'react';

export const CustomImage: React.FC<{
  src?: string;
  sx?: any;
  style?: any;
  altImage?: string;
  onClick?: any;
}> = ({
  src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEXd3d1WVlZPT0/h4eHl5eWioqJHR0dUVFTb29tYWFji4uKdnZ2jo6NOTk5fX1+IiIjCwsKurq7Nzc1jY2PIyMi3t7d1dXWXl5dpaWlubm6EhIS9vb2QkJB+fn7V1dWysrKi/9NEAAADNUlEQVR4nO3bbXOiMBSGYZKoIREQ8K1W2/3//3JP0PrS2VakO+Me9r6+tEPLDE8Tk5OQZhkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+F264Zz96P64upgPVKiLmC+/tIN76xbOfvgc3tT54M4y303+/FSeVMSEMTBh8NXl2gLsmsxSvnD2uTDfONCSU56zqyePqSk9CO5/kj96XZ3Fr9SQsXJ49mDHP3FxRwt4j4nmad7lTl7BHG8ZsXRRNeypl1CW8LzZLW8pMv2hj+nOML2Hceu+DCca+rNLvjy5hbLwNIUhGYzfjbMOll9onlT/Sio0bX0K3tv5c3PldHGHCogyn+lW+2FEmtObSiCnY6BI29mMJIsNNNcY2bO15yeTLg/aRJj1/1l27VDpuYU2aDWW+8GGlO6FLZXVbr3IpPq+uti/WdAm9nSuf8fP0qatm5jW7uRxXG+tlpijD/Fh8600oYfaS5fhpu5AmbXZ2Vh1W+itvVx/3pmaHTzuiLsraPp6uuanKhN3I0u5sNzEEu3Xuy1WV0oRpDM3fyo+Zz08n+VczidaEMowefDhWLzJw2ubLCFoTyjA681cbqHYdj/001vPmZnBVmtC5vTXXfFjL/CghG1OWmyy7hFSaMFstb7f4g1/Wqb6RqSGE8nB1p9KE75vbJjRSwSz3efuaJnsTZtvLnToTurdUfN60YfosvgSbZkhZIJbzcySVCWUY9X96S3PpuKeI3T6NvoS5a0oTvn0RFaTXFnprmrjvVrffJpQf+l+nulRfwjSMBmO+fZkoEdP8oa+XRvku76rRO71UBpzgq336/agpYZGm+jfb812wRKzTKrnQlFB66bw0d3rodcTWZRNNbTh1rul2YXollMHI7lqn63M42XdDTM8TC2nNsXmPqnrpe/XggROJmGtKOP9cjfZoxvJV0T6Nqfr30I+EskpeGj0JvfEDTg15RQmHHIs63qEn4VAk/AeQcCQJh52+TBsbGhJWg4+XpjlUwfnSn50RLhWcEc7yxbBT3t1Jbw3nvH9yVr+o47Mfvp/R/78FAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/oLfhewm3WT98VMAAAAASUVORK5CYII=',
  sx = {},
  style = {},
  altImage = '',
  onClick,
}) => {
  return (
    <Box sx={sx} position="relative">
      <Image fill style={style} src={src} alt={altImage} onClick={onClick} />
    </Box>
  );
};
