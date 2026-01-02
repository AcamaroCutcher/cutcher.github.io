import type { NextConfig } from "next";
import createMDX from '@next/mdx';
import rehypeKatex from 'rehype-katex';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

const nextConfig: NextConfig = {
  // For GitHub Pages deployment
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  // Enable MDX
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  // React compiler for better performance
  reactCompiler: true,
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [rehypeKatex, rehypePrism],
  },
});

export default withMDX(nextConfig);
