<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { Clock, ExternalLink, Sparkles, Share2, Bookmark, MessageCircle, ChevronRight } from 'lucide-vue-next';

export default defineComponent({
  name: 'Publications',
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
    ExternalLink,
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
              <h1 class="main-title text-3xl md:text-4xl font-bold text-center border-b-4 border-orange-500 inline-block pb-2">
                PUBLICATIONS
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
      <div class="publications-list">
        <!-- Publication Card -->
        <div class="publication-card">
          <h1 class="title">
            Groundbreaking AI Advance Unveiled
          </h1>
          <h2 class="subtitle">
            Federated Learning with Personalized Layers
          </h2>
          <p class="date">Nov 11, 2020</p>
          <p class="source">
            AISTATS
            <a href="#" target="_blank" rel="noopener noreferrer" class="external-link">
              <ExternalLink class="icon" />
            </a>
          </p>
          <p class="description">
            A revolutionary paper on federated learning, published in AISTATS on November 11, 2020, transforms AI. This approach enables collaborative model training on network edges, enhancing data privacy by avoiding central aggregation. Addressing statistical heterogeneity, the FedPer method, using deep feedforward networks, boosts performance on CIFAR datasets and a Flickr image aesthetics set, marking a leap in personalized deep learning.
          </p>
        </div>
        <!-- Add more .publication-card divs here as needed -->
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

/* Container and Content Styles */
.container {
  padding: 1rem;
  margin-top: 2rem;
}

.publications-list {
  width: 100%;
  max-width: 800px; /* Constrain width for better readability */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.publication-card {
  text-align: justify;
}

.title {
  font-family: Postoni, Postoni-fallback, serif !important;
  font-size: 1.75rem;
  font-weight: bold;
}

.subtitle {
  margin-top: 0.5rem;
  font-family: Franklin, Arial, Helvetica, serif;
  color: var(--text-color-muted);
  font-size: 1.25rem;
  font-weight: bold;
}

.date {
  margin-top: 0.5rem;
  font-family: Franklin, Franklin-fallback, sans-serif;
  color: var(--text-color-muted);
}

.source {
  margin-top: 0.5rem;
  font-family: Franklin, Franklin-fallback, sans-serif;
  color: var(--text-color-muted);
  font-style: italic;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.external-link {
  color: var(--text-color);
  display: inline-flex;
  align-items: center;
}

.icon {
  width: 16px;
  height: 16px;
}

.description {
  margin-top: 0.5rem;
  font-family: georgia, 'Times New Roman', serif;
  color: var(--text-color);
  font-style: italic;
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
}

/* Large Desktop Styles */
@media (min-width: 1024px) {
  .header {
    padding-top: 6rem;
  }

  .navigation {
    margin: 2rem 6rem 0;
  }
}
</style>
