# Nexst.js(ts) 설치

> yarn create next-app stim

# Typescript 설치

> yarn add --dev typescript @types/react @types/node

# Yarn v2 설정

> yarn set version berry (delete node_module)

# node_module 삭제

# .yarnrc.yml 수정

```
yarnPath: .yarn/releases/yarn-3.3.1.cjs
nodeLinker: pnp // Add this line!
```

# 버전 확인

> yarn -version

# 의존성 패키지 설치

> yarn install

# .gitignore 추가

```
!.yarn/cache
```

# extension 설치

> yarn dlx @yarnpkg/sdks vscode
