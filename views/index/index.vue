<template>
    <div class="example">{{msg}}
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        props: [],
        data() {
            return {
                msg: 'Hello world!'
            }
        }
    }
</script>
<style lang="sass">
    .example {
        color:red;
    }
</style>
<custom1>
    This could be e.g. documenttation for the component.
</custom1>