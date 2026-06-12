import { Link } from 'react-router-dom'
import { posts } from '../data/blog'
import styles from '../styles/Blog.module.css'

function BlogCard({ slug, title, excerpt, date, readTime, tags }) {
  const formatted = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric',
  })

  return (
    <article className={styles.card}>
      <div className={styles.meta}>
        <span className={styles.tag}>{tags[0]}</span>
        <span className={styles.dot} aria-hidden="true">·</span>
        <time dateTime={date} className={styles.date}>{formatted}</time>
        <span className={styles.dot} aria-hidden="true">·</span>
        <span className={styles.readTime}>{readTime}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.excerpt}>{excerpt}</p>
      <Link to={`/blog/${slug}`} className={styles.readLink}>
        Read article
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </article>
  )
}

export default function Blog() {
  return (
    <section id="blog" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <span className={styles.eyebrow}>Blog</span>
            <h2 className={styles.heading}>Web Dev Insights</h2>
            <p className={styles.sub}>
              Practical guides for East African businesses navigating the web.
            </p>
          </div>
          <Link to="/blog" className={styles.allLink}>
            View all posts →
          </Link>
        </div>

        <div className={styles.grid}>
          {posts.slice(0, 3).map(post => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  )
}
