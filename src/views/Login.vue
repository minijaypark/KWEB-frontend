<template>
  <div
    :style="{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'calc(100vh - 200px)',
    }"
  >
    <a-form :form="form" @submit="handleSubmit" class="user-inputs">
      <a-form-item>
        <a-input
          v-decorator="[
            'userName',
            {
              rules: [
                { required: true, message: 'Please input your username!' },
              ],
            },
          ]"
          placeholder="Username"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            {
              rules: [
                { required: true, message: 'Please input your Password!' },
              ],
            },
          ]"
          type="password"
          placeholder="Password"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-checkbox
          v-decorator="[
            'remember',
            {
              valuePropName: 'checked',
              initialValue: true,
            },
          ]"
        >
          Remember me
        </a-checkbox>
        <a-button type="primary" html-type="submit" class="login-form-button">
          Log in
        </a-button>
        <div>
          <router-link to="#">
            비밀번호 찾기
          </router-link>
          <router-link to="/signup">
            회원가입
          </router-link>
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'login',
  data: function() {
    return {
      form: this.$form.createForm(this),
    };
  },
  methods: {
    handleSubmit(e: any) {
      e.preventDefault();
      this.form.validateFields((err: any, values: any) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
  },
});
</script>
<style scoped>
.user-inputs {
  width: 400px;
}
.login-form-button {
  width: 100%;
}
</style>
