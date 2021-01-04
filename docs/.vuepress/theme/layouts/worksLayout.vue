<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar" />

    <div class="sidebar-mask" @click="toggleSidebar(false)" />

    <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </Sidebar>

    <Home v-if="$page.frontmatter.home" />
    <div class="page">
      <div v-for="(item,i) in $page.frontmatter.dataList" :key="i" class="works-item">
        <div class="pic-container">
          <div class="pic">
            <img :src="item.thumbnail" alt />
          </div>
        </div>
        <div class="content">
          <h3 class="title">{{item.title}}</h3>
          <div class="des">{{item.describe}}</div>
          <a target="_blank" :href="item.url" class="url">查看项目</a>
        </div>
        <div class="index">{{i}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Home from "@theme/components/Home.vue";
import Navbar from "@theme/components/Navbar.vue";
import Page from "@theme/components/Page.vue";
import Sidebar from "@theme/components/Sidebar.vue";
import { resolveSidebarItems } from "../util";

export default {
  name: "Layout",

  components: {
    Home,
    Page,
    Sidebar,
    Navbar,
  },

  data() {
    return {
      isSidebarOpen: false,
    };
  },

  computed: {
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      );
    },

    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return (
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      );
    },

    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          "no-navbar": !this.shouldShowNavbar,
          "sidebar-open": this.isSidebarOpen,
          "no-sidebar": !this.shouldShowSidebar,
        },
        userPageClass,
      ];
    },
  },

  mounted() {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false;
    });
    console.log(this.$page);
  },

  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
      this.$emit("toggle-sidebar", this.isSidebarOpen);
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
      };
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    },
  },
};
</script>
<style lang="stylus" scoped>
.theme-container {
  background-color: rgba(27, 31, 35, 0.05);
  min-height: 100vh;
}

.page {
  padding-top: 3.6rem;
  max-width: 1200px;
  margin: 0 auto;
}

.works-item {
  display: flex;
  justify-content: space-between;
  border-radius: 14px;
  box-shadow: 0 0 10px #f1f1f1;
  padding: 10px;
  height: 200px;
  margin-bottom: 1.4rem;
  background-color: #fff;
  position: relative;
  overflow: hidden;
}

.works-item .index {
  position: absolute;
  background-color: #3eaf7cc2;
  color: #fff;
  right: 1.5rem;
  top: 0;
  font-size: 2rem;
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  font-weight: bold;
}

.works-item:first-child {
  margin-top: 1.4rem;
}

.pic-container {
  width: 36%;
}

.pic {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.pic img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
}

.works-item .content {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.6rem 0;
}

.works-item .content a {
  text-decoration: underline;
  display: inline-block;
}

@media (max-width: $MQMobile) {
  .page {
    width: 96%;
  }

  .works-item {
    margin-bottom: 0.6rem;
    border-radius: 0.4rem;
  }

  .works-item:first-child {
    margin-top: 0.6rem;
  }

  .works-item .index {
    position: absolute;
    background-color: #3eaf7cc2;
    color: #fff;
    right: 1.5rem;
    top: 0;
    font-size: 2rem;
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    font-weight: bold;
  }
}
</style>
