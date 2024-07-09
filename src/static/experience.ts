type Contents = {
    text: string;
    assets?: string[];
    children?: string[];
};

export type ProjectData = {
    name: string;
    period: string;
    description: string;
    team: string;
    skill?: string;
    link?: string;
    contents?: Contents[];
};

export type CompanyData = {
    name: string;
    position: string;
    period: string;
};

type ExperienceData = {
    company: CompanyData;
    project?: ProjectData[];
};

export const EXPERIENCE_DATA: ExperienceData[] = [
    {
        company: {
            name: '주식회사 아도',
            position: '프론트엔드 / 백엔드 엔지니어',
            period: '2023.07 ~ 2024.02 (약 7개월)',
        },
        project: [
            {
                name: '인테리어 서비스 짓다',
                period: '2023.07 ~ 2024.02',
                link: 'https://zitda.co.kr/',
                team: '1인 개발',
                skill: 'Next.js, Typescript',
                description: '인테리어를 희망하는 고객들과 인테리어 작업자를 매칭시켜 주는 웹서비스입니다.',
                contents: [
                    {
                        text: '최대 100여 개의 사용자 입력데이터로 최대 300줄의 견적을 제공하는 자동견적 서비스를 개발했습니다.',
                        assets: [
                            '/assets/project/automatic1.png',
                            '/assets/project/automatic2.png',
                            '/assets/project/automatic3.png',
                            '/assets/project/automatic4.png',
                        ],
                        children: [
                            'jspdf를 사용해 pdf 다운로드 기능을 구현했습니다.',
                            'react-hook-form를 사용해 폼 관리를 했습니다. 요구하는 정보가 많아 섹션를 구분하는 과정에서 formContext를 활용해 값들을 공유했고, fieldArray를 활용해 동적으로 폼을 생성했습니다.',
                            '사용자가 선택한 정보마다 id를 부여해 서버에 보내고 id와 선택한 값을 조합해 매칭되는 견적을 반환하는 구조를 설계했습니다.',
                            '시장에 따라 변화하는 견적을 비개발자가 업데이트 할 수 있게 구글 시트에 저장되어 있는 데이터를 MongoDB로 연동해 업데이트된 견적 정보가 DB에 반영되게 설계했습니다.',
                        ],
                    },

                    {
                        text: 'react-quill을 사용하여 인테리어 정보글을 게시하기 위한 WYSIWYG 에디터를 구현했습니다.',
                        assets: ['/assets/project/editor.png', '/assets/project/blog.png'],
                        children: [
                            'datauri로 미리보기를 제공하고 제출 시 파일로 변환하여 서버에서 s3에 업로드하도록 구현했습니다.',
                            'dom에 의존하는 라이브러리로 서버 사이드에서 불러올 경우 document is not defined 이슈가 발생해 Next.js의 dynamic import를 사용해 클라이언트 사이드에서 불러와 해결했습니다.',
                        ],
                    },
                    {
                        text: '풀페이지 스크롤을 구현했습니다.',
                        assets: ['/assets/project/fullpage.gif'],
                        children: [
                            'css vh 속성이 PC, 모바일 환경에서 다르게 적용되어 슬라이드시 화면이 밀리는 이슈가 발생해 접속한 디바이스 크기를 가져와 vh 속성을 커스텀하는 방식으로 해결했습니다.',
                            'IOS 저전력 모드에서 동영상이 자동 재생되지 않는 이슈가 발생해 useEffect 내부에서 영상이 재생되지 않는 경우 썸네일 이미지와 재생 버튼이 나타나게 개선했습니다.',
                        ],
                    },
                    {
                        text: '챗봇 대화식 상담 신청 서비스를 개발했습니다',
                        assets: [
                            '/assets/project/consulting1.png',
                            '/assets/project/consulting2.png',
                            '/assets/project/consulting3.png',
                        ],
                        children: [
                            '신청 정보를 슬랙과 연결해 실시간 알림이 가도록 구현하고 구글 시트에 정보를 저장했습니다.',
                        ],
                    },
                    {
                        text: 'Atlas 전문 검색을 활용해 1011개의 인테리어 정보를 검색할 수 있게 구현했습니다.',
                        assets: ['/assets/project/search.png'],
                    },
                    {
                        text: 'Jira, Confluence를 사용해 팀원들과 작업을 공유했으며 버전 관리를 위해 Bitbucket을 사용하고 git template를 적용해 일관성 있는 히스토리를 남겼습니다.',
                        assets: ['/assets/project/jira.png', '/assets/project/gitlog.png'],
                        children: [
                            '이슈를 슬랙으로 공유하던 과정에서 이전 이슈를 스크롤해 찾는 번거로움과 기존 메시지와 분리되어 있지 않아 빠른 대응이 어려워 Jira로 공유하는 방식으로 팀원들을 설득해 이슈 처리 과정을 분리해 관리했습니다.',
                            'Bitbucket에서 버전 관리 및 Jira와 연결해 새로운 팀원이 조금 더 쉽게 합류할 수 있는 환경을 구축했습니다.',
                        ],
                    },
                    {
                        text: 'PC, 모바일 환경을 고려해 모든 페이지를 반응형으로 제작했습니다.',
                        assets: ['/assets/project/pc.png', '/assets/project/mobile.png'],
                    },
                    {
                        text: 'Next.js 13v (pages router) + MongoDB Atlas + AWS EC2 & Nginx & Route53 & pm2를 사용해 개발 및 배포했습니다.',
                    },
                ],
            },
        ],
    },
    {
        company: {
            name: '시솔지주',
            position: '프론트엔드 엔지니어',
            period: '2022.05 ~ 2023.02 (약 9개월)',
        },
        project: [
            {
                name: '수자원공사 프로젝트 고도화',
                period: '2022.09 ~ 2023.02',
                team: '백엔드 1, 디자이너 1',
                skill: 'HTML, CSS, Javascript, jQuery',
                description: '상수도 관련 정보를 제공하며, 수도 사용량 및 요금, 동파알림을 전달하는 서비스입니다.',
                contents: [
                    {
                        text: '페이지 로딩속도 개선',
                        children: [
                            '고도화 과정에서 전역에서 세션정보 API 호출을 중복해서 불러오는 로직을 발견했는데 응답속도가 제각각이고 오래걸리는 이슈를 발견해 API 중복을 없애고 (3회 -> 1회) 백엔드 개발자와 공유해 인덱싱 설정이 잘못 되어있는 이슈를 파악해 수정 후 평균 1초 걸리던 로딩속도를 0.6초로 개선했습니다.',
                        ],
                    },
                    {
                        text: 'hightchart 사용해 데이터 시각화',
                        assets: ['/assets/project/gauge.png', '/assets/project/area.png'],
                        children: [
                            '공모전을 통해 선정된 디자인을 반영해야하는 상황에 highchart 차트 UI에 추가로 커스텀하여 디자인을 맞추는 작업을 진행했습니다.',
                        ],
                    },
                    {
                        text: '사용자 이벤트로 회전하는 원형 네비게이션 구현',
                        assets: ['/assets/project/rotate.gif'],
                        children: [
                            '원형 둘레에 링크들을 배치하기 위해 부모 영역과 같은 크기로 설정한 뒤, 중심점에서 회전시켜 배치했습니다. 그러나 마지막 링크만 동작하는 이슈가 발생했습니다. 이를 해결하기 위해 getBoundingClientRect 메소드를 활용하여 부모 영역으로부터 상대적인 위치를 구한 값을 크기 변경 후 반영하여 모든 링크가 정상적으로 동작하게 구현했습니다.',
                            'User-Agent 파싱하여 웹/앱 상호작용하게 설계했습니다.',
                        ],
                    },
                ],
            },
            {
                name: 'GS 인증 테스트 자동화',
                period: '2022.08 ~ 2022.09',
                team: '1인 개발',
                skill: 'Typescript, Cypress',
                description:
                    '내부 솔루션 GS인증 과정에서 휴먼에러로 실패한 이후 반복되지 않기 위해 테스트 자동화를 도입했습니다.',
                contents: [
                    {
                        text: '제공된 시나리오 45개 중 36개 시나리오를 자동화 시키면서 휴먼에러를 방지하며 테스트에 소요되는 시간을 절반으로 줄였습니다.',
                        children: [
                            'Single-Sign-On 기술을 활용한 서비스로 여러 웹사이트와 데이터를 전달하는 과정은 동일한 도메인만 테스트 가능한 Cypress 특성상 테스트 자동화가 불가능했고 매뉴얼 검토를 제외한 시나리오를 자동화 했습니다.',
                        ],
                    },
                ],
            },
            {
                name: '출입통제 솔루션',
                period: '2022.08 ~ 2022.09',
                team: '백엔드 1',
                skill: 'React, Typescript',
                description: '자사가 보유한 무전원 지문인식 기술을 활용한 출입관리 서비스입니다.',
                contents: [
                    {
                        text: 'Axios Interceptors 와 debounce를 활용해 API 에러핸들링을 설계했습니다.',
                        children: [
                            'Interceptors로 request에 Access Token을 담아 전달하여 인증을 거쳤으며, 만료된 경우 reponse에서 refresh token을 전달해 새로 발급받은 access token으로 기존 요청의 데이터를 반환하는 로직을 구현했습니다. ',
                            '두개 이상의 API를 호출하는 debounce로 재발급 로직을 한번만 실행시킨뒤 쌓인 요청의 데이터들을 반환하는 방식으로 해결했습니다.',
                        ],
                    },
                    {
                        text: '출입현황, 출입기록을 보여주는 대시보드에 최신 데이터를 전달하기위해 socket을 연결했습니다.',
                    },
                    {
                        text: '게이트별 사용자를 등록 / 삭제하는 로직을 설계했습니다.',
                        children: [
                            '권한을 가진 관리자가 사용자를 등록 및 삭제 가능한 구조로 설계했으며, 권한별로 UI UX를 다르게 설정했습니다.',
                        ],
                    },
                    {
                        text: 'AWS S3 + CloudFornt로 서비스 배포했습니다.',
                        children: [
                            '기존엔 AWS Lightsail + Nginx로 서비스를 배포한 상황에서 해외지역 데모를 준비하기 위해 AWS CloudFront를 사용해 서비스를 다시 배포했습니다.',
                        ],
                    },
                ],
            },
        ],
    },
];
