<template>
  <a-table :columns="columns" :dataSource="data">
    <span slot="postTitle" slot-scope="text, record"
      ><router-link :to="{ name: 'post', params: { postId: record.key } }"
        >{{ text }}
      </router-link></span
    >
    <span slot="action" slot-scope="text, record">
      <router-link
        :to="{ name: 'post-modify', params: { postId: record.key } }"
      >
        수정
      </router-link>
      <a-divider type="vertical" />
      <a-button @click="deletePost">삭제</a-button>
    </span>
  </a-table>
</template>

<script lang="ts">
import Vue from 'vue';

const columns = [
  {
    title: '작성자',
    dataIndex: 'name',
    key: 'name',
    width: '10%',
  },
  {
    title: '제목',
    dataIndex: 'title',
    key: 'postTitle',
    scopedSlots: { customRender: 'postTitle' },
  },
  {
    title: '게시일',
    dataIndex: 'date',
    key: 'date',
    width: '15%',
  },
  {
    dataIndex: 'action',
    scopedSlots: { customRender: 'action' },
    width: '10%',
  },
];

const data = [
  {
    key: '1',
    title: '안녕하세요',
    name: '김무명',
    date: '2019-01-01',
  },
  {
    key: '2',
    title: '케이웹입니다',
    name: '이무명',
    date: '2019-01-01',
  },
  {
    key: '3',
    title: '자유게시판',
    name: '박무명',
    date: '2019-01-01',
  },
];

export default Vue.extend({
  name: 'post-list',
  data() {
    return {
      data,
      columns,
    };
  },
  methods: {
    deletePost() {
      // TODO
      console.log('HI');
    },
  },
});
</script>
