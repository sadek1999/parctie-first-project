
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
        "no-unused-vers":"error",
        "no-undef":'error',
        "prefer-const": "error",
        "no-console":"warn"
    }
},
{
    languageOptions: {
        globals: {
            ...globals.node
        }
    }
}
);