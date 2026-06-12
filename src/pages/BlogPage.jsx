import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { posts } from '../data/blog'
import styles from '../styles/BlogPage.module.css'

const ALL = 'All'

const allTags = [ALL, ...Array.from(
  new Set(posts.flatMap(p => p.tags))
).sort()]

function BlogCard({ id, slug, title, excerpt, date, readTime, tags }) {
  const formatted = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric',
  })
  return (
    <article className={styles.card}>
      <div className={styles.meta}>
        <span className={styles.tag}>{tags[0]}</span>
        <span className={styles.dot} aria-hidden="true">·</span>
        <time dateTime={date} className={styles.muted}>{formatted}</time>
        <span className={styles.dot} aria-hidden="true">·</span>
        <span className={styles.muted}>{readTime}</span>
      </div>
      <h2 className={styles.title}>
        <Link to={`/blog/${slug}`} className={styles.titleLink}>{title}</Link>
      </h2>
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

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState(ALL)

  useEffect(() => {
    document.title = 'Blog | Matowo Dev'
  }, [])

  const filtered = activeTag === ALL
    ? posts
    : posts.filter(p => p.tags.includes(activeTag))

  return (
    <main className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <Link to="/" className={styles.back}>← Back to home</Link>
          <span className={styles.eyebrow}>Blog</span>
          <h1 className={styles.heading}>Web Dev Insights</h1>
          <p className={styles.sub}>
            Practical guides for East African businesses navigating the web.
          </p>
        </header>

        <div className={styles.filters} role="group" aria-label="Filter by category">
          {allTags.map(tag => (
            <button
              key={tag}
              className={`${styles.filterBtn} ${activeTag === tag ? styles.filterActive : ''}`}
              onClick={() => setActiveTag(tag)}
              aria-pressed={activeTag === tag}
            >
              {tag}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className={styles.empty}>No articles in this category yet.</p>
        ) : (
          <div className={styles.grid}>
            {filtered.map(post => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
