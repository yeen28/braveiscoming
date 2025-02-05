import { defineConfig } from "vitest/config";
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
    plugins: [sveltekit()],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080', // BE 서버 주소
                changeOrigin: true, // BE 서버의 CORS를 우회하기 위해서 필요할 수 있습니다.
                rewrite: (path) => path.replace(/^\/api/, '') // /api 경로를 제거하고 백엔드에 전달
            }
        }
    },
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
});
