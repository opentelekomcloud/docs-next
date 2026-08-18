import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type HighlightArticle = {
  title: string;
  description: string;
  href: string;
  label?: string;
  category?: string;
};

const articles: HighlightArticle[] = [
  {
    title: 'Build a Unified LLM Gateway with LiteLLM on CCE',
    description: 'The blueprint shows how to deploy LiteLLM on T Cloud Public CCE as a unified LLM gateway, providing one OpenAI-compatible API across multiple model backends. It centralizes routing, authentication, observability, failover, and cost management while supporting both locally hosted GPU models and external AI providers. This abstraction keeps applications independent of the underlying inference infrastructure and enables flexible model selection. The architecture is designed to balance performance, cost, operational control, and data residency.',
    href: '/docs/blueprints/by-use-case/ai/litellm/litellm',
    label: 'New',
    category: 'Blueprints',
  },
  {
    title: 'Deploy openDesk on T Cloud Public',
    description: 'OpenDesk (branded as openDesk) is an open-source, sovereign digital workplace solution designed for public administration under the coordination of the German Federal Ministry of the Interior. This series of articles showcase how to deploy scalable, high-availability (HA) instances of OpenDesk on T Cloud Public.',
    href: '/docs/blueprints/by-use-case/sovereignty/opendesk/',
    label: 'Featured',
    category: 'Blueprints',
  },
  {
    title: 'Enabling External Traffic with Ingress API',
    description: 'In this guide, we\'ll install and configure essential prerequisites required to expose services securely such as an Ingress Controller for routing external traffic, cert-manager for managing TLS certificates, and other supporting workloads.',
    href: '/docs/best-practices/containers/cloud-container-engine/enabling-external-traffic-with-ingress-api',
    label: 'Featured',
    category: 'Best Practices',
  },
];

export default function ArticleHighlights(): JSX.Element {
  const [featured, ...secondary] = articles;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        {/* <span className={styles.eyebrow}>Recommended</span> */}
        <h2 className={styles.title}>Featured articles</h2>
      </div>

      <div className={styles.grid}>
        <Link to={featured.href} className={styles.featureCard}>
          <span className={styles.label}>{featured.label}</span>

          <h3>{featured.title}</h3>

          <p>{featured.description}</p>

          <span className={styles.cta}>Read article</span>
        </Link>

        <div className={styles.sideList}>
          {secondary.map((article) => (
            <Link
              key={article.href}
              to={article.href}
              className={styles.card}
            >
              <div>
                <span className={styles.label}>
                  {article.label}
                </span>

                <h3>{article.title}</h3>

                <p>{article.description}</p>
              </div>

              {article.category && (
                <span className={styles.category}>
                  {article.category}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}