import getPort from 'get-port'

export default async function getPortLib(host: string, port: number): Promise<number> {
  const result = await getPort({ host, port })
  if (result === port) {
    return result
  }

  return getPortLib(host, port + 1)
}