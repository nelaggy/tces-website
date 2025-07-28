<script lang="ts">
  import PostList from '$lib/components/blog/PostList.svelte';

  const samplePosts = [
    {
      title: "Getting Started with Computer Science",
      preview: "An introduction to the fundamentals of computer science, covering programming concepts, algorithms, and data structures that every student should know.",
      href: "/blog/getting-started-cs"
    },
    {
      title: "Web Development Best Practices",
      preview: "Learn the essential practices for building modern web applications, including responsive design, accessibility, and performance optimization.",
      href: "/blog/web-dev-practices"
    },
    {
      title: "Understanding Machine Learning",
      preview: "Explore the basics of machine learning, from supervised learning to neural networks, and discover how AI is shaping the future of technology.",
      href: "/blog/understanding-ml"
    },
    {
      title: "Database Design Principles",
      preview: "Master the art of database design with fundamental principles, normalization techniques, and best practices for scalable data architecture.",
      href: "/blog/database-design"
    },
    {
      title: "Software Engineering Methodologies",
      preview: "Compare different software development methodologies including Agile, Scrum, and DevOps, and learn when to apply each approach.",
      href: "/blog/software-methodologies"
    },
    {
      title: "Cybersecurity Fundamentals",
      preview: "Understand the key concepts of cybersecurity, including common threats, security protocols, and best practices for protecting digital assets.",
      href: "/blog/cybersecurity-fundamentals"
    }
  ];
</script>

<header class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div class="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">Articles</h1>
  
          <p class="mt-1.5 text-sm text-gray-500">
            Explore our collection of articles covering computer science, technology, and software engineering topics.
          </p>
        </div>
      </div>
    </div>
  </header>

<PostList posts={samplePosts} />