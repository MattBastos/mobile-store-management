'use client';

import { useState } from "react";
import { Layout } from "@/components/Layout";

export default function Login() {
  const [isRegistering, setRegistering] = useState(false);

  const toggleForm = () => setRegistering(!isRegistering);;

  return (
    <Layout>
        <section className="bg-gray-100 p-8 rounded w-[400px] flex flex-col">
          <h2 className="text-2xl font-bold mb-4 text-secondary text-center">
            {isRegistering ? 'Registrar' : 'Login'}
          </h2>

          {isRegistering ? (
            <form>
              <section className="mb-4">
                <label htmlFor="name" className="block text-md font-medium text-gray-600">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="username"
                  className="mt-1 p-2 w-full border rounded-md border-gray-400 focus:border-primary focus:outline-none transition-colors duration-200 ease-in-out"
                />
              </section>

              <section className="mb-4">
                <label htmlFor="email" className="block text-md font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md border-gray-400 focus:border-primary focus:outline-none transition-colors duration-200 ease-in-out"
                />
              </section>

              <section className="mb-4">
                <label htmlFor="password" className="block text-md font-medium text-gray-600">
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 p-2 w-full border rounded-md border-gray-400 focus:border-primary focus:outline-none transition-colors duration-200 ease-in-out"
                />
              </section>

              <section className="mb-6">
                <label htmlFor="confirmPassword" className="block text-md font-medium text-gray-600">
                  Confirmar Senha
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="password"
                  className="mt-1 p-2 w-full border rounded-md border-gray-400 focus:border-primary focus:outline-none transition-colors duration-200 ease-in-out"
                />
              </section>

              <section className="flex justify-center mb-4">
                <button type="submit" className="bg-primary text-white p-2 rounded-md">
                  Registrar
                </button>
              </section>
            </form>
          ) : (
            <form>
              <section className="mb-4">
                <label htmlFor="email" className="block text-md font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md border-gray-400 focus:border-primary focus:outline-none transition-colors duration-200 ease-in-out"
                />
              </section>

              <section className="mb-4">
                <label htmlFor="password" className="block text-md font-medium text-gray-600">
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 p-2 w-full border rounded-md border-gray-400 focus:border-primary focus:outline-none transition-colors duration-200 ease-in-out"
                />
              </section>

              <section className="flex justify-center mb-4">
                <button type="submit" className="bg-primary text-white p-2 rounded-md">
                  Login
                </button>
              </section>
            </form>
          )}

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
