import { ref } from 'vue'

export interface AdventureLevel {
  id: string
  name: string
  difficulty: string
  topics: string[]
}

export interface Adventure {
  id: string
  title: string
  month: string
  story: string
  tags: string[]
  isLive?: boolean
  contributor?: { name: string; url: string }
  levels: AdventureLevel[]
}

const SUMMARIES_URL =
  'https://raw.githubusercontent.com/off-on-dev/website/main/src/data/adventures/summaries.ts'

let cache: Adventure[] | null = null

export function useAdventures() {
  const adventures = ref<Adventure[]>([])
  const loading = ref(true)
  const error = ref<string | null>(null)

  async function fetchAdventures() {
    if (cache) {
      adventures.value = cache
      loading.value = false
      return
    }
    try {
      const res = await fetch(SUMMARIES_URL)
      if (!res.ok) throw new Error(`Failed to fetch adventures: ${res.status}`)
      const raw = await res.text()

      const startMarker = 'export const ADVENTURE_SUMMARIES'
      const endMarker = '\n/** All unique technology tags'
      const start = raw.indexOf(startMarker)
      const end = raw.indexOf(endMarker, start)
      if (start === -1) throw new Error('Could not find ADVENTURE_SUMMARIES in file')

      let snippet = raw.slice(start, end).trim()
      snippet = snippet
        .replace(/:\s*AdventureCardSummary\[\]\s*=/, ' =')
        .replace('export const', 'const')

      // eslint-disable-next-line no-new-func
      const fn = new Function(snippet + '\nreturn ADVENTURE_SUMMARIES;')
      const all = fn() as Adventure[]

      cache = all.filter((a) => a.contributor?.name === 'Katharina Sick')
      adventures.value = cache
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Unknown error'
    } finally {
      loading.value = false
    }
  }

  fetchAdventures()

  return { adventures, loading, error }
}
