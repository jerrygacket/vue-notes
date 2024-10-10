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
                descr: 'note descr 2',
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
            payload.id = Math.max(...state.notesList.map(o => o.id)) + 1
            state.notesList.push(payload)
        },
        removeNote(state, payload) {
            let noteIndex = state.notesList.findIndex((element) => element.id === +payload);
            console.log(payload)
            console.log(noteIndex)
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
                state.notesList[noteIndex].date = new Date(Date.now()).toLocaleString();
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
        getNotes: (state) => (search) => {
            let arr = state.notesList;
        
            if (!search) return arr

            search = search.trim().toLowerCase();

            arr = arr.filter(function(item) {
                if (item.title.toLowerCase().indexOf(search) !== -1)
                return item
            });
            
            return arr;
        },
        getNoteById: (state) => (id) => {
            state.notesList.find((element) => element.id === +id)
        }
    },
}