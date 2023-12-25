<a href="https://www.npmjs.com/package/@beaubus/custom-select-for-vue">
    <img src="https://img.shields.io/npm/dt/@beaubus/custom-select-for-vue?logo=npm" alt="npm downnloads count">
</a>

<a href="https://github.com/beaubus/custom-select-for-vue/blob/master/LICENSE">
    <img alt="MIT" src="https://img.shields.io/github/license/beaubus/custom-select-for-vue">
</a>
&nbsp;&nbsp;
<a href="https://twitter.com/intent/follow?screen_name=daily_web_dev">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/daily_web_dev?style=social">
</a>

<br>

Simple unstyled custom select component for Vue.js 3 with v-model and support of @focusout event


![](demo.gif)

## Installation
```shell
npm i @beaubus/custom-select-for-vue
```

## Usage
```js
import {CustomSelect} from '@beaubus/custom-select-for-vue';

<CustomSelect label="Country"
              v-model="country"
              :options="countries"
></CustomSelect>

```


## Styling
Select: `.cs-input`

Select label: `.cs-input label`

Select options: `.cs-options`

Select option: `.cs-options div`
