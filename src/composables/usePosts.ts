import { ref } from 'vue'

export interface Post {
  title: string
  url: string
  date: string
  categories: string[]
}

const MEDIUM_RSS = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ksick'

let cache: Post[] | null = null

export function usePosts() {
  const posts = ref<Post[]>([])
  const loading = ref(true)
  const error = ref<string | null>(null)

  async function fetchPosts() {
    if (cache) {
      posts.value = cache
      loading.value = false
      return
    }
    try {
      const res = await fetch(MEDIUM_RSS)
      if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`)
      const data = await res.json()
      cache = (data.items ?? []).map((item: Record<string, unknown>) => ({
        title: item.title as string,
        url: item.link as string,
        date: item.pubDate as string,
        categories: (item.categories as string[]) ?? [],
      }))
      posts.value = cache
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Unknown error'
    } finally {
      loading.value = false
    }
  }

  fetchPosts()

  return { posts, loading, error }
}
