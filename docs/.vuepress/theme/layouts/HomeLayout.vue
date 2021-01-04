<template>
  <div
    class="theme-container home-layout"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
  <!-- <Loading v-if="showLoading" /> -->
    <!-- <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar" /> -->

    <!-- <div class="sidebar-mask" @click="toggleSidebar(false)" /> -->

    <!-- <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </Sidebar>-->

    <!-- <Home v-if="$page.frontmatter.home" /> -->

    <!-- <Page v-else :sidebar-items="sidebarItems">
      <template #top>
        <slot name="page-top" />
      </template>
      <template #bottom>
        <slot name="page-bottom" />
      </template>
    </Page>-->
    <div class="left-nav">
      <HomeLogo />
      <HomeNavLinks />
    </div>
    <div class="right-content">
      <div class="author-name">
        <p>{{data.surname}}</p>
        <p>{{data.name}}</p>
      </div>
      <div v-if="data.actionLink && data.actionText" class="home-button">
        <RouterLink class="home-link" :to="data.actionLink">{{data.actionText}}</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
// import Home from "@theme/components/Home.vue";
// import Navbar from "@theme/components/Navbar.vue";
import HomeNavLinks from "@theme/components/HomeNavLinks.vue";
import HomeLogo from "@theme/components/HomeLogo.vue";

// import Page from "@theme/components/Page.vue";
// import Sidebar from "@theme/components/Sidebar.vue";
import { resolveSidebarItems } from "../util";
import SearchBox from "@SearchBox";
import { resolveNavLinkItem } from "../util";

export default {
  name: "Layout",

  components: {
    // Home,
    // Page,
    // Sidebar,
    // Navbar,
    HomeNavLinks,
    HomeLogo,
    // Loading
  },

  data() {
    return {
      isSidebarOpen: false,
      showLoading: true
    };
  },

  computed: {
    data() {
      return this.$page.frontmatter;
    },
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
          "no-sidebar": !this.shouldShowSidebar
        },
        userPageClass
      ];
    }
  },

  mounted() {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false;
    });
    document.body.addEventListener(
      "touchmove",
      this._noPageMove,
      { passive: false }
    ) //passive 参数不能省略，用来兼容ios和android
  },
  destroyed(){
    document.body.removeEventListener(
      "touchmove",
      this._noPageMove,
      { passive: false }
    )
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
        y: e.changedTouches[0].clientY
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
    _noPageMove(e){
      e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
    }
  },
  beforeRouteEnter(to, form, next) {
    console.log('进入')
    next();
  },
  beforeRouteLeave(to, form, next) {
    console.log('likai ')
    next();
  }
};
</script>

<style lang="stylus">
.home-layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #464646 url('../static/images/v2-e2d79a06fcd84fcbf71860cf20ac55d7_r.jpg') no-repeat fixed center;
  background-size: cover;
  display: flex;

  .left-nav {
    width: 46%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.30196078431372547);
    position: relative;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 20vh;
    padding-right: 40px;
    box-sizing: border-box;

    >div:first-child {
      margin-bottom: 20px;
    }
  }

  .right-content {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-top: 18vh;
    padding-left: 40px;

    .author-name {
      font-weight: bolder;
      color: #fff;

      p {
        margin: 0;
        line-height: 1;
        font-size: 5rem;
      }
    }

    .home-link {
      display: block;
      margin-top: 6rem;
      padding: 15px 30px;
      width: 20%;
      font-size: 1rem;
      text-align: center;
      color: #fff;
      border: 2px solid #d2d2d2;
      transition: all 0.3s ease;

      &:hover {
        background-color: #d2d2d238;
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .right-content {
    .author-name {
      p {
        font-size: 4rem !important;
      }
    }

    .home-button {
      .home-link {
        margin-top: 3rem;
        width: 34%;
      }
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .right-content {
    .author-name {
      p {
        font-size: 3rem !important;
      }
    }

    .home-button {
      .home-link {
        margin-top: 3rem;
        width: 34%;
      }
    }
  }

  .home-layout {
    .left-nav {
      width: 37%;
      padding-right: 25px;
      padding-top: 19vh;

      .home-logo {
        width: 76%;
      }
    }

    .right-content {
      padding-left: 25px;

      .home-button {
        .home-link {
          width: 56%;
          padding: 10px;
        }
      }
    }
  }
}
</style>
