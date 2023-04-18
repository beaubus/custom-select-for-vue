<script>
import {CustomSelect} from './components/';

export default {
    components: {
        CustomSelect,
    },
    data() {
        return {
            country: '',
            countries: ['USA', 'Sweden', 'Denmark']
        }
    },
}
</script>


<template>
    <p>Selected country: {{ country }}</p>

    <CustomSelect label="Country"
                  v-model="country"
                  :options="countries"
    ></CustomSelect>
</template>


<style></style>
