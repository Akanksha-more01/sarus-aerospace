export const getAssetPath = (path) => {
    const base = import.meta.env.BASE_URL;
    // Remove leading slash if present in path, and ensure base ends with trailing slash
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    const cleanBase = base.endsWith('/') ? base : `${base}/`;
    return `${cleanBase}${cleanPath}`;
};
