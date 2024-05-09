export type SkillData = {
    title: string;
    contents: {
        name: string;
        info: string;
        image: string;
    }[];
};

export type SkillListData = {
    frontend: SkillData;
    devOps: SkillData;
};

export const SKILL_DATA: SkillListData = {
    frontend: {
        title: '# Frontend',
        contents: [
            {
                name: 'HTML',
                info: '시멘틱 태그를 이용해 마크업 할 수 있습니다.',
                image: '/assets/skill/html.png',
            },
            {
                name: 'CSS',
                info: 'flex, grid를 사용하여 반응형 웹서비스에 적용할 수 있습니다.',
                image: '/assets/skill/css3.png',
            },
            {
                name: 'JavaScript',
                info: 'ES6 문법에 익숙하고, DOM을 이해하며 SPA를 구축 할 수 있습니다.',
                image: '/assets/skill/js.png',
            },
            {
                name: 'TypeScript',
                info: 'Typescript를 경험한 이후 모든 프로젝트에서 사용중이며, 인텔리센스 기능을 활용해 생산성을 높이고 정적타입을 추가하여 유지보수에 신경씁니다.',
                image: '/assets/skill/typescript.png',
            },
            {
                name: 'React',
                info: '범용적이고 재사용 가능한 컴포넌트 설계가 가능합니다. hook, redux를 사용해 상태관리를 할 수 있습니다.',
                image: '/assets/skill/reactjs.png',
            },
            {
                name: 'Next.js',
                info: 'Page Router기반 getInitialProps, getServerSideProps 등의 주요 기능을 활용하여 서비스를 개발했습니다.',
                image: '/assets/skill/nextjs.png',
            },
            {
                name: 'jQuery',
                info: 'DOM 조작하는 메소드에 익숙하며 slick, date-picker 라이브러리를 사용해본 경험이 있습니다.',
                image: '/assets/skill/jquery.png',
            },
        ],
    },
    devOps: {
        title: '# devOps',
        contents: [
            {
                name: 'Jira',
                info: 'Jira를 사용하여 작업의 우선순위를 관리하고, 이슈를 관리할 수 있습니다.',
                image: '/assets/skill/jira.png',
            },
            {
                name: 'Bitbucket',
                info: 'Jira와 함께 사용해 이슈를 연동하고 소스코드를 관리할 수 있습니다.',
                image: '/assets/skill/bitbucket.png',
            },
            {
                name: 'AWS',
                info: 'EC2, LightSail 클라우드 서비스를 사용할 수 있으며, CloudFront 서비스를 이용해 글로벌 서비스를 배포했습니다.',
                image: '/assets/skill/aws.png',
            },
            {
                name: 'vsCode',
                info: 'ESLint, Prettier 설정을 통해 코딩 컨벤션을 유지하며 sinppets를 사용하여 생산성을 높입니다.',
                image: '/assets/skill/vscode.png',
            },
        ],
    },
};
