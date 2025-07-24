<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { Clock, Sparkles, Share2, Bookmark, MessageCircle, ChevronRight, Github, ExternalLink } from 'lucide-vue-next';

export default defineComponent({
  name: 'Projects',
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
    Github,
    ExternalLink,
  },
  methods: {
    handleNavigation(route: string) {
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
                PROJECTS
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
          </div>
        </nav>
      </div>
    </header>
    <div class="container">
      <div class="column-left">
        <div class="text-center full-width">
          <h1 class="heading">Trailblazing Tech Triumphs</h1>
        </div>

        <!-- Large Project Card -->
        <div class="project-card-large">
          <div class="text-content">
            <h1 class="project-title">Smart Healthcare Optimizer Revolutionizes Resource Management</h1>
            <p class="project-date">Jan 2024 - Present</p>
            <div class="project-links">
              <a href="#" class="icon-link"><Github class="icon" /></a>
              <a href="#" class="icon-link"><ExternalLink class="icon" /></a>
            </div>
            <p class="project-description">Aditya Singh has launched the Smart Healthcare Optimizer, a simple AI tool to improve resource management in healthcare. Developed from January to March 2023 using Python, TensorFlow, and PyTorch, it boosted resource allocation by 50%. This innovation highlights Singh’s growing tech impact.</p>
          </div>
          <div class="image-container">
            <img src="https://imgs.search.brave.com/jtENFihhAr-Ew6NvAfw7SmtHrVacGvyNgo280nYKv70/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvY2xv/dWR5LWJsdWUtcy0y/dnIxbTJrNTU0cGM0/ZWRoLmpwZw" alt="Cloudy blue sky" class="project-image" />
          </div>
        </div>

        <!-- Grid for Smaller Project Cards -->
        <div class="project-grid">
          <div class="project-card-small">
            <h1 class="project-title">Secure Mobile Unikernel Framework Sets New Standard</h1>
            <p class="project-date">Jan 2023 - May 2023</p>
            <div class="project-links">
              <a href="#" class="icon-link"><Github class="icon" /></a>
              <a href="#" class="icon-link"><ExternalLink class="icon" /></a>
            </div>
            <p class="project-description">Aditya Singh has introduced the Secure Mobile Unikernel Framework for Android, debuting in late 2020. Using C++ and QEMU, this innovative tool boosted app security and cut memory usage by 30%. Tested with KVM, it established a new benchmark for lightweight mobile solutions, showcasing Singh’s expertise in Android Development.</p>
          </div>
          <div class="project-card-small">
            <h1 class="project-title">Tech Innovator Shines at Adobe with Groundbreaking Efficiency</h1>
            <p class="project-date">Aug 2020 - Aug 2022</p>
            <div class="project-links">
              <a href="#" class="icon-link"><Github class="icon" /></a>
              <a href="#" class="icon-link"><ExternalLink class="icon" /></a>
            </div>
            <p class="project-description">A skilled professional left a mark as a full-time Member Technical Staff at Adobe from August 2020 to August 2022. They enhanced the Adobe Cloud Document Syncing and Collaboration Platform (ACPL), cutting CRUD API time by 2x (30ms) and memory use by 5x. With Adobe Content Platform expertise, they set new efficiency benchmarks.</p>
          </div>
        </div>
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
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
.main-title {
  font-family: PostoniUltraItalic, Postoni, Garamond, Georgia, serif;
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
.container {
  padding: 1rem;
  /*margin-top: 1rem;*/
}
.column-left {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.full-width {
  width: 100%;
}
.text-center {
  text-align: center;
}
.heading {
  font-size: 2rem;
  margin-bottom: 1rem;
}

/* Project Card Styles */
.project-card-large, .project-card-small {
  width: 100%;
  text-align: justify;
}
.project-card-large {
  display: flex;
  flex-direction: column;
  /*margin-top: 2rem;*/
}
.text-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.project-title {
  font-family: Postoni, Postoni-fallback, serif !important;
  font-size: 1.75rem;
  font-weight: bold;
  line-height: 1.2;
}
.project-date {
  font-family: Franklin, Franklin-fallback, sans-serif;
  color: var(--text-color-muted);
}
.project-links {
  display: flex;
  gap: 1rem;
  color: var(--text-color-muted) !important;
}
.icon-link {
  color: var(--text-color);
}
.icon {
  width: 20px;
  height: 20px;
}
.project-description {
  font-family: georgia, 'Times New Roman', serif;
  color: var(--text-color);
  font-style: italic;
}
.image-container {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.project-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 0.25rem;
}
.project-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;
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
  .container {
    padding: 1rem 4rem;
  }
  .project-card-large {
    flex-direction: row;
    gap: 2rem;
    align-items: center;
  }
  .project-card-large .text-content {
    flex: 2;
  }
  .project-card-large .image-container {
    flex: 1;
    margin-top: 0;
  }
  .project-image {
    width: 80%;
    height: auto;
  }
  .project-grid {
    grid-template-columns: 1fr 1fr;
  }
  .project-title {
    font-size: 2rem;
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
  .container {
    padding: 1rem 6rem;
  }
}
</style>
