import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-homepage/', // ← GitHubリポジトリ名に合わせる
  plugins: [react()],
});
