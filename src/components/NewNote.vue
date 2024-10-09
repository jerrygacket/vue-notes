<template>
    <!-- new note -->
    <div class="new-note">
        <messageComponent v-if="message" :message="message" />
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
import messageComponent from '@/components/MessageComponent.vue'
// import { nextTick } from 'vue';

export default {
    components: {
        messageComponent
    },
    // mutate props is antipattern!
    // https://v2.vuejs.org/v2/guide/components-props.html#One-Way-Data-Flow
    // define a local data property that uses the prop as its initial value
    data: function () {
        return {
            newNote: {
                title: '',
                descr: '',
                priority: 'p1',
            },
            message: null,
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
            let newNote =  JSON.parse(JSON.stringify(this.newNote));
            if (this.newNote.title === '') {
                this.message = 'empty title'
                return false;
            }
            
            this.newNote.date = new Date(Date.now()).toLocaleString();
            this.$store.dispatch('addNote', newNote);
            // await nextTick();
            this.newNote.title = '';
            this.newNote.descr = '';
            this.newNote.priority = 'p1';
            this.message = null;
        }
    }
}
</script>

<style lang="css" scoped>
.new-note {
    margin-bottom: 2rem;
}
</style>