
import React from 'react';

export interface NavLinkItem {
  name: string;
  path: string;
  external?: boolean;
}

export interface Feature {
  icon: React.ReactElement;
  title: string;
  description: string;
}

export interface IconProps {
  className?: string;
}
