export default {
    state: {
        notesList: [
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
    },
    mutations: {
        addNote(state, payload) {
            if(typeof payload.id === 'undefined' || typeof state.notesList.find((element) => element.id === +payload.id) !== 'undefined') {
                payload.id = state.notesList.reduce((a, b) => Math.max(a, b), 0) + 1
            }
            state.notesList.push(payload)
        },
        removeNote(state, payload) {
            let noteIndex = state.notesList.findIndex((element) => element.id === +payload);
            if(typeof noteIndex !== 'undefined') {
                state.notesList.splice(noteIndex, 1);
            }
        },
        editNote(state, payload) {
            let noteIndex = state.notesList.findIndex((element) => element.id === payload.id);
            if(typeof noteIndex !== 'undefined') {
                console.log('edit ', state.notesList[noteIndex]);
                state.notesList[noteIndex].title = payload.title;
                state.notesList[noteIndex].descr = payload.descr;
                state.notesList[noteIndex].date = payload.date;
                state.notesList[noteIndex].priority = payload.priority;
            }
            
        }
    },
    actions: {
        addNote({commit}, payload) {
            commit('addNote', payload)
        },
        removeNote({commit}, payload) {
            commit('removeNote', payload)
        },
        editNote({commit}, payload) {
            commit('editNote', payload)
        }
    },
    getters: {
        getNotes(state) {
            return state.notesList
        },
        getNoteById: (state) => (id) => {
            state.notesList.find((element) => element.id === +id)
        }
    },
}