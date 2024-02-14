Template "Landing + ecommerce"
Pagina web con base de datos, avisos por correo y gestion admin para crear, modificar, leer y desactivar productos.

Debe contar con un menu.

Debe contar con un carrito de compras.

El carrito de compras debe guardarse en la base de datos y en el contexto de la aplicacion.

Debe sortear la lista de productos de acuerdo a su categoria.

Debe ofrecer el menu del dia (de acuerdo al dia actual.)

Debe tener una lista de usuarios.

Debe tener una lista de invoices por validar.

Cada vez que se crea un invoice debe enviarse tambien por correo para que tengan notificaciones incluso en el celular.

Probablemente sea bueno agregar un blog de recetas posteriormente.

Debe ser capaz de exportar todos los invoices filtrados de acuerdo al mes actual.

Debe generar un cierre mensual de ventas.

Debe entregar una lista de datos de contacto de los clientes para promociones y publicidad.

El cliente debe poder especificar su ubicacion en google maps

dev notes
Tiene que guardar la session del usuario en el frontEnd.

Tiene que validar la session del admin en el backend.

Deben ser servicios separados.

Mobile friendly.

Desktop Friendly.

Deployment on netlify

This is a Next.js project bootstrapped with create-next-app.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
