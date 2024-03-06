import { Layout } from "@/components/Layout";
import { UpdateProductForm } from "@/components/UpdateProductForm";

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <Layout>
      <UpdateProductForm productId={params.id}/>
    </Layout>
  )
}
