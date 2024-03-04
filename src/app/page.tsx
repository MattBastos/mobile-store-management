import { Layout } from "@/components/Layout";
import { InvalidUserMessage } from "@/components/InvalidUserMessage";

export default function Home() {
  return (
    <Layout>
      <InvalidUserMessage />
    </Layout>
  );
}
