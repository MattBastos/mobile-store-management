'use client';

import { useState } from "react";
import { Layout } from "@/components/Layout";
import { LoginForm } from "@/components/Login";
import { RegisterForm } from "@/components/Login";

export default function Login() {
  const [isRegistering, setRegistering] = useState(false);

  const toggleForm = () => setRegistering(!isRegistering);;

  return (
    <Layout>
        <section className="bg-gray-100 p-8 rounded w-[400px] flex flex-col">
          <h2 className="text-2xl font-bold mb-4 text-secondary text-center">
            {isRegistering ? 'Registrar' : 'Login'}
          </h2>

          {isRegistering ? <RegisterForm /> : <LoginForm />}

          <section className="flex justify-center items-center gap-2">
            <p>
              {isRegistering ? 'Já tem uma conta?' : 'Não tem uma conta?'}
            </p>

            <p
              className="text-primary cursor-pointer underline transition-colors duration-300 ease-in-out hover:text-blue-500"
              onClick={toggleForm}
            >
              {isRegistering ? 'Faça login.' : 'Registre-se.'}
            </p>
          </section>
        </section>
    </Layout>
  );
}
