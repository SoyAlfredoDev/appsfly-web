import { DeploymentEntry } from "@/types/admin";

const VERCEL_API_URL = "https://api.vercel.com";

interface FetchVercelParams {
  endpoint: string;
  method?: string;
  body?: any;
}

async function fetchFromVercel({
  endpoint,
  method = "GET",
  body,
}: FetchVercelParams) {
  const token = process.env.VERCEL_API_TOKEN;
  if (!token) {
    throw new Error("VERCEL_API_TOKEN no configurado en variables de entorno");
  }
  console.log("token", token);

  const url = `${VERCEL_API_URL}${endpoint}`;

  const headers: HeadersInit = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const options: RequestInit = {
    method,
    headers,
  };

  if (body && (method === "POST" || method === "PUT" || method === "PATCH")) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error en API Vercel (${response.status}): ${errorText}`);
  }
  console.log("response.json()", response.json());

  return response.json();
}

/**
 * Obtiene la lista de deployments recientes
 */
export async function getDeployments(limit = 10): Promise<DeploymentEntry[]> {
  const projectId = process.env.VERCEL_PROJECT_ID;
  const teamId = process.env.VERCEL_TEAM_ID;

  if (!projectId) {
    console.warn("VERCEL_PROJECT_ID no configurado");
    return [];
  }

  let endpoint = `/v6/deployments?projectId=${projectId}&limit=${limit}`;
  if (teamId) {
    endpoint += `&teamId=${teamId}`;
  }

  try {
    const data = await fetchFromVercel({ endpoint });

    if (!data || !data.deployments || !Array.isArray(data.deployments)) {
      return [];
    }

    return data.deployments.map((d: any) => ({
      uid: d.uid,
      name: d.name,
      url: d.url ? `https://${d.url}` : null,
      created: d.created,
      state: d.state,
      creator: d.creator,
      meta: d.meta,
    }));
  } catch (error) {
    console.error("Error obteniendo deployments:", error);
    return [];
  }
}

/**
 * Obtiene información básica del proyecto (para métricas técnicas)
 */
export async function getProjectInfo(): Promise<any> {
  const projectId = process.env.VERCEL_PROJECT_ID;
  const teamId = process.env.VERCEL_TEAM_ID;

  if (!projectId) {
    console.warn("VERCEL_PROJECT_ID no configurado");
    return null;
  }

  let endpoint = `/v9/projects/${projectId}`;
  if (teamId) {
    endpoint += `?teamId=${teamId}`;
  }

  try {
    return await fetchFromVercel({ endpoint });
  } catch (error) {
    console.error("Error obteniendo info del proyecto:", error);
    return null;
  }
}
