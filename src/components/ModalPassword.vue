<template>
<modalComponent title="modal with form validation" @close="closeModal">
    <template v-slot:body>
        <form @submit.prevent="onSubmit">
            
            <div class="form-item" :class="{ errorInput: $v.name.$error }">
                <label>Name:</label>
                <p class="error-text" v-show="$v.name.$dirty && !$v.name.required">Required</p>
                <p class="error-text" v-show="$v.name.$dirty && !$v.name.minLength">Too short. Must be more than {{ $v.name.$params.minLength.min }}</p>
                <input 
                    v-model="name" 
                    :class="{ error: $v.name.$error }"
                    @change="$v.name.$touch()"
                >
            </div>
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
            <div class="form-item" :class="{ errorInput: $v.passwordCheck.$error }">
                <label>Repeat password:</label>
                <p class="error-text" v-show="!$v.passwordCheck.sameAsPassword">doesn't match</p>
                <input 
                    v-model="passwordCheck" 
                    :class="{ error: $v.passwordCheck.$error }"
                    @blur="$v.passwordCheck.$touch()"
                >
            </div>

            <button type="submit" class="btn btnDefaul">Submit</button>
            
        </form>
    </template>

    </modalComponent>
</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
import modalComponent from '@/components/ModalComponent.vue'

export default {
    components: {modalComponent},
    data () {
        return {
            email: '',
            name: '',
            password: '',
            passwordCheck: '',
        }
    },
    validations: {
        name: {
            required,
            minLength: minLength(4)
        },
        passwordCheck: {
            sameAsPassword: sameAs('password')
        },
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
                    name: this.name,
                    email: this.email
                }
                console.log(user);
                this.closeModal();
            }
        },
        closeModal() {
            this.name = '';
            this.email = '';
            this.password = '';
            this.passwordCheck = '';
            this.$v.$reset();
            this.$emit('close')
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