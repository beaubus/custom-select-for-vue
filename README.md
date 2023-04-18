Simple unstyled custom select component with v-model and support of @focusout event

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
