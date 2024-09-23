<template>
  <div class="wrapper">

    <div class="content-wrapper">
      <section>
        <div class="container">

          <button class="btn btnPrimary" @click="modalFirst = !modalFirst">show first modal</button>
          <button class="btn btnPrimary" @click="modalSecond.show = !modalSecond.show">show modal withForm</button>
          <button class="btn btnPrimary" @click="modalValidate = !modalPassword">show modal withForm validation</button>
          <button class="btn btnPrimary" @click="modalPassword = !modalValidate">show modal with password</button>

          <modalComponent 
          v-show="modalFirst" 
          title="modal 1"
          @close="modalFirst = false">
          
          <template v-slot:body>
            <h1>Здесь мог быть заголовок страницы</h1>
            <button class="btn btnDefaul" @click="modalFirst = false">Close modal</button>
          </template>

        </modalComponent>

        <modalComponent 
          v-show="modalSecond.show" 
          title="modal with form"
          @close="modalSecond.show = false">
          
          <template v-slot:body>
            <form @submit.prevent="submitSecondForm">
              <label>Name:</label>
              <input type="text" v-model="modalSecond.name">
              <label>Email:</label>
              <input type="text" v-model="modalSecond.email">
              <button type="submit" class="btn btnDefaul" @click="modalSecond.show = false">Submit</button>
            </form>
          </template>

        </modalComponent>

        <modalValidate v-show="modalValidate" @close="modalValidate = false" />
        <modalPassword v-show="modalPassword" @close="modalPassword = false" />

          <messageComponent v-if="message" :message="message" />

          <newNote :note="newNote" @addNote="addNote" />

          <div class="note-header">

            <h1>{{ title }}</h1>

            <searchNotes 
              :value="search" 
              placeholder="find note" 
              @search="search = $event"
            />

            <div class="icons">
              <svg :class="{ active: grid }" @click="grid=true" class="btn-remove" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <svg :class="{ active: !grid }" @click="grid=false" class="btn-remove" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
            </div>
          </div>

          <notesList :notes="notesFilter" :grid="grid" @remove="removeNote" @saveNote="saveNote" />
        </div>
      </section>
    </div>

  </div>
</template>

<script>
import messageComponent from '@/components/MessageComponent.vue'
import newNote from '@/components/NewNote.vue'
import notesList from '@/components/NotesList.vue'
import searchNotes from '@/components/SearchNotes.vue'
import modalComponent from '@/components/ModalComponent.vue'
import modalValidate from '@/components/ModalValidate.vue'
import modalPassword from '@/components/ModalPassword.vue'

export default {
  components: {
    messageComponent,
    newNote,
    notesList,
    searchNotes,
    modalComponent,
    modalValidate,
    modalPassword
  },
  data () {
    return {
      title: 'notes app',
      message: null,
      grid: true,
      search: '',
      modalFirst: false,
      modalValidate: false,
      modalPassword: false,
      modalSecond: {
        show: false,
        name: '',
        email: '',
      },
      newNote: {
              title: '',
              descr: '',
              priority: 'p1',
          },
      loadedNote: {
            id: 0,
            title: '',
            descr: '',
            date: new Date(Date.now()).toLocaleString(),
            priority: '',
        },
      notes: [
          {
              id: 1,
              title: 'title 1 note',
              descr: 'note descr 1',
              date: new Date(Date.now()).toLocaleString(),
              priority: 'p1'
          },
          {
            id: 2,
              title: 'title 2 note',
              descr: 'note descr 3',
              date: new Date(Date.now()).toLocaleString(),
              priority: 'p2'
          },
          {
            id: 3,
              title: 'title 3 note',
              descr: 'note descr 3',
              date: new Date(Date.now()).toLocaleString(),
              priority: 'p3'
          },
          {
            id: 4,
              title: 'title 4 note',
              descr: 'note descr 4',
              date: new Date(Date.now()).toLocaleString(),
              priority: 'p1'
          }
      ]
    }
  },
  methods: {
      submitSecondForm() {
        let data = {
          name: this.modalSecond.name,
          email: this.modalSecond.email,
        }
        console.log(data);
        this.clearSecondForm()
      },
      clearSecondForm() {
        this.modalSecond.name = '';
        this.modalSecond.email = '';
        this.modalSecond.show = false;
      },
      addNote() {
          console.log(this.newNote);
          let {title, descr, priority} = this.newNote;
          if (title === '') {
              this.message = 'empty title'
              return false;
          }
          let newId = Math.max(...this.notes.map(o => o.id))
          this.notes.push({
            id:newId,
              title,
              descr,
              date: new Date(Date.now()).toLocaleString(),
              priority
          });
          this.newNote.title = '';
          this.newNote.descr = '';
          this.newNote.priority = 'p1';
          this.message = null;
      },
      saveNote(loadedNote) {
          console.log(loadedNote);
          let note = this.notes.find((element) => element.id === loadedNote.id);
          console.log(note);
          note.title = loadedNote.title;
          note.descr = loadedNote.descr;
          note.date = loadedNote.date;
          note.priority = loadedNote.priority;
      },
      removeNote (id) {
        this.notes.splice(id, 1);
      },
  },
  computed: {
    notesFilter () {
      let arr = this.notes,
        search = this.search;
      if (!search) return arr

      search = search.trim().toLowerCase();

      arr = arr.filter(function(item) {
        if (item.title.toLowerCase().indexOf(search) !== -1)
          return item
      })

      return arr;
    }
  }
}
</script>

<style></style>
