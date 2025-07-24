<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { Clock, Sparkles, Share2, Bookmark, MessageCircle, ChevronRight } from 'lucide-vue-next';

export default defineComponent({
  name: 'SkillsandTools',
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
    ChevronRight
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
              <h1 class="main-title text-3xl md:text-4xl font-bold text-center inline-block pb-2">
                SKILLS + TOOLS
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

    <!-- Main Content Grid -->
    <div class="main-content-grid">
      <!-- Introductory Text Column -->
      <div class="text-block">
        <h2 class="content-title">
          An Arsenal for the Modern Age
        </h2>
        <p class="content-description">
          In today's fast-evolving technological landscape, versatility is paramount. A deep dive into the technologist's toolkit reveals a powerful and diverse arsenal, meticulously curated through years of academic research and hands-on project implementation.
          <br /><br />
          This collection of skills—spanning foundational programming languages, cutting-edge machine learning frameworks, and specialized techniques—demonstrates a commitment to not only keeping pace with innovation but driving it forward. Each tool and technique represents a capability to tackle complex challenges, from large-scale data processing to the intricate nuances of artificial intelligence.
        </p>
      </div>

      <!-- Skills Grid Column -->
      <div class="skills-container">
        <div class="skill-category">
          <h3 class="skill-heading">Programming Languages</h3>
          <ul class="skill-list">
            <li>C++</li>
            <li>Python</li>
            <li>Java</li>
            <li>OCaml</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3 class="skill-heading">Frameworks & Libraries</h3>
          <ul class="skill-list">
            <li>TensorFlow</li>
            <li>PyTorch</li>
            <li>Scikit-Learn</li>
            <li>MXNet</li>
            <li>OpenCV</li>
            <li>Pillow/PIL</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3 class="skill-heading">Dev & Virtualization</h3>
          <ul class="skill-list">
            <li>QEMU</li>
            <li>KVM</li>
            <li>Android SDK</li>
            <li>Adobe Content Platform</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3 class="skill-heading">Cloud & Data Tech</h3>
          <ul class="skill-list">
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div class="skill-category full-width-skill">
          <h3 class="skill-heading">Specialized Skills & Techniques</h3>
          <ul class="skill-list">
            <li>CUDA Programming</li>
            <li>Riemannian Manifold Approximation</li>
            <li>Fuzzy Singular Sets</li>
            <li>Advanced Dimensionality Reduction</li>
            <li>Class Separation Transformation (CST)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Base Styles */
.header {
  margin-top: 0rem;
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
  max-width: 1100px;
  margin: 2rem auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr; /* Default to single column */
  gap: 2rem;
  align-items: flex-start;
}

.text-block {
  color: var(--text-color);
}

.content-title {
  font-family: Postoni, BodoniSvtyTwoITCTT-Book, georgia, serif;
  font-size: 2rem; /* 32px */
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 1rem;
}

.content-description {
  color: var(--text-color);
  font-size: 1rem; /* 16px */
  line-height: 1.6;
  font-family: georgia, Times New Roman,serif;

}

/* Skills Grid Styles */
.skills-container {
  display: grid;
  grid-template-columns: 1fr; /* Single column on mobile */
  gap: 2rem;
}

.skill-category {
  background-color: var(--hover-nav-color);
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
}

.skill-heading {
  font-family: Postoni, Postoni-fallback, serif !important;
  font-weight: 900;
  font-size: 1.1rem;
  color: var(--text-color);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--text-color);
  display: inline-block;
}

.skill-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  color: var(--text-color);
  font-family: georgia, Times New Roman,serif;

}

.skill-list li {
  margin-bottom: 0.5rem;
  font-size: 1rem;
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
    grid-template-columns: 1fr 2fr; /* Two columns for tablets and up */
    padding: 0 2rem;
    margin-top: 4rem;
    gap: 3rem;
  }

  .content-title {
    font-size: 2.25rem; /* 36px */
  }

  .skills-container {
    grid-template-columns: repeat(2, 1fr); /* Two columns for skills grid */
  }

  .full-width-skill {
    grid-column: 1 / -1; /* Make this category span the full width */
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
    padding: 0 4rem;
  }
}
</style>
