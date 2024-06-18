import { Analytics } from "@vercel/analytics/react";

const rootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      
      {children}
      <Analytics />
    </main>
  );
};

export default rootLayout;
