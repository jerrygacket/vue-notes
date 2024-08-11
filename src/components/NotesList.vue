<template>
    <!-- note list -->
    <div class="notes">
        <template v-for="(note, index) in notes">
            <div class="note" :class="{ full: !grid, important_note: note.priority === 'p2', vip_note: note.priority === 'p3' }" :key="index">
            <div class="note-header" :class="{ full: !grid }" @click="editNote(index)">
                <p v-if="loadedNote.id === 0 || loadedNote.id !== note.id" class="note-title" >{{ note.title }}</p>
                <input v-if="loadedNote.id > 0 && loadedNote.id === note.id" :ref="tilteEdit" type="text" v-model="loadedNote.title" @blur="resetNote">
                <p class="btn-remove" @click="removeNote(index)">x</p>
            </div>
            <div class="note-body">
                <p>{{ note.descr }}</p>
                <span>{{ note.date }}</span>
                <p>{{ note.priority }}</p>
            </div>
        </div>
        </template>
    
        
    </div>
</template>

<script>
export default {
    props: {
        notes: {
            type: Array,
            required: true
        },
        grid: {
            type: Boolean,
            required: true
        }
    },
    data: function () {
        return {
            loadedNote: {
                id: 0,
                title: '',
                descr: '',
                date: new Date(Date.now()).toLocaleString(),
                priority: '',
            },
        }
    },
    methods: {
        removeNote (id) {
            console.log(`Node ${id} removed`);
            this.$emit('remove', id)
        },
        editNote (id) {
            console.log(`Node ${id} edit`);
            this.loadedNote = this.notes[id];
            this.$refs.tilteEdit.focus();
        },
        saveNote (id) {
            console.log(`Node ${id} save`);
            this.$emit('save', id, this.loadedNote)
        },
        resetNote () {
            console.log(`hide input`);
            this.loadedNote.id = 0;
        },
    }
}
</script>

<style lang="scss">
.notes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 40px 0;
}


.note {
    width: 46%;
    padding: 18px 20px;
    margin-bottom: 20px;
    background-color: white;
    &.full {
        width: 100%;
    }
    transition: all 0.25s cubic-bezier(0.19, 1, 0.22, 1);
    box-shadow: 0 30px 30px rgba(0,0,0,0.02);
    &:hover {
        box-shadow: 0 30px 30px rgba(0,0,0,0.04);
        transform: translate(0, -6px);
        transition-delay: 0s !important;
    }
    &.full {
        width: 100%;
        text-align: center;
    }
    &.important_note {
        background-color: rgb(251, 192, 129);
    }
    &.vip_note {
        background-color: rgb(255, 153, 153);
    }
}
.note-body {
    p {
        margin: 20px 0;
    }
    span {
        font-size: 14px;
        color: #999999;
    }
}
.note-header {
    h1 {
        font-size: 32px;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        color: #402caf;
        font-size: 22px;
    }
    &.full {
        justify-content: center;
        width: 100%;
        text-align: center;
        p {
            margin-right: 16px;
            &:last-child {
                margin-right: 0;
            }
        }
    }
    svg {
        margin-right: 12px;
        &:last-child {
            margin-right: 0;
        }
        &.active {
            color:darkslateblue
        }
        color: #999999;
    }
}
.btn-remove {
    cursor: pointer;
}
</style>