// Options Interface
interface IServiceOptions {
  name: string,
  port: number,
  proxyPort: number,
};

// Services configuration
export const services: Array<IServiceOptions> = [
  {
    name: 'library',
    port: 5001,
    proxyPort: 8081,
  },
  {
    name: 'users',
    port: 5000,
    proxyPort: 8080,
  },
  {
    name: 'game_cluster',
    port: 5002,
    proxyPort: 5002,
  },
];

export function getServiceOptions(service: string): IServiceOptions | null {
  return services.find((x) => x.name == service);
};