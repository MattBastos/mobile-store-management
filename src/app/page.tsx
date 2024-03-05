import { Layout } from "@/components/Layout";
import { WelcomeMessage } from "@/components/WelcomeMessage";
import { ProductTable } from "@/components/Table";

export default function Home() {
  return (
    <Layout>
      <WelcomeMessage />
      <ProductTable />
    </Layout>
  );
}
