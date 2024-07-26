<template>
  <div class="wrapper">

    <div class="content-wrapper">
      <section>
        <div class="container">
          

          <messageComponent v-if="message" :message="message" />

          <newNote :note="newNote" @addNote="addNote" />
          
          <div class="note-header">
            <h1>{{ title }}</h1>
            <div class="icons">
              <svg :class="{ active: grid }" @click="grid=true" class="btn-remove" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <svg :class="{ active: !grid }" @click="grid=false" class="btn-remove" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
            </div>
          </div>

          <notesList :notes="notes" :grid="grid" @remove="removeNote" />
        </div>
      </section>
    </div>

  </div>
</template>

<script>
import messageComponent from '@/components/MessageComponent.vue'
import newNote from '@/components/NewNote.vue'
import notesList from '@/components/NotesList.vue'
export default {
  components: {
    messageComponent,
    newNote,
    notesList
  },
  data () {
    return {
      title: 'notes app',
      message: null,
      grid: true,
      newNote: {
              title: '',
              descr: ''
          },
      notes: [
          {
              title: 'title 1 note',
              descr: 'note descr 1',
              date: new Date(Date.now()).toLocaleString()
          },
          {
              title: 'title 2 note',
              descr: 'note descr 3',
              date: new Date(Date.now()).toLocaleString()
          },
          {
              title: 'title 3 note',
              descr: 'note descr 3',
              date: new Date(Date.now()).toLocaleString()
          },
          {
              title: 'title 4 note',
              descr: 'note descr 4',
              date: new Date(Date.now()).toLocaleString()
          }
      ]
    }
  },
  methods: {
      addNote() {
          console.log(this.newNote);
          let {title, descr} = this.newNote;
          if (title === '') {
              this.message = 'empty title'
              return false;
          }
          this.notes.push({
              title,
              descr,
              date: new Date(Date.now()).toLocaleString()
          });
          this.newNote.title = '';
          this.newNote.descr = '';
          this.message = null;
      },
      removeNote (id) {
        this.notes.splice(id, 1);
      }
  }
}
</script>

<style></style>
