<template>
<modalComponent title="modal with form validation" @close="$emit('close')">
    <template v-slot:body>
        <form @submit.prevent="onSubmit">
            
            <div class="form-item" :class="{ errorInput: $v.name.$error }">
                <label>Name:</label>
                <p class="error-text" v-show="$v.name.$dirty && !$v.name.required">Required</p>
                <p class="error-text" v-show="$v.name.$dirty && !$v.name.minLength">Too short. Must be more than {{ $v.name.$params.minLength.min }}</p>
                <input 
                    v-model="name" 
                    :class="{ error: $v.name.$error }"
                    @blur="$v.name.$touch()"
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
                    @blur="$v.email.$touch()"
                >
            </div>

            <button type="submit" class="btn btnDefaul">Submit</button>
            
        </form>
    </template>

    </modalComponent>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import modalComponent from '@/components/ModalComponent.vue'

export default {
    components: {modalComponent},
    data () {
        return {
            email: '',
            name: '',
        }
    },
    validations: {
        name: {
            required,
            minLength: minLength(4)
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
                this.name = '';
                this.email = '';
                this.$v.$reset() ;

                this.$emit('close')
            }
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