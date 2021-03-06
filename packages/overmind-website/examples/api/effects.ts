export default (ts) =>
  ts
    ? [
        {
          fileName: 'app/effects.ts',
          code: `
import axios from 'axios'
import { User, Item } from './state'

export const api = {
  getUser(): Promise<User> {
    return fetch('/user').then(response => response.json())
  },
  getItem(id: number): Promise<Item> {
    return fetch(\`/items/\${id}\`).then(response => response.json())
  }
}
  `,
        },
      ]
    : [
        {
          fileName: 'effects.js',
          code: `
import axios from 'axios'

export const api = {
  getUser() {
    return fetch('/user').then(response => response.json())
  },
  getItem(id) {
    return fetch(\`/items/\${id}\`).then(response => response.json())
  }
}
  `,
        },
      ]
