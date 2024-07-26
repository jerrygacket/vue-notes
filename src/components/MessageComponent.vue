<template>

    <div class="message">
        <p>comonent message - {{ message }}</p>
    </div>

</template>

<script>
export default {
    props: {
        message: {
            type: String,
            required: true
            // default: 'default'
        }
    }
}
</script>

<style lang="css" scoped>
.message {
    color: brown;
    text-align: center;
}
</style>