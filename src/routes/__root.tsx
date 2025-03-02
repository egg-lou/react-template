import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import { UseAuth } from "@/lib/types";

type RouterContext = {
  authentication: UseAuth;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <RootDocument>
      <Outlet />
    </RootDocument>
  ),
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <body className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">{children}</div>
      <TanStackRouterDevtools position="bottom-right" />
      {/* <ReactQueryDevtools buttonPosition="bottom-left" /> */}
      <Footer />
    </body>
  );
}
