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
    const metaDesc = document.querySelector('meta[name="description"]')
    const canonical = document.querySelector('link[rel="canonical"]')

    if (!post) {
      document.title = 'Article not found | Matowo Dev'
      return
    }

    document.title = `${post.title} | Matowo Dev`
    if (metaDesc) metaDesc.setAttribute('content', post.excerpt)
    if (canonical) canonical.setAttribute('href', `https://matowodev.com/blog/${post.slug}`)

    const breadcrumbScript = document.createElement('script')
    breadcrumbScript.type = 'application/ld+json'
    breadcrumbScript.id = 'ld-breadcrumb'
    breadcrumbScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://matowodev.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://matowodev.com/blog' },
        { '@type': 'ListItem', position: 3, name: post.title, item: `https://matowodev.com/blog/${post.slug}` },
      ],
    })
    document.head.appendChild(breadcrumbScript)

    const articleScript = document.createElement('script')
    articleScript.type = 'application/ld+json'
    articleScript.id = 'ld-article'
    articleScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.excerpt,
      author: {
        '@type': 'Person',
        name: 'Erasmus Matowo',
        url: 'https://matowodev.com',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Matowo Dev',
        url: 'https://matowodev.com',
        logo: 'https://matowodev.com/images/logo.svg',
      },
      datePublished: post.date,
      dateModified: post.date,
      image: 'https://matowodev.com/og-image.jpg',
      url: `https://matowodev.com/blog/${post.slug}`,
    })
    document.head.appendChild(articleScript)

    return () => {
      document.getElementById('ld-breadcrumb')?.remove()
      document.getElementById('ld-article')?.remove()
      if (metaDesc) metaDesc.setAttribute('content', 'Erasmus Matowo is a professional web developer based in Arusha, Tanzania. Specialising in web apps, business websites, e-commerce, landing pages and blogs for startups across Tanzania, Kenya, Uganda and East Africa. From TSH 400,000.')
      if (canonical) canonical.setAttribute('href', 'https://matowodev.com/')
    }
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
