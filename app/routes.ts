import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("filip", "routes/filip.tsx"),
  route("agata", "routes/agata.tsx"),
  route("both", "routes/both.tsx"),
] satisfies RouteConfig;
