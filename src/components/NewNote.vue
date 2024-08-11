<template>
    <!-- new note -->
    <div class="new-note">
        <input type="text" v-model="newNote.title">
        <template v-for="(priorityItem, index) in priority">
            <div v-bind:key="index" class="form-check">
                <input type="radio" class="form-check-input" :id="index" v-model="newNote.priority" :value="priorityItem" :checked="index === 0" name="p">
                <label class="form-check-label" v-bind:for="index">{{ priorityItem }}</label>
            </div>
        </template>
        <textarea v-model="newNote.descr"></textarea>
        <button @click="addNote" class="btn btnPrimary">Add Note</button>
    </div>
</template>

<script>
export default {
    props: {
        note: {
            type: Object,
            required: true
        }
    },
    // mutate props is antipattern!
    // https://v2.vuejs.org/v2/guide/components-props.html#One-Way-Data-Flow
    // define a local data property that uses the prop as its initial value
    data: function () {
        return {
            newNote: this.note,
            priority: [
                'p1',
                'p2',
                'p3',
            ]
        }
    },
    methods: {
        addNote () {
            console.log(this.newNote);
            this.$emit('addNote', this.newNote);
        }
    }
}
</script>

<style lang="css" scoped>
.new-note {
    margin-bottom: 2rem;
}
</style>