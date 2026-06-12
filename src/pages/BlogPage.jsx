import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { posts } from '../data/blog'
import styles from '../styles/BlogPage.module.css'

export default function BlogPage() {
  useEffect(() => {
    document.title = 'Blog | Matowo Dev'
  }, [])

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

        <div className={styles.list}>
          {posts.map(post => {
            const formatted = new Date(post.date).toLocaleDateString('en-GB', {
              day: 'numeric', month: 'long', year: 'numeric',
            })
            return (
              <article key={post.id} className={styles.item}>
                <div className={styles.meta}>
                  {post.tags.map(t => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                  <span className={styles.muted}>{formatted}</span>
                  <span className={styles.muted}>{post.readTime}</span>
                </div>
                <h2 className={styles.title}>
                  <Link to={`/blog/${post.slug}`} className={styles.titleLink}>
                    {post.title}
                  </Link>
                </h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className={styles.readLink}>
                  Read article →
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </main>
  )
}
