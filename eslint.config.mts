// import js from "@eslint/js";
// import globals from "globals";
// import tseslint from "typescript-eslint";
// import pluginReact from "eslint-plugin-react";
// import { defineConfig } from "eslint/config";

// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
//   tseslint.configs.recommended,
//   pluginReact.configs.flat.recommended,
// ]);

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';

export default tseslint.config(js.configs.recommended, ...tseslint.configs.recommended, {
  plugins: {
    react: reactPlugin,
  },
  settings: {
    react: {
      version: 'detect', // 리액트 버전 자동 감지
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off', // import React 생략 허용
    'react/jsx-uses-react': 'off', // import React 생략 허용
    'no-unused-vars': 'warn', // 미사용 변수 경고
  },
});
