<script>
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { Clock, Sparkles, Share2, Bookmark, MessageCircle, ChevronRight } from 'lucide-vue-next';

export default defineComponent({
  name: 'Experience',
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
              <h1 class="main-title text-3xl md:text-4xl font-bold text-center border-b-4 border-orange-500 inline-block pb-2">
                EXPERIENCE
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
          <h1 class="heading">Career Milestones Shape Future</h1>
        </div>
        <div class="text-center full-width">
          <h2 class="heading2">Dedicated Expert Shines, Driving Innovation Full-Time</h2>
        </div>

        <!-- Card: Interactive Brokers -->
        <div class="card large-card">
          <div class="text-content">
            <h1 class="title">UNVEILED: Quantitative Dev Shines at Interactive Brokers</h1>
            <h2 class="subtitle">Masters C++ and Python for financial breakthroughs</h2>
            <p class="date">Jan 2024 - Present</p>
            <p class="location">New York, New York, United States</p>
            <p class="description">In a notable career milestone, a skilled technologist has been making strides as a Quantitative Developer at Interactive Brokers in New York since January 2024. Over the past year and seven months, they have leveraged their expertise in C++ and Python to craft sophisticated financial algorithms, bolstering the firm's competitive edge in the trading sector. This role underscores their growing influence in the high-stakes world of quantitative finance. Their journey began to take shape with an internship at the same firm from June to August 2023, spending three months in an on-site role in New York. During this period, they honed their C++ and Python proficiencies, laying a solid foundation for their subsequent achievements. This early experience proved instrumental in shaping their technical acumen.</p>
          </div>
          <div class="image-container">
            <img src="https://imgs.search.brave.com/jtENFihhAr-Ew6NvAfw7SmtHrVacGvyNgo280nYKv70/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvY2xv/dWR5LWJsdWUtcy0y/dnIxbTJrNTU0cGM0/ZWRoLmpwZw" alt="Cloudy blue sky" class="image" />
          </div>
        </div>

        <!-- Grid: Georgia Tech & Adobe -->
        <div class="grid">
          <div class="card">
            <h1 class="title">Academic Star Excels as Teaching Assistant at Georgia Tech</h1>
            <p class="date">Jan 2023 - May 2023</p>
            <p class="description">A rising academic star excelled as a full-time Graduate Teaching Assistant at Georgia Institute of Technology from January 2022 to May 2023. Working with Professor Zsofia Kiraly, they advanced research in continual and federated learning while teaching CS-7643 (Deep Learning) in Spring 2023. Leveraging skills in CUDA, MXNet, and PyTorch, they elevated educational and research standards at a premier tech institution.</p>
          </div>
          <div class="card">
            <h1 class="title">Tech Innovator Shines at Adobe with Groundbreaking Efficiency</h1>
            <p class="date">Aug 2020 - Aug 2022</p>
            <p class="description">A skilled professional left a mark as a full-time Member Technical Staff at Adobe from August 2020 to August 2022. They enhanced the Adobe Cloud Document Syncing and Collaboration Platform (ACPL), cutting CRUD API time by 2x (30ms) and memory use by 5x. With Adobe Content Platform expertise, they set new efficiency benchmarks.</p>
          </div>
        </div>

        <div class="text-center full-width">
          <h2 class="heading2">Skilled Contributor Excels, Part-Time Impact Strong</h2>
        </div>

        <!-- Card: University of Florida (Reversed) -->
        <div class="card large-card reverse">
          <div class="text-content">
            <h1 class="title">Breakthrough Research Unveiled at University of Florida</h1>
            <p class="date">May 2021 - May 2022</p>
            <p class="description">A dedicated researcher has achieved a remarkable milestone as a part-time contributor at the University of Florida's Bioinformatics Lab, serving from May 2021 to May 2022, spanning one year and one month. This innovative mind designed and developed an advanced algorithm for supervised dimensionality reduction, with the Class Separation Transformation (CST) outperforming state-of-the-art (SOTA) tSNE and UMAP by 5% on NCBI cancer datasets. Notably, CST successfully identified the propagation of "AGER" and "IL6" within cancer PPI networks. Leveraging expertise in Riemannian manifold approximation, fuzzy singular sets, and dimensionality reduction, this researcher optimized the separation of high-dimensional transcriptomes for complex multigenic traits, marking a significant leap forward in bioinformatics research.</p>
          </div>
          <div class="image-container">
            <img src="https://imgs.search.brave.com/z7eftY72WU5KFpG3UVFufK5aF_2n2_ryWubXgzpZZXQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTk0/MDIwMTA4L3Bob3Rv/L3VuaXZlcnNpdHkt/b2YtZmxvcmlkYS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Tm5lcFNWYUxWNi1O/WFpHNU82VkFCMWc3/MWQtNFl5d1BFTWVY/UE55NDgtZz0" alt="University of Florida" class="image" />
          </div>
        </div>

        <!-- Grid: IIT Madras & IIT Delhi -->
        <div class="grid">
          <div class="card">
            <h1 class="title">Innovative Research Shines at IIT Madras</h1>
            <p class="date">Sept 2021 - Mar 2022</p>
            <p class="description">A skilled researcher at IIT Madras' RISE LAB (part-time, Sep 2021-Mar 2022) used Restless Multi-Armed Bandits (RMAB) to boost maternal and child health resource allocation by 61.37%. Under Professor Balamurali Ravindran's AI for social good initiative, they excelled with PyTorch, Python, and Scikit-Learn.</p>
          </div>
          <div class="card">
            <h1 class="title">Cutting-Edge Research Unveiled at IIT Delhi</h1>
            <p class="date">May 2021 - May 2022</p>
            <p class="description">A researcher impacted IIT Delhi's LowCode Systems Lab part-time (Sep 2020-Mar 2021). With Professor Abhishek Jindal, they developed Unikernels for Android using QEMU and KVM, testing security. "Unikernels in Smartphones" boosted app offloading, advancing mobile tech. Skilled in C++, Java, Android Development, and OCaml, they drive lightweight computing.</p>
          </div>
        </div>

        <div class="text-center full-width">
          <h2 class="heading2">Eager Intern Grows, Experience Shapes Future</h2>
        </div>

        <!-- Grid: 3 Columns for Internships -->
        <div class="grid grid-3-col">
          <div class="card">
            <h1 class="title">Trailblazing Genetic Research at University of Sydney</h1>
            <p class="date">Dec 2018 - Jan 2019</p>
          </div>
          <div class="card">
            <h1 class="title">Innovative Drone Technology at Skylark Drones</h1>
            <p class="date">May 2018 - July 2018</p>
          </div>
          <div class="card">
            <h1 class="title">Revolutionary AI Research at Adobe</h1>
            <p class="date">May 2019 - Aug 2019</p>
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
.container {
  padding: 1rem;
  margin-top: 1rem;
}
.column-left {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
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
.heading2 {
  font-size: 1.5rem;
  margin: 2rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--text-color);
  display: inline-block;
}
.card {
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.large-card {
  margin-top: 2rem;
}
.text-content {
  text-align: left;
}
.title {
  font-family: Postoni,Postoni-fallback,serif !important;
  font-size: 1.5rem;
  line-height: 1.2;
  font-weight: bold;
}
.subtitle {
  font-family: Franklin, Arial, Helvetica,serif;
  color: var(--text-color-muted);
  font-size: 1.1rem;
  font-weight: bold;
}
.date,
.location {
  font-family: Franklin, Franklin-fallback, sans-serif;
  color: var(--text-color-muted);
}
.location {
  font-style: italic;
}
.description {
  font-family: georgia, Times New Roman,serif;
  color: var(--text-color);
  font-style: italic;
  text-align: justify;
}
.image-container {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 0.25rem;
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
  .large-card {
    flex-direction: row;
    gap: 2rem;
    align-items: center;
  }
  .large-card .text-content {
    flex: 2;
  }
  .large-card .image-container {
    flex: 1;
    margin-top: 0;
  }
  .large-card.reverse {
    flex-direction: row-reverse;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 2rem;
    width: 100%;
  }
  .grid-3-col {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .title {
    font-size: 1.75rem;
  }
  .subtitle {
    font-size: 1.25rem;
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
