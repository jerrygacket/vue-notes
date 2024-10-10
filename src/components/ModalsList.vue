<template>
    <div class="wrapper-content wrapper-content--fixed">
        <section>
          <div class="container">
            <button class="btn btnPrimary" @click="modalFirst = !modalFirst">show first modal</button>
    <button class="btn btnPrimary" @click="modalSecond.show = !modalSecond.show">show modal withForm</button>
    <button class="btn btnPrimary" @click="modalValidate = !modalPassword">show modal withForm validation</button>
    <button class="btn btnPrimary" @click="modalPassword = !modalValidate">show modal with password</button>
    <button class="btn btnPrimary" @click="modalLogin = !modalLogin">show login</button>
    <button class="btn btnPrimary" @click="modalRegister = !modalRegister">show modalRegister</button>

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
        <modalLogin v-show="modalLogin" @close="modalLogin = false" @switchModal = "switchModal" />
        <modalRegister v-show="modalRegister" @close="modalRegister = false" @switchModal = "switchModal" />
          </div>
        </section>
    </div>
</template>

<script>
import modalComponent from '@/components/ModalComponent.vue'
import modalValidate from '@/components/ModalValidate.vue'
import modalPassword from '@/components/ModalPassword.vue'
import modalLogin from '@/components/ModalLogin.vue'
import modalRegister from '@/components/ModalRegister.vue'

export default {
  components: {
    modalComponent,
    modalValidate,
    modalPassword,
    modalLogin,
    modalRegister
  },
  data () {
    return {
      modalFirst: false,
      modalValidate: false,
      modalPassword: false,
      modalLogin: false,
      modalRegister: false,
      modalSecond: {
        show: false,
        name: '',
        email: '',
      }
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
      switchModal (modal) {
        if (modal === 'login') {
          this.modalLogin = true;
        }
        if (modal === 'register') {
          this.modalRegister = true;
        }
      },
  }
}
</script>