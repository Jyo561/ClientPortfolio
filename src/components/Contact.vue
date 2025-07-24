<script>
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { Clock, Sparkles, Share2, Bookmark, MessageCircle, ChevronRight, Linkedin, Twitter,
  Facebook, Mail, Github } from 'lucide-vue-next';

export default defineComponent({
  name: 'Contact',
  props: {
    isLightMode2: {
      type: Boolean,
      default: false
    },
    setRoute: {
      type: Function,
      required: true
    },
    currentRoute: {
      type: String,
      required: true
    }
  },
  components: {
    RouterLink,
    Clock,
    Sparkles,
    Share2,
    Bookmark,
    MessageCircle,
    ChevronRight,
    Linkedin,
    Twitter,
    Github,
    Facebook,
    Mail
  },
  methods: {
    handleNavigation(route) {
      this.setRoute(route);
    }
  },
  computed: {
    currentDateTime() {
      const date = new Date();
      return date.toLocaleString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }).replace(/(\d+)(st|nd|rd|th)/, '$1');
    }
  }
});
</script>

<template>
  <div :class="isLightMode2 ? 'light-mode' : 'dark-mode'">
    <header class="header">
      <div class="header-container">
        <div class="flex justify-center items-center">
          <div class="w-full px-4">
            <div class="flex justify-center">
              <h1 class="main-title text-3xl md:text-4xl font-bold text-center italic inline-block pb-2">
                CONTACT
              </h1>
            </div>
          </div>
        </div>
        <nav class="navigation">
          <div class="nav-links">
            <RouterLink :to="`/`" @click="handleNavigation('/')" class="font-medium">
              Home
            </RouterLink>
            <RouterLink :to="`/experience`" @click="handleNavigation('/experience')" class="font-medium">
              Experience
            </RouterLink>
            <RouterLink :to="`/projects`" @click="handleNavigation('/projects')" class="font-medium">
              Projects
            </RouterLink>
            <RouterLink :to="`/skills`" @click="handleNavigation('/skills')" class="font-medium">
              Skills and Tools
            </RouterLink>
            <RouterLink :to="`/publications`" @click="handleNavigation('/publications')" class="font-medium">
              Publications
            </RouterLink>
            <RouterLink :to="`/contact`" @click="handleNavigation('/contact')" class="font-medium">
              Contact
            </RouterLink>
          </div>
        </nav>
      </div>
    </header>

    <!-- Main Content Grid -->
    <div class="main-content-grid">
      <div class="text-block grid grid-cols-3 gap-4 w-full">
        <div class="flex gap-2 linkedin-icon">  <Linkedin /> <span class="">Linkedin</span> </div>
        <div class="flex gap-2 github-icon">  <Github /> <span class="">Github</span> </div>
        <div class="flex gap-2 twitter-icon">  <Twitter /> <span class="">Twitter</span>  </div>
        <div class="flex gap-2 facebook-icon">  <Facebook /> <span class="">Facebook</span> </div>
        <div class="flex gap-2 mail-icon">  <Mail /> <span class="">Mail</span> </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Base Styles */
.header {
  padding-top: 6rem;
}
.header-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.main-title {
  font-family: Postoni, BodoniSvtyTwoITCTT-Book, georgia, serif;
  /*border-bottom: 2px solid var(--text-color);*/
}
.linkedin-icon:hover{
  color: #0a66c2;
}

/*.github-icon:hover{
  color: #333333;
}*/

.twitter-icon:hover{
  color: #1D9BF0;
}

.facebook-icon:hover{
  color: #0866FF;
}

.mail-icon:hover{
  color: #db4437;
}

.navigation {
  font-family: 'Franklin', 'Franklin-fallback', sans-serif;
  border-bottom: 1px solid var(--text-color);
  margin: 1.5rem 1rem 0;
  padding-bottom: 1rem;
}
.nav-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem 1rem;
}
.navigation a {
  color: var(--text-color);
  font-weight: 900;
  border-radius: 20px;
  padding: 0.25rem 0.75rem;
  transition: background-color 0.3s ease;
}
.navigation a:hover {
  background-color: var(--hover-nav-color);
}

/* Main Content Grid */
.main-content-grid {
  /*margin: 2rem auto;*/
  padding: 2rem 2rem;
  display: flex;
  /*grid-template-columns: 1fr;  Default to single column */
  gap: 2rem;
  align-items: center;
  justify-content: center;
}
.text-block {
  width: 100%;
  color: var(--text-color);
}
.author-text {
  font-size: 0.875rem; /* 14px */
  color: var(--text-color-muted);
  margin-bottom: 0.5rem;
}
.content-title {
  font-size: 2.25rem; /* 36px */
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 1rem;
}
.content-description {
  color: var(--text-color-muted);
  font-size: 1rem; /* 16px */
}
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.content-image {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Tablet and Desktop Styles */
@media (min-width: 768px) {
  .header {
    padding-top: 6rem;
  }
  .navigation {
    margin: 2rem 4rem 0;
  }
  .nav-links {
    justify-content: space-between;
    flex-wrap: nowrap;
  }
  .main-content-grid {
     /* Two columns for tablets and up */
    padding: 0 6rem;
    margin-top: 4rem;
  }
  .content-title {
    font-size: 2.5rem; /* 40px */
  }
}

/* Large Desktop Styles */
@media (min-width: 1024px) {
  .header {
    padding-top: 6rem;
  }
  .navigation {
    margin: 2rem 6rem 0;
  }
  .main-content-grid {
    padding: 0 18rem;
  }
}
</style>
