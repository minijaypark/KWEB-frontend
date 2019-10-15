<template>
  <div class="form">
    <a-form
      :form="form"
      @submit="handleSubmit"
      :style="{
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }"
    >
      <div :style="{ width: '600px' }">
        <a-form-item v-bind="formItemLayout" label="이메일">
          <a-input
            v-decorator="[
              'email',
              {
                rules: [
                  { type: 'email', message: '이메일 형식이 아닙니다.' },
                  { required: true, message: '이메일을 입력해주세요.' },
                ],
              },
            ]"
          />
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="비밀번호">
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: '비밀번호를 입력해주세요.' },
                  { validator: validateToNextPassword },
                ],
              },
            ]"
            type="password"
          />
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="비밀번호 확인">
          <a-input
            v-decorator="[
              'confirm',
              {
                rules: [
                  { required: true, message: '비밀번호를 확인해주세요.' },
                  { validator: compareToFirstPassword },
                ],
              },
            ]"
            type="password"
            @blur="handleConfirmBlur"
          />
        </a-form-item>
        <a-form-item v-bind="formItemLayout">
          <span slot="label"> 이름 </span>
          <a-input
            v-decorator="[
              'name',
              {
                rules: [
                  {
                    required: true,
                    message: '이름을 입력해주세요.',
                  },
                ],
              },
            ]"
          />
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="휴대폰번호">
          <a-input
            v-decorator="[
              'phone',
              {
                rules: [
                  { required: true, message: '휴대폰 번호를 입력해주세요' },
                ],
              },
            ]"
            type="number"
            style="width: 100%"
          >
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
            I have read the <a href=""> agreement </a>
          </a-checkbox>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit"> Register </a-button>
        </a-form-item>
      </div>
    </a-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ValidateCallback } from 'ant-design-vue/types/form/form';
export default Vue.extend({
  name: 'sign-up',
  data() {
    return {
      form: this.$form.createForm(this),
      confirmDirty: false,
      autoCompleteResult: [] as any[],
      formItemLayout: {
        labelCol: { xs: { span: 24 }, sm: { span: 6 } },
        wrapperCol: { xs: { span: 24 }, sm: { span: 18 } },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 16, offset: 8 },
        },
      },
    };
  },
  methods: {
    handleSubmit(e: any) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err: Error[], values: any) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleConfirmBlur(e: any) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule: any, value: string, callback: any) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    },
    validateToNextPassword(rule: any, value: string, callback: any) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
  },
});
</script>

<style scoped>
.form {
  display: flex;
  align-items: center;
  height: calc(100vh - 120px);
}
</style>
