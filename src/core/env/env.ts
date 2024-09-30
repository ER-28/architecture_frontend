const env = import.meta.env

export function getEnv(key: string, defaultValue?: string) {
  const value = env['VITE_' + key]
  if (value === undefined) {
    console.warn(`The env var ${key} is undefined`)
    return defaultValue
  }
  return value
}

export function isDev() {
  return env.MODE === 'development'
}

export function isProd() {
  return env.MODE === 'production'
}

export function getMode() {
  return env.MODE
}

export function getAllEnv() {
  return { ...env }
}