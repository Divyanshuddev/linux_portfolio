import React from 'react';
import SvgIcon, {type SvgIconProps } from '@mui/material/SvgIcon';

export const SourceControlIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    {/* Left vertical branch line */}
    <path 
      d="M7 8.5V15.5" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
    />
    {/* Right branching path */}
    <path 
      d="M17 9.5 C 17 12 14 13.5 7 14" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
    />
    {/* Top-left node */}
    <circle cx="7" cy="6" r="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
    {/* Bottom-left node */}
    <circle cx="7" cy="18" r="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
    {/* Top-right node */}
    <circle cx="17" cy="7" r="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
  </SvgIcon>
);