<template>
  <div class="articles">
    <a-layout style="padding: 24px 0; background: #fff; height: 100%;">
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          style="height: 100%"
          :selectedKeys="[$route.path]"
        >
          <a-sub-menu key="공지사항">
            <span slot="title"><a-icon type="notification" />공지사항</span>
            <a-menu-item key="1"
              ><router-link to="/articles/notification"
                >공지</router-link
              ></a-menu-item
            >
            <a-menu-item key="2"
              ><router-link to="/articles/schedule"
                >일정</router-link
              ></a-menu-item
            >
          </a-sub-menu>
          <a-sub-menu key="준회원">
            <span slot="title"><a-icon type="user" />준회원</span>
            <a-menu-item key="3"
              ><router-link to="/articles/juns"
                >스터디 자료</router-link
              ></a-menu-item
            >
            <a-menu-item key="4"
              ><router-link to="/articles/submission"
                >과제 제출</router-link
              ></a-menu-item
            >
          </a-sub-menu>
          <a-sub-menu key="정회원">
            <span slot="title"><a-icon type="user" />정회원</span>
            <a-menu-item key="5"
              ><router-link to="/articles/jungs"
                >스터디 자료</router-link
              ></a-menu-item
            >
            <a-menu-item key="6"
              ><router-link to="/articles/report"
                >스터디 보고</router-link
              ></a-menu-item
            >
          </a-sub-menu>
          <a-sub-menu key="외부인">
            <span slot="title"><a-icon type="laptop" />외부인</span>
            <a-menu-item key="7">option 7</a-menu-item>
            <a-menu-item key="8">option 8</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
        <router-view />
      </a-layout-content>
    </a-layout>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Notification from '@/components/Notification.vue';

export default Vue.extend({
  name: 'articles',
  components: { Notification },
});
</script>

<style scoped>
.articles {
  height: 100%;
}
</style>
