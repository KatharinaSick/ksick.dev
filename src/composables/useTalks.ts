import { ref, computed } from 'vue'
import yaml from 'js-yaml'
import type { Talk, EventsYaml } from '../types'

const EVENTS_URL =
  'https://raw.githubusercontent.com/KatharinaSick/PresentationMaterials/main/events.yaml'

export function useTalks() {
  const talks = ref<Talk[]>([])
  const loading = ref(true)
  const error = ref<string | null>(null)

  async function fetchTalks() {
    try {
      const res = await fetch(EVENTS_URL)
      if (!res.ok) throw new Error(`Failed to fetch events: ${res.status}`)
      const text = await res.text()
      const data = yaml.load(text) as EventsYaml
      talks.value = data.talks ?? []
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Unknown error'
    } finally {
      loading.value = false
    }
  }

  const today = new Date().toISOString().slice(0, 10)

  const upcoming = computed(() =>
    talks.value
      .filter((t) => t.date.replace(/\//g, '-') >= today)
      .sort((a, b) => a.date.localeCompare(b.date))
  )

  const recent = computed(() =>
    talks.value
      .filter((t) => t.date.replace(/\//g, '-') < today)
      .sort((a, b) => b.date.localeCompare(a.date))
  )

  fetchTalks()

  return { talks, upcoming, recent, loading, error }
}
