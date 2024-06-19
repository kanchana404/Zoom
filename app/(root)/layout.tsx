import StreamVideoProvider from "@/providers/StreamClietProvider";
import { Analytics } from "@vercel/analytics/react";

const rootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>
      {children}
      <Analytics />
      </StreamVideoProvider>
     
    </main>
  );
};

export default rootLayout;
