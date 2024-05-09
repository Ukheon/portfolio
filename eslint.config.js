/* eslint-disable */
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReactConfig,
    {
        languageOptions: { globals: globals.browser },
        rules: {
            // JSX 사용시 React 선언하지 않아도 동작
            'react/react-in-jsx-scope': 0,

            // 선언후 미사용 금지, 함수 파라미터는 예외
            'no-unused-vars': [2, { args: 'none' }],
            '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],

            // 매개변수 개수 최대 3개로 제한
            'max-params': [1, 3],

            // 선언전 사용금지
            // 'no-use-before-define': 2,

            // 중복모듈 가져오기 금지
            'no-duplicate-imports': 2,

            // array map 메소드사용시 return 필수
            'array-callback-return': 2,

            // 매직넘버 미사용 권고
            'no-magic-numbers': 1,

            // 체인선언 금지
            'no-multi-assign': 2,

            // 매개변수 재할당 금지
            'no-param-reassign': 2,

            // 비동기처리시 await 필수로 설정
            'require-await': 2,

            // 줄주석 위로
            'line-comment-position': [2, 'above'],

            // *AUTO FIX 가능
            // 객체안 속성 접근시 점표기법 사용
            'dot-notation': 2,

            // 배열, 객체안의 값을 할당하기 위해 구조분해 할당 사용
            'prefer-destructuring': [
                'error',
                {
                    array: true,
                    object: true,
                },
            ],

            // 할당 연산자 약어를 요구 ex) x = x + y (no), x += y (yes)
            'operator-assignment': [2, 'always'],

            // var 금지
            'no-var': 2,

            // 화살표 함수사용시 스코프 생성 필수
            // 'arrow-body-style': [2, 'always'],

            // Equal Operator(비교연산자) 대신, Strict Equal Operator 연산자만 사용
            eqeqeq: 2,

            // console.log 사용 금지. 프로덕션 환경에선 console.log가 존재할 필요는 없음. 단 console.warn, console.error는 상황에 따라서 사용가능하게 설정
            'no-console': [2, { allow: ['warn', 'error'] }],

            // 조건문 else에서 리턴 금지
            'no-else-return': 2,

            // else에 하나의 if문 금지
            'no-lonely-if': 2,
        },
    },
];
