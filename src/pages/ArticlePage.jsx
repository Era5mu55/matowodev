import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { posts } from '../data/blog'
import styles from '../styles/ArticlePage.module.css'

function renderBlock(block, i) {
  switch (block.type) {
    case 'h2':
      return <h2 key={i} className={styles.h2}>{block.text}</h2>
    case 'h3':
      return <h3 key={i} className={styles.h3}>{block.text}</h3>
    case 'ul':
      return (
        <ul key={i} className={styles.ul}>
          {block.items.map((item, j) => (
            <li key={j} className={styles.li}>{item}</li>
          ))}
        </ul>
      )
    case 'table':
      return (
        <div key={i} className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                {block.headers.map((h, j) => (
                  <th key={j} className={styles.th}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, j) => (
                <tr key={j} className={styles.tr}>
                  {row.map((cell, k) => (
                    <td key={k} className={styles.td}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'cta':
      return (
        <div key={i} className={styles.inlineCta}>
          <p className={styles.inlineCtaText}>{block.text}</p>
          <Link to={block.href} className={styles.ctaBtn}>{block.label} →</Link>
        </div>
      )
    default:
      return <p key={i} className={styles.p}>{block.text}</p>
  }
}

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
            {post.author && (
              <p className={styles.author}>By <strong>{post.author}</strong></p>
            )}
          </header>

          <div className={styles.body}>
            {post.content.map((block, i) => renderBlock(block, i))}
          </div>
        </article>
      </div>
    </main>
  )
}
