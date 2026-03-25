import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("changed", "routes/changed.tsx"),
  route("filip", "routes/filip.tsx"),
] satisfies RouteConfig;
