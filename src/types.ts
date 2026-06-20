export interface Talk {
  title: string
  abstract?: string
  date: string
  event: {
    name: string
    url?: string
    logo?: string
  }
  slides?: {
    type: string
    url: string
  }
  recording?: string
  coSpeaker?: {
    name: string
    url?: string
  }
  tags?: string[]
}

export interface EventsYaml {
  talks: Talk[]
}
