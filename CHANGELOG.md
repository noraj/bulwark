# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [4.0.2](https://github.com/softrams/bulwark/compare/v4.0.1...v4.0.2) (2020-08-27)


### Others

* **deps:** bump @angular-devkit/build-angular in /frontend ([bae4ca9](https://github.com/softrams/bulwark/commit/bae4ca9dc29a26aee767519b0d2eda17a356a89b))
* **deps:** bump @angular/cli from 10.0.7 to 10.0.8 in /frontend ([52dd36b](https://github.com/softrams/bulwark/commit/52dd36ba2c83056cdd6b4b936792ca2ce147ba4b))
* **deps:** bump jira-client from 6.19.0 to 6.20.0 ([014bd86](https://github.com/softrams/bulwark/commit/014bd868c0a25bd2be62a21f8fd9ba98a344eea3))
* **deps-dev:** bump @angular/language-service in /frontend ([09938ab](https://github.com/softrams/bulwark/commit/09938abfa8087936cc7b08abae8802020bde8453))
* **deps-dev:** bump @angular/language-service in /frontend ([94fc0c9](https://github.com/softrams/bulwark/commit/94fc0c95183067e7ca7dd90e5ec8073050b1b186))
* **deps-dev:** bump @types/jasmine from 3.5.13 to 3.5.14 in /frontend ([5b9aa1d](https://github.com/softrams/bulwark/commit/5b9aa1d9f7a455b3d5d4fe6e7a97dfccf5a08565))
* **deps-dev:** bump cz-conventional-changelog from 3.2.0 to 3.2.1 ([492dc6b](https://github.com/softrams/bulwark/commit/492dc6b73c432ea2c6204e37a2611f20a1c6de3f))
* **deps-dev:** bump cz-conventional-changelog from 3.2.1 to 3.3.0 ([7f22e05](https://github.com/softrams/bulwark/commit/7f22e05fc2e001f2250bd938db6c2f244ff8067f))
* **deps-dev:** bump ts-jest from 26.2.0 to 26.3.0 ([5d9e103](https://github.com/softrams/bulwark/commit/5d9e1037896ac023a016be8ff2b7e5b073100a52))
* **deps-dev:** bump ts-node from 8.10.2 to 9.0.0 in /frontend ([9a31591](https://github.com/softrams/bulwark/commit/9a31591afa9e47390c3a1e5b6c63535f6596ddf7))

### [4.0.1](https://github.com/softrams/bulwark/compare/v4.0.0...v4.0.1) (2020-08-24)


### Bug Fixes

* **asset and vuln:** fixed update Asset and fixed get Vulnerability by id ([ea4d4f1](https://github.com/softrams/bulwark/commit/ea4d4f1cdb17e52e617acaa1642eeae581b15e17))

## [4.0.0](https://github.com/softrams/bulwark/compare/v3.2.3...v4.0.0) (2020-08-24)


### ⚠ BREAKING CHANGES

* **create jira table:** Added JIRA table
* **jira utilities:** Breaking changes include updates to the create and update Asset APIs to include new
JIRA properties
* **asset controller:** Updated asset model with jira properties: username, host, api key.  Validation
broken.  Tests broken.
* **column mapper:** Updated column options
* **asset archive:** Additional asset column breaks current model validations.

### Features

* **assessment controller:** assessment deletion feature ([b96b977](https://github.com/softrams/bulwark/commit/b96b9771d6df91b4c5cc78bec5cd1c6ad2281472)), closes [#177](https://github.com/softrams/bulwark/issues/177)
* **assessment tester column:** updated API to get assessments by ID to include testers ([a5e4968](https://github.com/softrams/bulwark/commit/a5e4968aef8a57245b9990499e13ff0dc095ffc1)), closes [#205](https://github.com/softrams/bulwark/issues/205)
* **asset archive:** implement ability to archive assets ([6e56a43](https://github.com/softrams/bulwark/commit/6e56a43d593a7062096e4895d0a8a98c53066b3e)), closes [#167](https://github.com/softrams/bulwark/issues/167)
* **asset controller:** updated Asset model with jira properties ([8d4fa08](https://github.com/softrams/bulwark/commit/8d4fa08cdacd400acba47266e13b9f0cbf940fca)), closes [#179](https://github.com/softrams/bulwark/issues/179)
* **column mapper:** create dynamic column options ([05fdac1](https://github.com/softrams/bulwark/commit/05fdac12ee01e1ce1b0e7b6eaa204a6bc1976f39)), closes [#167](https://github.com/softrams/bulwark/issues/167)
* **create jira table:** broke apart Asset table and moved JIRA information to JIRA table ([7d31d45](https://github.com/softrams/bulwark/commit/7d31d4576cce96c5e99d8cf7b5e8e9712c3458d0)), closes [#179](https://github.com/softrams/bulwark/issues/179)
* **jira:** initial commit for JIRA src ([acc78ab](https://github.com/softrams/bulwark/commit/acc78ab6c9fca139aa9b5ffe3b57d68d8d18dfff)), closes [#179](https://github.com/softrams/bulwark/issues/179)
* **jira issue save update with refactored code:** updated current Jira functions for new table ([3b13445](https://github.com/softrams/bulwark/commit/3b134455c991a05a9daa66d970e4824d56aac6be)), closes [#179](https://github.com/softrams/bulwark/issues/179)
* **jira update/save:** implement the ability to update/save update ([1d586cf](https://github.com/softrams/bulwark/commit/1d586cf7c0ca12de8a040f4ca65664e8464d3843)), closes [#179](https://github.com/softrams/bulwark/issues/179)
* **jira utilities:** save/Update Jira Issue from vulnerabilities ([d2e1c81](https://github.com/softrams/bulwark/commit/d2e1c8135941b84d0e3f700e94bfedcc49da494c)), closes [#179](https://github.com/softrams/bulwark/issues/179)
* **jira utility:** implemented JIRA utility POC ([e2aa328](https://github.com/softrams/bulwark/commit/e2aa328d71ca792ad5034cefe433706982b73acd)), closes [#179](https://github.com/softrams/bulwark/issues/179)
* **testers column added to assessments summary table:** testers column added to assessment table ([67d5188](https://github.com/softrams/bulwark/commit/67d5188eb7b24b9dec6ef60789b736a15734f8b8)), closes [#205](https://github.com/softrams/bulwark/issues/205)
* **vulnerability form:** updated confirmation message for jira export ([8012a9a](https://github.com/softrams/bulwark/commit/8012a9a17630d253c257ce0f0c645fb123580317)), closes [#179](https://github.com/softrams/bulwark/issues/179)


### Bug Fixes

* **assessment/vulnerability/report table component:** fixed Jira URL table formatting ([5e053bc](https://github.com/softrams/bulwark/commit/5e053bc73ac3eb3a62e0a9f7e62c1665bc740101)), closes [#225](https://github.com/softrams/bulwark/issues/225)
* **dashboard component, organization component, and global styles:** moved card style to global scss ([d9e6154](https://github.com/softrams/bulwark/commit/d9e6154c188091b02a0bf12eeb757dae3fbca0b5)), closes [#165](https://github.com/softrams/bulwark/issues/165)
* **jira screenshots and readme:** fixed jira screenshot attachments.  Updated README with new gifs ([c13e9b0](https://github.com/softrams/bulwark/commit/c13e9b0f4c2cd723a08f40f47e75330ff5354ff5))
* **update csp:** updated CSP ([6ae8c42](https://github.com/softrams/bulwark/commit/6ae8c4220920f147e0f2149cbe8ecd0b2545db40)), closes [#179](https://github.com/softrams/bulwark/issues/179)
* **update undefined message:** updated jiraId URL to use the jira info from database ([6a864d0](https://github.com/softrams/bulwark/commit/6a864d0bf524e5932648436e2d65891ad458cc83)), closes [#179](https://github.com/softrams/bulwark/issues/179)
* **user profile component:** fixed user profile form value binding ([1c87039](https://github.com/softrams/bulwark/commit/1c870397518dfe95852a1c9c63911be056c9a45c)), closes [#218](https://github.com/softrams/bulwark/issues/218)


### Tests

* **aet controller spec:** add unit tests for new asset controller methods ([0e2213f](https://github.com/softrams/bulwark/commit/0e2213f9e2350289868456b645e294f5a77951aa)), closes [#167](https://github.com/softrams/bulwark/issues/167)
* **assessment controller test:** unit test for deleteAssessmentById ([116c0fc](https://github.com/softrams/bulwark/commit/116c0fce41b4b9a3f1cdf11528f5d6e06bfa6350)), closes [#177](https://github.com/softrams/bulwark/issues/177)
* **jira utility:** unit tests for the jira utility ([2b0e5d7](https://github.com/softrams/bulwark/commit/2b0e5d7fd46135a6ca33ccaa219ed0e4baf1cd5e)), closes [#179](https://github.com/softrams/bulwark/issues/179)
* **tests: asset, assessment, crypto:** added unit tests for the crypto utility and asset controller ([9f63021](https://github.com/softrams/bulwark/commit/9f63021cf2801f99f9b674b9e13efab6636c2f0d)), closes [#179](https://github.com/softrams/bulwark/issues/179)


### Docs

* **readme:** updated README ([7ca3343](https://github.com/softrams/bulwark/commit/7ca33432dbd6a3cb8ede463da82b9f600f8666c3)), closes [#179](https://github.com/softrams/bulwark/issues/179)
* **readme/contributing:** updated documentation for the README and CONTRIBUTING ([bef6d47](https://github.com/softrams/bulwark/commit/bef6d47bb810c1e58e5579b26bc95f601c203d92)), closes [#179](https://github.com/softrams/bulwark/issues/179)
* **security policy:** updated security policy ([c307265](https://github.com/softrams/bulwark/commit/c307265157a3bf2ec03a6eaa9c31280e0dcc4bf8))


### Others

* **deps:** bump @angular-devkit/build-angular in /frontend ([1e83309](https://github.com/softrams/bulwark/commit/1e8330973b3de1b50cd01a3db102726d46db9b77))
* **deps:** bump @angular-devkit/build-angular in /frontend ([533abf2](https://github.com/softrams/bulwark/commit/533abf27a4f7b86f683254ee618480d5c5064573))
* **deps:** bump @angular-devkit/build-angular in /frontend ([d2a9b04](https://github.com/softrams/bulwark/commit/d2a9b046a7c346ffc35dc1021170f6981dcc1c2b))
* **deps:** bump @angular/cli from 10.0.4 to 10.0.5 in /frontend ([2a7ddc4](https://github.com/softrams/bulwark/commit/2a7ddc4aa2ef15fb41eb55078722a94b1a6d3952))
* **deps:** bump @angular/cli from 10.0.5 to 10.0.6 in /frontend ([1f41210](https://github.com/softrams/bulwark/commit/1f412106b18ed47287a76448ff753e6e7d0d9ffc))
* **deps:** bump @angular/cli from 10.0.6 to 10.0.7 in /frontend ([e093c72](https://github.com/softrams/bulwark/commit/e093c72fd0c8e80aa58b34c91857d6b0aac5bc99))
* **deps:** bump @ng-select/ng-select from 4.0.4 to 5.0.0 in /frontend ([2ea1db8](https://github.com/softrams/bulwark/commit/2ea1db8c23e94bf6b05b79195dc93d26761a4a02))
* **deps:** bump @ng-select/ng-select from 5.0.0 to 5.0.1 in /frontend ([8e04728](https://github.com/softrams/bulwark/commit/8e04728cf09a87878c8b5f2853a0e029176486f6))
* **deps:** bump concurrently from 5.2.0 to 5.3.0 ([55a0601](https://github.com/softrams/bulwark/commit/55a06012daeead903ec88f683ec7a27626f73fd8))
* **deps:** bump helmet from 3.23.3 to 4.0.0 ([2f682de](https://github.com/softrams/bulwark/commit/2f682de0fae94e085c4e92b2cef2a24498b28677))
* **deps:** bump helmet from 4.0.0 to 4.1.0 ([f46bb06](https://github.com/softrams/bulwark/commit/f46bb068c5ad27450584e6573f6f1d6f4e41753c))
* **deps:** bump jira-client from 6.18.0 to 6.19.0 ([369732f](https://github.com/softrams/bulwark/commit/369732fd6c8288db3125597694afdf3c1f14e6df))
* **deps:** bump ngx-markdown from 10.1.0 to 10.1.1 in /frontend ([9a83ce2](https://github.com/softrams/bulwark/commit/9a83ce2e7708a4bc7145aed2a27e5df449b794fd))
* **deps:** bump nodemailer from 6.4.10 to 6.4.11 ([99087f5](https://github.com/softrams/bulwark/commit/99087f5b382499bbbceaeed4b71e42d8e57bf892))
* **deps:** bump password-validator from 5.0.3 to 5.1.0 ([f47a663](https://github.com/softrams/bulwark/commit/f47a663b9bda58a267ddeda3197a100bc4e31f93))
* **deps:** bump rxjs from 6.6.0 to 6.6.2 in /frontend ([2c28258](https://github.com/softrams/bulwark/commit/2c28258b8026eaf59c2a0444bf9d6b62fd693098))
* **deps:** bump ts-node from 8.10.2 to 9.0.0 ([df9971e](https://github.com/softrams/bulwark/commit/df9971e37a7b3c67e35200b2ff91b25f6a4a10c6))
* **deps:** bump tslib from 2.0.0 to 2.0.1 in /frontend ([f320cf9](https://github.com/softrams/bulwark/commit/f320cf9e4819ece06bf3ddf30b62df9eeefbd610))
* **deps:** bump uuid from 8.2.0 to 8.3.0 ([70c2ee1](https://github.com/softrams/bulwark/commit/70c2ee16156d3699c795ba3af91312b33c80de36))
* **deps-dev:** bump @angular/language-service in /frontend ([a5ec3e1](https://github.com/softrams/bulwark/commit/a5ec3e1cb3e22323858c3218d588ed99d6cb514f))
* **deps-dev:** bump @angular/language-service in /frontend ([5ca9ea8](https://github.com/softrams/bulwark/commit/5ca9ea8ed16a653475e2395bd1461792937dfa4d))
* **deps-dev:** bump @angular/language-service in /frontend ([ccebf16](https://github.com/softrams/bulwark/commit/ccebf16a604e94b3a0a1ea4dc7155b35347ac42b))
* **deps-dev:** bump @angular/language-service in /frontend ([9b0fa48](https://github.com/softrams/bulwark/commit/9b0fa48082b5b7285a60388c6d680b3fbfa26dc0))
* **deps-dev:** bump @angular/language-service in /frontend ([8411cd5](https://github.com/softrams/bulwark/commit/8411cd51860464d7be971c16cd6d22a10a73a8aa))
* **deps-dev:** bump @angular/language-service in /frontend ([bf6a329](https://github.com/softrams/bulwark/commit/bf6a3290d3dd785da068ec9500d23b52840c1776))
* **deps-dev:** bump @babel/core from 7.10.5 to 7.11.0 ([296e46a](https://github.com/softrams/bulwark/commit/296e46af651661861900dfd397b09e7ef11fbf40))
* **deps-dev:** bump @babel/core from 7.11.0 to 7.11.1 ([89d900e](https://github.com/softrams/bulwark/commit/89d900eba373dd1b10589d4555f1e810281e9de8))
* **deps-dev:** bump @babel/core from 7.11.1 to 7.11.4 ([daa6fef](https://github.com/softrams/bulwark/commit/daa6fef3d295cea1f72292a0cd29ec3a42404efc))
* **deps-dev:** bump @babel/preset-env from 7.10.4 to 7.11.0 ([598c653](https://github.com/softrams/bulwark/commit/598c653fee8a5d0eac68c924ab4440573d8b2b0c))
* **deps-dev:** bump @commitlint/config-conventional ([2cc4edd](https://github.com/softrams/bulwark/commit/2cc4edd65bf9b519c2a4d20430797ed7b8a21c94))
* **deps-dev:** bump @types/jasmine from 3.5.11 to 3.5.12 in /frontend ([6b0a119](https://github.com/softrams/bulwark/commit/6b0a119264d6fcc9c161a5634a21a6b28902b529))
* **deps-dev:** bump @types/jasmine from 3.5.12 to 3.5.13 in /frontend ([39fd17d](https://github.com/softrams/bulwark/commit/39fd17d21cb2c66f846deacab3cad94428fa8a8e))
* **deps-dev:** bump @types/jest from 26.0.7 to 26.0.8 ([0e8ca5d](https://github.com/softrams/bulwark/commit/0e8ca5dc95c1fab5ff97f8eabe8e08c049e1d9a5))
* **deps-dev:** bump @types/jest from 26.0.8 to 26.0.9 ([3aa5c98](https://github.com/softrams/bulwark/commit/3aa5c98f6e459b79d4d4832696853df4b29b2c75))
* **deps-dev:** bump @types/jest from 26.0.9 to 26.0.10 ([3803bbe](https://github.com/softrams/bulwark/commit/3803bbe0377de9faacb22343e0722772ba01318e))
* **deps-dev:** bump @types/node from 14.0.25 to 14.0.26 in /frontend ([5252e7f](https://github.com/softrams/bulwark/commit/5252e7f80b4c78154bd2850f0b70200d3af259e0))
* **deps-dev:** bump @types/node from 14.0.26 to 14.0.27 in /frontend ([a362060](https://github.com/softrams/bulwark/commit/a36206048d1216aa8b7bb88586eef704dd74af10))
* **deps-dev:** bump @types/node from 14.0.27 to 14.6.0 in /frontend ([a3ba2b6](https://github.com/softrams/bulwark/commit/a3ba2b6c22f059c83490c9c7692836e4c213f5b7))
* **deps-dev:** bump babel-jest from 26.1.0 to 26.2.1 ([a71be6c](https://github.com/softrams/bulwark/commit/a71be6c6e5f8496a95ae9a258733a14dbc6d3c48))
* **deps-dev:** bump babel-jest from 26.2.1 to 26.2.2 ([e376fd1](https://github.com/softrams/bulwark/commit/e376fd1d0353c134000857279232b122b65488a3))
* **deps-dev:** bump babel-jest from 26.2.2 to 26.3.0 ([4e4f147](https://github.com/softrams/bulwark/commit/4e4f147870d4c48a8ae77a71bd70674a41c3dfb8))
* **deps-dev:** bump jest from 26.1.0 to 26.2.2 ([0e2c2a4](https://github.com/softrams/bulwark/commit/0e2c2a4926907bda1041e7f753b4a01e176e72ce))
* **deps-dev:** bump jest from 26.2.2 to 26.3.0 ([a58ad02](https://github.com/softrams/bulwark/commit/a58ad02393078692cf707ed07d4a258a8c6d83fb))
* **deps-dev:** bump jest from 26.3.0 to 26.4.0 ([59f2090](https://github.com/softrams/bulwark/commit/59f2090f62906721d069279fe6e4a34fdeb24f94))
* **deps-dev:** bump jest from 26.4.0 to 26.4.1 ([f50109e](https://github.com/softrams/bulwark/commit/f50109e977dcb06df39c127210bc166b9bd7406b))
* **deps-dev:** bump jest from 26.4.1 to 26.4.2 ([bd3a6f6](https://github.com/softrams/bulwark/commit/bd3a6f65e0f381627d69214ca0dc881f40ecf808))
* **deps-dev:** bump karma from 5.1.0 to 5.1.1 in /frontend ([f96145d](https://github.com/softrams/bulwark/commit/f96145d9dc1ba93892eac309ea903c07df46aaef))
* **deps-dev:** bump karma-jasmine from 3.3.1 to 4.0.0 in /frontend ([1c7a2bd](https://github.com/softrams/bulwark/commit/1c7a2bd3560df20d2ef60ef5f1d34bf45bdb4783))
* **deps-dev:** bump karma-jasmine from 4.0.0 to 4.0.1 in /frontend ([94a8c1c](https://github.com/softrams/bulwark/commit/94a8c1c590dac10f99752e839f7c9bd991328481))
* **deps-dev:** bump standard-version from 8.0.2 to 9.0.0 ([6687d1c](https://github.com/softrams/bulwark/commit/6687d1c537b81af2f8c85e9fb48770137a2938b6))
* **deps-dev:** bump ts-jest from 26.1.3 to 26.1.4 ([cf8231c](https://github.com/softrams/bulwark/commit/cf8231ced3db1c12b5a658993c0abc53d4a7a1b2))
* **deps-dev:** bump ts-jest from 26.1.4 to 26.2.0 ([b0794a1](https://github.com/softrams/bulwark/commit/b0794a1e2774dc4548c4fc7dd78d3c7761ca8f46))
* **deps-dev:** bump tslint from 6.1.2 to 6.1.3 ([010a286](https://github.com/softrams/bulwark/commit/010a286d377393f6157c6db915b5b68c6782517b))
* **deps-dev:** bump tslint from 6.1.2 to 6.1.3 in /frontend ([97e37f1](https://github.com/softrams/bulwark/commit/97e37f1b390d8e75d1ac4367213425676dcfcd1f))
* **documentation updates:** updated documentation and added seed file ([7796d1e](https://github.com/softrams/bulwark/commit/7796d1e2fa75115e523f77c3bf409f68b5b110f7)), closes [#179](https://github.com/softrams/bulwark/issues/179)
* **fix merge conflicts:** fixed merge conflicts ([a433792](https://github.com/softrams/bulwark/commit/a43379292ccc42f26af52b5713ac72f88e548ad1)), closes [#167](https://github.com/softrams/bulwark/issues/167)
* **fix merge conflicts:** fixed merge conflicts from master ([06da9af](https://github.com/softrams/bulwark/commit/06da9affbf73f3a2c3613ea83955fb73aaa764fb))
* **package.json:** fixing merge conflicts ([4f1c2b3](https://github.com/softrams/bulwark/commit/4f1c2b373d0392ef17b6c07d9d6676b6c3165eff)), closes [#179](https://github.com/softrams/bulwark/issues/179)
* **package.jsons:** update jira with develop ([cdb9dfa](https://github.com/softrams/bulwark/commit/cdb9dfac0fc0f12703fbda943a436c21e72e4151)), closes [#179](https://github.com/softrams/bulwark/issues/179)
* **remove unneeded files:** removed unused and unneeded interfaces ([d6dbd51](https://github.com/softrams/bulwark/commit/d6dbd51b357a7178097b7a3317f61c4e44657552)), closes [#179](https://github.com/softrams/bulwark/issues/179)
* **update dependencies from develop:** updated dependencies from the Develop branch ([94c7bcc](https://github.com/softrams/bulwark/commit/94c7bccf59d52e93369158de5b5e705ad29f4725)), closes [#179](https://github.com/softrams/bulwark/issues/179)
* **updated readme:** updated readme and revert workflow name ([614f642](https://github.com/softrams/bulwark/commit/614f64231e45dcf72b8c5a8b81f3d9e52decf142)), closes [#179](https://github.com/softrams/bulwark/issues/179)

### [3.2.3](https://github.com/softrams/bulwark/compare/v3.2.2...v3.2.3) (2020-08-17)


### Bug Fixes

* **ormconfig:** updated ormconfig migrations array ([afba021](https://github.com/softrams/bulwark/commit/afba021856cabfde61d7f833998b9be138dcabb2)), closes [#208](https://github.com/softrams/bulwark/issues/208)
* **seed initial user fix:** update seed user script so that it uses CLI arguments ([14d0e38](https://github.com/softrams/bulwark/commit/14d0e384228075cb064d794251bcb0d8fff796b1)), closes [#208](https://github.com/softrams/bulwark/issues/208)
* **updated readme.  added initial migration script:** updated the README with updated initial steps ([c954694](https://github.com/softrams/bulwark/commit/c954694a59e1483c61e7302684d53a57f44e55fa)), closes [#208](https://github.com/softrams/bulwark/issues/208)

### [3.2.2](https://github.com/softrams/bulwark/compare/v3.2.1...v3.2.2) (2020-07-24)


### Others

* **deps:** bump @angular-devkit/build-angular in /frontend ([0e7ed13](https://github.com/softrams/bulwark/commit/0e7ed135e28e9529a823a615d1170732bb972ad0))
* **deps:** bump @angular/cli from 10.0.3 to 10.0.4 in /frontend ([9f28641](https://github.com/softrams/bulwark/commit/9f286413a4ea59a5a0d2319a5cfdaf7874f3189b))
* **deps:** bump ngx-markdown from 10.0.0 to 10.1.0 in /frontend ([124ade3](https://github.com/softrams/bulwark/commit/124ade35bcdc635ba8b6a7556e2b91be792c1801))
* **deps:** bump puppeteer from 5.2.0 to 5.2.1 ([21512c8](https://github.com/softrams/bulwark/commit/21512c891e9a719293498f20f0e38314f9bf206f))
* **deps-dev:** bump @angular/language-service in /frontend ([0a5ea43](https://github.com/softrams/bulwark/commit/0a5ea4390fb120edd73a4282431ab4e17153bba7))
* **deps-dev:** bump @types/jest from 26.0.5 to 26.0.7 ([efb36ae](https://github.com/softrams/bulwark/commit/efb36ae6f9d6063f30f1f0a6511cd1f3c5add224))
* **deps-dev:** bump @types/node from 14.0.23 to 14.0.24 in /frontend ([ec93f25](https://github.com/softrams/bulwark/commit/ec93f2539362cc2cf707f3ced68b6a21352bb9ab))
* **deps-dev:** bump @types/node from 14.0.24 to 14.0.25 in /frontend ([49dbb50](https://github.com/softrams/bulwark/commit/49dbb507e7629d7560af0839f2e321083e4c2abf))
* **deps-dev:** bump jasmine-core from 3.5.0 to 3.6.0 in /frontend ([84f70ae](https://github.com/softrams/bulwark/commit/84f70ae75044f8ed1da2635900d47b1521136e95))

### [3.2.1](https://github.com/softrams/bulwark/compare/v3.2.0...v3.2.1) (2020-07-20)


### Build System

* **lru-cache:** added lru-cache to remove angular error ([adaa65b](https://github.com/softrams/bulwark/commit/adaa65ba4c4c1451e0dd7100036e293abb1db824)), closes [#111](https://github.com/softrams/bulwark/issues/111)


### Tests

* **assessment controller:** assessment controller unit tests ([c3d7fa8](https://github.com/softrams/bulwark/commit/c3d7fa8f92170657fd4729fa6935af6ed32a6d8c)), closes [#64](https://github.com/softrams/bulwark/issues/64)
* **email.service.ts:** unit tests for email service ([799132f](https://github.com/softrams/bulwark/commit/799132fa94466abf9ab137920e5d2382cb6124b9)), closes [#136](https://github.com/softrams/bulwark/issues/136)
* **package.json:** update test node script ([6e32fcc](https://github.com/softrams/bulwark/commit/6e32fccea777d9c6aa670a13457767c0ba5169cd)), closes [#137](https://github.com/softrams/bulwark/issues/137)
* **password.utility.spec.ts:** unit tests for password utility ([e76fcee](https://github.com/softrams/bulwark/commit/e76fceec53a3d1ee4dd9bb223693c4f1befa7b66)), closes [#64](https://github.com/softrams/bulwark/issues/64)
* **seed-user.ts:** initial seed user test ([b8ac8b8](https://github.com/softrams/bulwark/commit/b8ac8b8c2eb34b72efe433111e2291c1dc90ceae)), closes [#137](https://github.com/softrams/bulwark/issues/137)
* **user controller:** user controller unit test ([aa53b54](https://github.com/softrams/bulwark/commit/aa53b5469814ed3158cbb3f2436369dadb5a4e07)), closes [#122](https://github.com/softrams/bulwark/issues/122)
* **user.controller.spec.ts:** complete unit tests for user controller ([b96af41](https://github.com/softrams/bulwark/commit/b96af417d6b2f49dd95704ead526139c975cffe6)), closes [#122](https://github.com/softrams/bulwark/issues/122)


### Others

* **angular 10:** upgrade to Angular 10 ([3fe70f5](https://github.com/softrams/bulwark/commit/3fe70f5498f6367446bed15dedbf92a725de3e00)), closes [#111](https://github.com/softrams/bulwark/issues/111)
* **deps:** bump @angular-devkit/build-angular in /frontend ([9aa1a9d](https://github.com/softrams/bulwark/commit/9aa1a9de50bfe870012b3cd0a07870d123f8fc6b))
* **deps:** bump @angular/cli from 10.0.2 to 10.0.3 in /frontend ([cdf5e50](https://github.com/softrams/bulwark/commit/cdf5e50a63d0a97b192afcee6e64098ea6ff3aec))
* **deps:** bump @fortawesome/angular-fontawesome in /frontend ([e7b7aa1](https://github.com/softrams/bulwark/commit/e7b7aa1fc8c0f1e35b27fcad222cabb711ea03b2))
* **deps:** bump @fortawesome/fontawesome-svg-core in /frontend ([a982d4f](https://github.com/softrams/bulwark/commit/a982d4fc8af1d5029a9da26a3b67fc6050e16d6b))
* **deps:** bump @fortawesome/free-brands-svg-icons in /frontend ([7367d70](https://github.com/softrams/bulwark/commit/7367d708a7f08b334e4dedc6a819423e573ddc32))
* **deps:** bump ngx-markdown from 9.1.1 to 10.0.0 in /frontend ([de9eae4](https://github.com/softrams/bulwark/commit/de9eae48f4da2f234d26911c4e118be5930920b4))
* **deps:** bump puppeteer from 5.0.0 to 5.1.0 ([b024375](https://github.com/softrams/bulwark/commit/b0243757789f0341e83eaa1983f782346426f7fd))
* **deps:** bump puppeteer from 5.1.0 to 5.2.0 ([094b493](https://github.com/softrams/bulwark/commit/094b493ec72e1a5003d5691a2f16d69dd69a096f))
* **deps:** bump tslib from 1.10.0 to 1.13.0 in /frontend ([7b031cb](https://github.com/softrams/bulwark/commit/7b031cb6bd5268857f0381b9316c87deb371966a))
* **deps:** bump typescript from 3.9.6 to 3.9.7 in /frontend ([d2fc168](https://github.com/softrams/bulwark/commit/d2fc168e33af7b9c2d24e916c53338a95904093d))
* **deps-dev:** bump @angular/language-service in /frontend ([a1cafaa](https://github.com/softrams/bulwark/commit/a1cafaa370db2ca41f4ae4d05c9a96b23d367f9c))
* **deps-dev:** bump @babel/core from 7.10.4 to 7.10.5 ([cff5ac3](https://github.com/softrams/bulwark/commit/cff5ac3365bb67e4907341d2e1cda3e4a39a5304))
* **deps-dev:** bump @commitlint/cli from 9.0.1 to 9.1.1 ([9670c1a](https://github.com/softrams/bulwark/commit/9670c1a9545c090711639ade18011dae3bfe42b6))
* **deps-dev:** bump @commitlint/config-conventional ([9f987bf](https://github.com/softrams/bulwark/commit/9f987bfd4ee17e9c2dfdd8e2f67bd192374ca634))
* **deps-dev:** bump @types/jasmine from 2.8.16 to 3.5.11 in /frontend ([d529063](https://github.com/softrams/bulwark/commit/d5290638d3ca493428664149591e4829bcff6cef))
* **deps-dev:** bump @types/jest from 26.0.4 to 26.0.5 ([2d442c5](https://github.com/softrams/bulwark/commit/2d442c5629399b815b322ef2c85eb097698ce967))
* **deps-dev:** bump @types/node from 12.12.34 to 14.0.23 in /frontend ([de699d6](https://github.com/softrams/bulwark/commit/de699d6e9ad978ec4613012a7e260977719ccc84))
* **deps-dev:** bump codelyzer from 5.2.2 to 6.0.0 in /frontend ([0cbedf9](https://github.com/softrams/bulwark/commit/0cbedf98485b155c6a459b79a70f9e5ad9817771))
* **deps-dev:** bump karma-coverage-istanbul-reporter in /frontend ([da3906d](https://github.com/softrams/bulwark/commit/da3906d320540c816536c7b77312be6907537992))
* **deps-dev:** bump protractor from 5.4.2 to 7.0.0 in /frontend ([943642e](https://github.com/softrams/bulwark/commit/943642eb31bebe326d6ea55ac757500192a9a704))
* **deps-dev:** bump standard-version from 8.0.0 to 8.0.1 ([c1dc9c2](https://github.com/softrams/bulwark/commit/c1dc9c21d351d7220bba87ef660b2565360edfcc))
* **deps-dev:** bump standard-version from 8.0.0 to 8.0.1 ([5f213bd](https://github.com/softrams/bulwark/commit/5f213bd3532a1857a6425efb48dcf0ad1c8caedf))
* **deps-dev:** bump standard-version from 8.0.1 to 8.0.2 ([7d9979a](https://github.com/softrams/bulwark/commit/7d9979a45300c976d0ecf12d35f5339f6cc111a3))
* **deps-dev:** bump ts-jest from 26.1.1 to 26.1.2 ([13563c8](https://github.com/softrams/bulwark/commit/13563c8036df275f3abd665327df3811c98d14f8))
* **deps-dev:** bump ts-jest from 26.1.2 to 26.1.3 ([aac7b80](https://github.com/softrams/bulwark/commit/aac7b8088eac3cbd1cd1e15c91994b5b1fc1e993))
* **deps-dev:** bump typescript from 3.9.6 to 3.9.7 ([6ba20aa](https://github.com/softrams/bulwark/commit/6ba20aa27d413b209cabd21d5f62111fdc8f1eb2))
* **lodash:** update lodash to mitigate low severity vulnerability ([9fa5682](https://github.com/softrams/bulwark/commit/9fa568233c342224c6042b90b7a5f0db7d454c64))
* **package.json:** move pre-commit hook to hooks ([e2062d6](https://github.com/softrams/bulwark/commit/e2062d639b0a009fca1deb541445f4aada885036))
* **package.json frontend/package.json:** fix merge conflcits ([620e320](https://github.com/softrams/bulwark/commit/620e32043ac680b9b4edc75abd6dec8ba84e881e)), closes [#111](https://github.com/softrams/bulwark/issues/111)
* **package.json frontend/package.json:** fix merge conflicts ([244d123](https://github.com/softrams/bulwark/commit/244d1238305041510b570081022d32469ab17877)), closes [#111](https://github.com/softrams/bulwark/issues/111)
* **package.json frontend/package.json:** merge from develop.  Remove sinon and sqlite3 ([8021985](https://github.com/softrams/bulwark/commit/8021985bfdd45e860a3db54e4643f2d3a92815a7)), closes [#64](https://github.com/softrams/bulwark/issues/64)
* **tslint revert:** revert tslint version ([d3f3d97](https://github.com/softrams/bulwark/commit/d3f3d97da8676039262f6355480d79228fe7d0c7)), closes [#111](https://github.com/softrams/bulwark/issues/111)

## [3.2.0](https://github.com/softrams/bulwark/compare/v3.1.3...v3.2.0) (2020-07-13)


### Features

* **report.component.html:** implemented dynamic report properties ([8a1300e](https://github.com/softrams/bulwark/commit/8a1300eb51f3ed3971c63cf3e3f0aca9ce37b4d4)), closes [#37](https://github.com/softrams/bulwark/issues/37)


### Bug Fixes

* **uuid:** update import statement for uuid ([1e1143f](https://github.com/softrams/bulwark/commit/1e1143f445061f95bab551a55e310fa5862ec737))


### CI

* **node.js.yml:** added linting to CI process ([53f600c](https://github.com/softrams/bulwark/commit/53f600c22ef0127a6702475139e660b20b5b2b2b)), closes [#90](https://github.com/softrams/bulwark/issues/90)
* **node.js.yml:** initial commit for github action ([7a87e2b](https://github.com/softrams/bulwark/commit/7a87e2b4ee5dcf7fb09e9d2ca66051a61c4a09a6)), closes [#6](https://github.com/softrams/bulwark/issues/6)
* **removing tslint:** removing tslint to fix build error ([02f3c08](https://github.com/softrams/bulwark/commit/02f3c080c4fc487461e27d146e59ed04f00da14c))


### Others

* **deps:** bump @fortawesome/fontawesome-svg-core in /frontend ([4675399](https://github.com/softrams/bulwark/commit/4675399427ab02caab1b79498169fa42bb3e2765))
* **deps:** bump @fortawesome/free-brands-svg-icons in /frontend ([17fb885](https://github.com/softrams/bulwark/commit/17fb885eb8361aedd859c9022084414160826815))
* **deps:** bump @ng-select/ng-select from 4.0.0 to 4.0.4 in /frontend ([be713d0](https://github.com/softrams/bulwark/commit/be713d01a50ca36270948e7e1773968d31579605))
* **deps:** bump @types/body-parser from 1.17.1 to 1.19.0 ([3a4a706](https://github.com/softrams/bulwark/commit/3a4a70613f56896677d490fa504a95cd338b0999))
* **deps:** bump @types/express from 4.17.1 to 4.17.7 ([c41a065](https://github.com/softrams/bulwark/commit/c41a0654ad011afffbac43cf1e3d2a4e4dceab48))
* **deps:** bump bcrypt from 3.0.7 to 5.0.0 ([39f0eeb](https://github.com/softrams/bulwark/commit/39f0eeb7b55d9e98c1252959e3b09cd31869368b))
* **deps:** bump class-validator from 0.10.2 to 0.12.2 ([c5402ca](https://github.com/softrams/bulwark/commit/c5402ca4a77cc09bbd819183606353fec646ed88))
* **deps:** bump concurrently from 5.0.0 to 5.2.0 ([7d63245](https://github.com/softrams/bulwark/commit/7d632452c8146c8e2e97ae6b348378feac9b350a))
* **deps:** bump core-js from 2.6.10 to 3.6.5 in /frontend ([ff968bc](https://github.com/softrams/bulwark/commit/ff968bc39584897fe166869d26f809633cc0b64b))
* **deps:** bump helmet from 3.21.1 to 3.23.3 ([6af23eb](https://github.com/softrams/bulwark/commit/6af23eb373d5fc5b8c6230db6e4f20680fbec932))
* **deps:** bump mysql from 2.17.1 to 2.18.1 ([cf1a858](https://github.com/softrams/bulwark/commit/cf1a858263250f63dbc83fb7323613c5cab42598))
* **deps:** bump ngx-markdown from 8.2.1 to 9.1.1 in /frontend ([2d5574b](https://github.com/softrams/bulwark/commit/2d5574b71f55e5671b96cb78e04f519c253f9ba3))
* **deps:** bump nodemailer from 6.4.2 to 6.4.10 ([9ba41f3](https://github.com/softrams/bulwark/commit/9ba41f31278bd48fe0def48f8d07fc27f30280ec))
* **deps:** bump puppeteer from 1.20.0 to 5.0.0 ([ba72380](https://github.com/softrams/bulwark/commit/ba723801dd54a121a33bdf7dbfba4db4c8245e0a))
* **deps:** bump rxjs from 6.5.4 to 6.6.0 in /frontend ([e28f1ed](https://github.com/softrams/bulwark/commit/e28f1ede03893fe2f12896250c0633c386caeed2))
* **deps:** bump ts-node from 8.4.1 to 8.10.2 ([12dc1fc](https://github.com/softrams/bulwark/commit/12dc1fc8abe24842869f4aa19f574f59be63e921))
* **deps:** bump typeorm from 0.2.24 to 0.2.25 ([dd663d9](https://github.com/softrams/bulwark/commit/dd663d98e0444f40d07e08b7fc92086167f3a3f6))
* **deps:** bump uuid from 3.4.0 to 8.2.0 ([395ae16](https://github.com/softrams/bulwark/commit/395ae16f32cdad745e10ab595e48071b67a3b63f))
* **deps-dev:** bump @angular/language-service in /frontend ([2b48498](https://github.com/softrams/bulwark/commit/2b48498a81444b9ea851e0b1200a998925886b3c))
* **deps-dev:** bump @commitlint/cli from 8.3.5 to 9.0.1 ([cfe0308](https://github.com/softrams/bulwark/commit/cfe030877f9607d896852c905dde2c46b2ad8dc4))
* **deps-dev:** bump @commitlint/config-conventional ([0be3d9b](https://github.com/softrams/bulwark/commit/0be3d9bda8154c9e4a26a332287e6412c4bd983f))
* **deps-dev:** bump karma from 4.0.1 to 5.1.0 in /frontend ([6e63c60](https://github.com/softrams/bulwark/commit/6e63c606da20e29d802bd344dc0110bdd6cbbcac))
* **deps-dev:** bump karma-jasmine from 1.1.2 to 3.3.1 in /frontend ([3a25383](https://github.com/softrams/bulwark/commit/3a2538313299bdb7dfecdd8f0bb087908c47ffcb))
* **deps-dev:** bump nodemon from 1.19.3 to 2.0.4 ([b5ce69b](https://github.com/softrams/bulwark/commit/b5ce69b31822ef59bc9825c8ca4a032385bf182e))
* **deps-dev:** bump ts-node from 7.0.1 to 8.10.2 in /frontend ([2120370](https://github.com/softrams/bulwark/commit/21203709e9bf19d310887c072db185b935c69982))
* **deps-dev:** bump tslint from 5.11.0 to 6.1.2 in /frontend ([14e7ab5](https://github.com/softrams/bulwark/commit/14e7ab56a245c533698d0fb5d17dacddcdb8892f))
* **deps-dev:** bump tslint from 6.1.0 to 6.1.2 ([24b1ed8](https://github.com/softrams/bulwark/commit/24b1ed8db6c8fbf8159b48b2324f583b3ec9e071))
* **deps-dev:** bump typescript from 3.8.3 to 3.9.6 ([b5cd69e](https://github.com/softrams/bulwark/commit/b5cd69ee478ec9d962c68c3eb998636180f60eef))
* **release:** 3.1.4 ([69ce27f](https://github.com/softrams/bulwark/commit/69ce27f54795707ead852816050a4f8c35d3a789))
* **release:** 3.1.5 ([0c3d25a](https://github.com/softrams/bulwark/commit/0c3d25aa2c6a5892b10b43dc985f5b42b4771e6f))
* **release:** 3.1.6 ([db6137b](https://github.com/softrams/bulwark/commit/db6137b8e0a212f3b900dc5760ef2fdcd2e49ac1))

### [3.1.6](https://github.com/softrams/bulwark/compare/v3.1.5...v3.1.6) (2020-07-11)


### CI

* **node.js.yml:** initial commit for github action ([7a87e2b](https://github.com/softrams/bulwark/commit/7a87e2b4ee5dcf7fb09e9d2ca66051a61c4a09a6)), closes [#6](https://github.com/softrams/bulwark/issues/6)

### [3.1.5](https://github.com/softrams/bulwark/compare/v3.1.4...v3.1.5) (2020-07-11)


### Others

* **deps:** bump @ng-select/ng-select from 4.0.0 to 4.0.4 in /frontend ([be713d0](https://github.com/softrams/bulwark/commit/be713d01a50ca36270948e7e1773968d31579605))
* **deps:** bump bcrypt from 3.0.7 to 5.0.0 ([39f0eeb](https://github.com/softrams/bulwark/commit/39f0eeb7b55d9e98c1252959e3b09cd31869368b))
* **deps:** bump class-validator from 0.10.2 to 0.12.2 ([c5402ca](https://github.com/softrams/bulwark/commit/c5402ca4a77cc09bbd819183606353fec646ed88))
* **deps:** bump core-js from 2.6.10 to 3.6.5 in /frontend ([ff968bc](https://github.com/softrams/bulwark/commit/ff968bc39584897fe166869d26f809633cc0b64b))
* **deps:** bump ngx-markdown from 8.2.1 to 9.1.1 in /frontend ([2d5574b](https://github.com/softrams/bulwark/commit/2d5574b71f55e5671b96cb78e04f519c253f9ba3))
* **deps:** bump puppeteer from 1.20.0 to 5.0.0 ([ba72380](https://github.com/softrams/bulwark/commit/ba723801dd54a121a33bdf7dbfba4db4c8245e0a))
* **deps:** bump rxjs from 6.5.4 to 6.6.0 in /frontend ([e28f1ed](https://github.com/softrams/bulwark/commit/e28f1ede03893fe2f12896250c0633c386caeed2))
* **deps:** bump ts-node from 8.4.1 to 8.10.2 ([12dc1fc](https://github.com/softrams/bulwark/commit/12dc1fc8abe24842869f4aa19f574f59be63e921))
* **deps:** bump typeorm from 0.2.24 to 0.2.25 ([dd663d9](https://github.com/softrams/bulwark/commit/dd663d98e0444f40d07e08b7fc92086167f3a3f6))
* **deps-dev:** bump @commitlint/cli from 8.3.5 to 9.0.1 ([cfe0308](https://github.com/softrams/bulwark/commit/cfe030877f9607d896852c905dde2c46b2ad8dc4))
* **deps-dev:** bump @commitlint/config-conventional ([0be3d9b](https://github.com/softrams/bulwark/commit/0be3d9bda8154c9e4a26a332287e6412c4bd983f))
* **deps-dev:** bump karma from 4.0.1 to 5.1.0 in /frontend ([6e63c60](https://github.com/softrams/bulwark/commit/6e63c606da20e29d802bd344dc0110bdd6cbbcac))
* **deps-dev:** bump karma-jasmine from 1.1.2 to 3.3.1 in /frontend ([3a25383](https://github.com/softrams/bulwark/commit/3a2538313299bdb7dfecdd8f0bb087908c47ffcb))
* **deps-dev:** bump nodemon from 1.19.3 to 2.0.4 ([b5ce69b](https://github.com/softrams/bulwark/commit/b5ce69b31822ef59bc9825c8ca4a032385bf182e))
* **deps-dev:** bump tslint from 5.11.0 to 6.1.2 in /frontend ([14e7ab5](https://github.com/softrams/bulwark/commit/14e7ab56a245c533698d0fb5d17dacddcdb8892f))
* **deps-dev:** bump tslint from 6.1.0 to 6.1.2 ([24b1ed8](https://github.com/softrams/bulwark/commit/24b1ed8db6c8fbf8159b48b2324f583b3ec9e071))

### [3.1.4](https://github.com/softrams/bulwark/compare/v3.1.3...v3.1.4) (2020-07-11)

### [3.1.3](https://github.com/softrams/bulwark/compare/v3.1.2...v3.1.3) (2020-07-10)


### Others

* **fix dependabot config:** fix dependabot config errors ([f4acc17](https://github.com/softrams/bulwark/commit/f4acc17bb797a16214f761239391477795d5ba9d))

### [3.1.2](https://github.com/softrams/bulwark/compare/v3.1.1...v3.1.2) (2020-07-10)


### Others

* **add target branch:** add target branch to dependabot ([8a5732b](https://github.com/softrams/bulwark/commit/8a5732bceb32b6ee44f4b83837112090643b5a59))

### [3.1.1](https://github.com/softrams/bulwark/compare/v3.1.0...v3.1.1) (2020-07-10)


### Others

* **add dependabot config:** add dependabot configuration ([bcf46b1](https://github.com/softrams/bulwark/commit/bcf46b146b2240c4d7269caf3df2ee413771d431)), closes [#65](https://github.com/softrams/bulwark/issues/65)

## [3.1.0](https://github.com/softrams/bulwark/compare/v3.0.2...v3.1.0) (2020-07-09)


### Features

* **user-profile component:** ability to update user password ([9855987](https://github.com/softrams/bulwark/commit/985598765c7e7a4002bc5dd679a2096a1833dbc6)), closes [#50](https://github.com/softrams/bulwark/issues/50)
* **user-profile.component.ts:** wired API to auth service and user prof ([6b6eb36](https://github.com/softrams/bulwark/commit/6b6eb36b1a361d2c3601e6cb7d4bac24a80b5c0c)), closes [#50](https://github.com/softrams/bulwark/issues/50)


### Bug Fixes

* **babel.config.js:** added new line ([e0617dd](https://github.com/softrams/bulwark/commit/e0617dd8e0d7c5c3b71ec88cc903e22632f5c418))
* **jest.config.js:** removed tsx and jsx ([a269233](https://github.com/softrams/bulwark/commit/a26923324c0fbff7a32617fb5cc9298ef53df816))
* **jwt.spec.ts:** added comments ([3b1505b](https://github.com/softrams/bulwark/commit/3b1505bbe7a449a32188f97f1fdbee4f6f1de63e))
* **jwt.spec.ts:** added process.env to beforeAll to fix the issue ([51ab6e8](https://github.com/softrams/bulwark/commit/51ab6e805df007f3dbc41c9864670b2716ed9afd))
* **jwt.spec.ts:** readded dotenv.config per PR ([e6ff159](https://github.com/softrams/bulwark/commit/e6ff1590f177c0460976360682e84935a8cc848b))
* **jwt.spec.ts:** removed need for process.env ([c8ab992](https://github.com/softrams/bulwark/commit/c8ab99274859d9287ff21f9e82416dd2ef1d73db))
* **package.json:** added needed packages to package.json ([15708b7](https://github.com/softrams/bulwark/commit/15708b7a19eed9a65be054876e4b231d2cee02ca))
* **testing.md:** fixed a typo issue ([5441e7b](https://github.com/softrams/bulwark/commit/5441e7b43bba629bff0eaef374355e2f45163938))
* **tsconfig.json:** added spec.ts to the exclude list ([66321e1](https://github.com/softrams/bulwark/commit/66321e1284adc186fdc645a4cdc65f6b74b992f5))


### Code Refactoring

* **user-profile.component.html .spec.ts:** updated element ID ([e91f40c](https://github.com/softrams/bulwark/commit/e91f40c820bd340f0b8f8f1472be7ecf737ba342)), closes [#50](https://github.com/softrams/bulwark/issues/50)


### Docs

* **contributing.md:** added a testing section under the linting section ([332e174](https://github.com/softrams/bulwark/commit/332e174f34a3b1bb996c7af567478b9a33dcfe9f))
* **contributing.md:** removed testing information and added testing.md ([f3bdc44](https://github.com/softrams/bulwark/commit/f3bdc443cea498a8ce1fcf6f6687475b2c4c3c61))
* **testing.md:** added a line to open the test coverage ([95d4862](https://github.com/softrams/bulwark/commit/95d48623d0a929bc667b92e0ee6b93484bdb1b54))
* **testing.md:** removed comment of early stages ([f4ccdb9](https://github.com/softrams/bulwark/commit/f4ccdb92c1ac9dfe30f9a8241f15f7162c058a3e))
* **testings.md:** added testing doc to run down requirements ([4dc0672](https://github.com/softrams/bulwark/commit/4dc0672e7cd267201ff3126a9363b8758e3fe037))

### [3.0.2](https://github.com/softrams/bulwark/compare/v3.0.1...v3.0.2) (2020-05-28)


### Docs

* **seed-user.ts:** updated documentation ([1797f44](https://github.com/softrams/bulwark/commit/1797f4412cd1cfca0c8fa3ce54709a9aa81b8d34))

### [3.0.1](https://github.com/softrams/bulwark/compare/v3.0.0...v3.0.1) (2020-05-28)


### Bug Fixes

* **seed-user.ts:** update seed user with new fields ([a7881b8](https://github.com/softrams/bulwark/commit/a7881b80d2baf4a017d1cb70661002dce65f20b8)), closes [#57](https://github.com/softrams/bulwark/issues/57)

## [3.0.0](https://github.com/softrams/bulwark/compare/v2.0.1...v3.0.0) (2020-05-28)


### ⚠ BREAKING CHANGES

* **assessment form and report:** ManyToMany relationship has been created between the User and Assessment models.
API's have been updated for this change.  New API's created to retrieve users.

### Features

* **assessment form and report:** dynamic tester association to asssment ([3bbfc9c](https://github.com/softrams/bulwark/commit/3bbfc9c4d3d3a8f801ef3691298de223cea10dcc)), closes [#52](https://github.com/softrams/bulwark/issues/52)


### Bug Fixes

* **angular datepipe:** added UTC property to datepipe ([701611f](https://github.com/softrams/bulwark/commit/701611f94970502b327bd29f22cd99c090892359)), closes [#3](https://github.com/softrams/bulwark/issues/3)


### Code Refactoring

* **assessment controller:** updated response message. Removed usrId ([c2d2555](https://github.com/softrams/bulwark/commit/c2d2555e48aa86be0e13f1778297d1cdb73efb75)), closes [#52](https://github.com/softrams/bulwark/issues/52)

### [2.0.1](https://github.com/softrams/bulwark/compare/v2.0.0...v2.0.1) (2020-05-20)


### Docs

* **readme.md:** added new env var and fixed typo ([5ccf6ac](https://github.com/softrams/bulwark/commit/5ccf6ac022ee1012141b2518848443de04b5f19c))

## 2.0.0 (2020-05-20)


### ⚠ BREAKING CHANGES

* **register component and api:** The register API was updated to include the missing fields.  User validation was
also added to the Register API.
* Update to the login API and jwt middleware
* **patch and retrieve user:** Added three new columns for the User table: firstName, lastName, title

### Features

* **app interceptor:** original request now is sent after refresh ([5072fce](https://github.com/softrams/bulwark/commit/5072fce3a11dd8a8e51cfa46f6adc4d51ed843f3)), closes [#5](https://github.com/softrams/bulwark/issues/5)
* implemented Refresh Token ([21522ac](https://github.com/softrams/bulwark/commit/21522ac7373b310629d80b584687dac3d09a646e)), closes [#5](https://github.com/softrams/bulwark/issues/5)
* **patch and retrieve user:** implemented APIs for user patch and get ([fefd70b](https://github.com/softrams/bulwark/commit/fefd70b64c4fe38136ea3b741cb435aa637c118c)), closes [#4](https://github.com/softrams/bulwark/issues/4)
* **user profile component:** created user profile template ([d2431af](https://github.com/softrams/bulwark/commit/d2431afcbd67f5adc7612ee100997d4d79a48fce)), closes [#4](https://github.com/softrams/bulwark/issues/4)


### Bug Fixes

* **register component and api:** added missing user fields to registeAPI ([6f73ef3](https://github.com/softrams/bulwark/commit/6f73ef34fa8f34f787dfa265a293301d12673dae))


### Docs

* **contributing.md:** modified pull request process ([8f4adce](https://github.com/softrams/bulwark/commit/8f4adce1993d873e77593b9063997a5134be3d59))


### Tests

* **user-profile component:** added unit tests to the user-profile comp ([91ee0c7](https://github.com/softrams/bulwark/commit/91ee0c7173e48af10ba8451000b8b0b456620b4e)), closes [#4](https://github.com/softrams/bulwark/issues/4)


### Code Refactoring

* **login.component:** remove console.log.  Used auth service func ([30eae04](https://github.com/softrams/bulwark/commit/30eae049a9b912de729e13b8a5a93c67baa7bfc3)), closes [#5](https://github.com/softrams/bulwark/issues/5)


### Others

* **angular.json:** turned off google analytics ([1a849c5](https://github.com/softrams/bulwark/commit/1a849c5b0127f01805eb7444aa3668f171281d53))
* **implemented commitizen and husky:** implented commit mgs standards ([16c3e43](https://github.com/softrams/bulwark/commit/16c3e432e20ad7f7c94a5a857631a9d4b12c8cdc))
* **implemented husky, commitizen, and pull request template:** commit ([f14b5b2](https://github.com/softrams/bulwark/commit/f14b5b25ef2dcdc3d07c5fb899ea883cc9b51f65)), closes [#43](https://github.com/softrams/bulwark/issues/43)
* **package.json:** installed standard version ([4390b61](https://github.com/softrams/bulwark/commit/4390b616c3176a77acd98ef2ad9d3d76c900a034)), closes [#42](https://github.com/softrams/bulwark/issues/42)
* **package.json:** updated contributors and set version to 1 ([0910ebe](https://github.com/softrams/bulwark/commit/0910ebe1bd57bf5f3c5cb4b8b3cd066c7d864c3c))
