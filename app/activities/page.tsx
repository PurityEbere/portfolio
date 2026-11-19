import Header from "@/components/Header";
import { plexMono } from "@/lib/fonts";

const technicalArticles = [
  {
    title: "How to Convert Prometheus Histograms to OTLP with the OpenTelemetry Collector",
    publication: "freeCodeCamp",
    url: "https://www.freecodecamp.org/news/how-to-convert-prometheus-histogramsotlp-with-the-opentelemetry-collector/",
  },
  {
    title: "My Backend Story: The Beginning of My Dream",
    publication: "Medium",
    url: "https://medium.com/@Purity.io/my-backend-story-the-beginning-of-my-dream-2cd810a0a9e5",
  },
  {
    title: "Infrastructure as Code (IaC): Manual Setup to System-Level Architecture in AWS",
    publication: "Medium",
    url: "https://medium.com/@Purity.io/infrastructure-as-code-iac-manual-setup-to-system-level-architecture-in-aws-b94a947c6430",
  },
  {
    title: "What is SSH and How Does It Work?",
    publication: "Medium",
    url: "https://medium.com/@Purity.io/what-is-ssh-and-how-does-it-work-d12f2fb18e70",
  },
  {
    title: "Differences Between Var, Let and Const",
    publication: "Medium",
    url: "https://medium.com/@Purity.io/differences-between-var-let-and-const-a02a7b010623",
  },
  {
    title: "What is JavaScript?",
    publication: "Medium",
    url: "https://medium.com/@Purity.io/what-is-javascript-feaed07c806c",
  },
  {
    title: "UML Versions and",
    publication: "Medium",
    url: "https://medium.com/@Purity.io/uml-versions-and-47f4b7b07f92",
  },
];

const uxArticles = [
  {
    title: "Basics Point of UX: A Beginner's Guide",
    publication: "UX Writing · Bootcamp",
    url: "https://medium.com/design-bootcamp/basics-point-of-ux-beginners-guide-f46a548b69e9",
  },
  {
    title: "How to Reduce Bias in UX Research",
    publication: "UX Writing · Bootcamp",
    url: "https://medium.com/design-bootcamp/how-to-reduce-bias-in-ux-research-5bc965e478b5",
  },
  {
    title: "TikTok's Growth Hack: The Product Strategy That Keeps You Hooked",
    publication: "Product Thinking · Bootcamp",
    url: "https://medium.com/design-bootcamp/tiktoks-growth-hack-the-product-strategy-that-keeps-you-hooked-4fc0a80c9e24",
  },
  {
    title: "User Research Mirrors Human Relationships: Why Understanding People Is the Key to Building Products",
    publication: "UX Research · Bootcamp",
    url: "https://medium.com/design-bootcamp/user-research-mirrors-human-relationships-why-understanding-people-is-the-key-to-building-products-32fd63ca3c6f",
  },
  {
    title: "The Good and Bad UX Practices by Netflix",
    publication: "UX Writing · Bootcamp",
    url: "https://medium.com/design-bootcamp/the-good-and-bad-ux-practices-by-netflix-b0b1cffdd66b",
  },
  {
    title: "Design Principles Used by Apple for Better User Experience",
    publication: "UX Writing · Bootcamp",
    url: "https://medium.com/design-bootcamp/design-principles-used-by-apple-for-better-user-experience-592574194bfb",
  },
];

const activities = [
  {
    type: "Community",
    title: "Grafana & Friends Nigeria",
    detail:
      "Community organising and creating spaces for people across technology to connect, learn and share.",
    link: "",
  },
  {
    type: "Community",
    title: "Google Developer Group Enugu",
    detail:
      "Community participation and contributions to developer-focused activities.",
    link: "",
  },
];

function ArticleList({
  articles,
}: {
  articles: { title: string; publication: string; url: string }[];
}) {
  return (
    <div className="divide-y divide-gray-200 border-y border-gray-200">
      {articles.map((article) => (
        <a
          key={article.url}
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block py-5"
        >
          <h3 className="text-sm leading-relaxed text-black transition-opacity group-hover:opacity-50 sm:text-base">
            {article.title} ↗
          </h3>

          <p className="mt-2 text-xs text-gray-400">
            {article.publication}
          </p>
        </a>
      ))}
    </div>
  );
}

export default function Activities() {
  return (
    <>
      <Header />

      <main
        className={`px-6 pb-24 pt-8 sm:px-12 sm:pt-10 lg:px-20 ${plexMono.className}`}
      >

        <h1 className="mb-10 text-5xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
          I write and I organise events.
        </h1>


        {/* WRITING */}
        <section className="mt-16 max-w-4xl">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-gray-400">

            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-5xl">
              Writing<span className="text-gray-300">.</span>
            </h2>
          </div>

          {/* TECHNICAL WRITING */}
          <div className="mb-16">
            <h3 className="mb-6 text-sm uppercase tracking-widest text-black">
              Technical Writing
            </h3>

            <ArticleList articles={technicalArticles} />
          </div>

          {/* UX WRITING */}
          <div>
            <h3 className="mb-6 text-sm uppercase tracking-widest text-black">
              UX Writing & Product Thinking
            </h3>

            <ArticleList articles={uxArticles} />
          </div>
        </section>

        {/* COMMUNITY */}
        <section className="mt-24 max-w-4xl">
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-5xl">
            Community & Events<span className="text-gray-300">.</span>
          </h2>

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {activities.map((item) => (
              <article key={item.title} className="py-6">
                <p className="text-xs text-gray-400">{item.type}</p>

                <h3 className="mt-2 text-base">{item.title}</h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}