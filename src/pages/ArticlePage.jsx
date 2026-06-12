import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { posts } from '../data/blog'
import styles from '../styles/ArticlePage.module.css'

export default function ArticlePage() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  useEffect(() => {
    document.title = post
      ? `${post.title} | Matowo Dev`
      : 'Article not found | Matowo Dev'
  }, [post])

  if (!post) {
    return (
      <main className={styles.page}>
        <div className={`container ${styles.inner}`}>
          <p className={styles.notFound}>Article not found.</p>
          <Link to="/blog" className={styles.back}>← Back to Blog</Link>
        </div>
      </main>
    )
  }

  const formatted = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  })

  return (
    <main className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <Link to="/blog" className={styles.back}>← Back to Blog</Link>

        <article className={styles.article}>
          <header className={styles.header}>
            <div className={styles.meta}>
              {post.tags.map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
              <time dateTime={post.date} className={styles.muted}>{formatted}</time>
              <span className={styles.muted}>{post.readTime}</span>
            </div>
            <h1 className={styles.heading}>{post.title}</h1>
            <p className={styles.excerpt}>{post.excerpt}</p>
          </header>

          <div className={styles.body}>
            {post.content.map((block, i) =>
              block.type === 'h2'
                ? <h2 key={i} className={styles.h2}>{block.text}</h2>
                : <p key={i} className={styles.p}>{block.text}</p>
            )}
          </div>
        </article>

        <div className={styles.cta}>
          <p>Ready to build your website?</p>
          <Link to="/quote" className={styles.ctaBtn}>Get an instant quote →</Link>
        </div>
      </div>
    </main>
  )
}
