import type React from 'react';

export interface Tool {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  iconName: string;
  component: React.LazyExoticComponent<() => React.JSX.Element>;
  shortDescription?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  toolIds: string[];
}
