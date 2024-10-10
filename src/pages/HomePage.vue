<template>
  <div class="wrapper-content wrapper-content--fixed">
      <section>
        <div class="container">
          <h2>New Note</h2>
          <newNote />
          <hr>
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

          <notesList :notes="notesFilter" :grid="grid"/>
        </div>
      </section>
    </div>
</template>

    <script>

import newNote from '@/components/NewNote.vue'
import notesList from '@/components/NotesList.vue'
import searchNotes from '@/components/SearchNotes.vue'

export default {
  components: {
    newNote,
    notesList,
    searchNotes
  },
  data () {
    return {
      title: 'notes app',
      grid: true,
      search: '',
      modalFirst: false,
      modalValidate: false,
      modalPassword: false,
      modalLogin: false,
      modalRegister: false,
      modalSecond: {
        show: false,
        name: '',
        email: '',
      },
      loadedNote: {
            id: 0,
            title: '',
            descr: '',
            date: new Date(Date.now()).toLocaleString(),
            priority: '',
        },
    }
  },
    computed: {
    notesFilter () {
      return this.$store.getters.getNotes(this.search)
    }
  }
}
</script>
