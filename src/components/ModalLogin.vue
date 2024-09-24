<template>
<modalComponent title="modal login" @close="closeModal">
    <template v-slot:login>
        <form @submit.prevent="onSubmit">

            <div class="form-item" :class="{ errorInput: $v.email.$error }">
                <label>Email:</label>
                <p class="error-text" v-show="!$v.email.required">Required</p>
                <p class="error-text" v-show="!$v.email.email">Not email</p>
                <p class="error-text" v-show="!$v.email.minLength">Too short. Must be more than {{ $v.email.$params.minLength.min }}</p>
                <input 
                    v-model="email" 
                    :class="{ error: $v.email.$error }"
                    @change="$v.email.$touch()"
                >
            </div>
            <div class="form-item" :class="{ errorInput: $v.password.$error }">
                <label>Password:</label>
                <p class="error-text" v-show="!$v.password.required">Required</p>
                <p class="error-text" v-show="!$v.password.minLength">Too short. Must be more than {{ $v.password.$params.minLength.min }}</p>
                <input 
                    v-model="password" 
                    :class="{ error: $v.password.$error }"
                    @change="$v.password.$touch()"
                >
            </div>

            <button type="submit" class="btn btnDefaul">Submit</button>
            
        </form>

        <a href="#" @click="switchToRegister">Switch to register</a>
    </template>
</modalComponent>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import modalComponent from '@/components/ModalComponentExt.vue'

export default {
    components: {modalComponent},
    data () {
        return {
            email: '',
            password: ''
        }
    },
    validations: {
       password: {
            required,
            minLength: minLength(6)
        },
        email: {
            required,
            email,
            minLength: minLength(6)
        }
    },
    methods: {
        onSubmit () {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                const user = {
                    email: this.email,
                    password: this.password
                }
                console.log(user);
                this.closeModal();
            }
        },
        closeModal() {
            this.email = '';
            this.password = '';
            this.$v.$reset();
            this.$emit('close')
        },
        switchToRegister() {
            this.closeModal();
            this.$emit('switchModal', 'register')
        }
    }
}
</script>

<style>
.form-item .error-text {
    display: none;
    margin-bottom: 8px;
    font-size: 13.4px;
    color: brown;
}
.form-item.errorInput .error-text {
    display: block;
}
input.error {
    border-color: brown;
}
</style>