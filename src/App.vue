<template>
  <div class="wrapper">

    <div class="content-wrapper">
      <section>
        <div class="container">
          <h1>{{ title }}</h1>

          <messageComponent v-if="message" :message="message" />

          <newNote 
          :note="newNote" 
          @addNote="addNote"
          />

          <!-- note list -->
          <div class="notes">
              <div class="note" v-for="(note, index) in notes" :key="index">
                  <div class="note-header">
                      <p>{{ note.title }}</p>
                  </div>
                  <div class="note-body">
                      <p>{{ note.descr }}</p>
                      <span>{{ note.date }}</span>
                  </div>
                  <hr>
              </div>
          </div>
        </div>
      </section>
    </div>

  </div>
</template>

<script>
import messageComponent from '@/components/MessageComponent.vue'
import newNote from '@/components/NewNote.vue'
export default {
  components: {
    messageComponent,
    newNote
  },
  data () {
    return {
      title: 'notes app',
      message: null,
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
      }
  }
}
</script>

<style></style>
