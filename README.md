# Dependencies

1. Prisma
2. Typescript
3. bcryptJS
4. nextAuth/auth.js
5. react-hot-toast
6. Bootstrap
7. Faker-js for seeding database.
8. Firebase for Storage of pictures, images and pdf documents.
9. React-hook-form
10. Chartjs && React-ChartJs-2


# Secciones:

## Root /

Informacion basica del negocio, consta de varias secciones haciendo enfasis en fotos y posiblemente videos para dar a conocer productos, servicios y la informacion basica necesaria del negocio.

## /about

Seccion informativa.

## /privacyPolicy && /termsAndConditions

Secciones que explican que sucede con los datos y la privacidad de los usuarios que creen una cuenta y se inscriban en la aplicacion web. Como se usan, por que se recogen e informacion similar.

## /accesDenied

Seccion para notificar al usuario que intento acceder a un espacio restringido para el.

## /not-found

Pagina que notifica al usuario que el contenido que busca no pudo ser encontrado.

## /cart

Seccion del carrito de compras, resumen de todos los elementos presentes en el, costo total y detallado de los productos y servicios que estan agregados al carrito del usuario loggeado.

Paso previo para consolidar una compra.

## /blog

Seccion dedicada a la publicacion de articulos. Puede crear un articulo quien lo desee, pero la publicacion de los mismos sera aprobada por el administrador previa lectura y correccion de los articulos.

Permite tambien subir documentos en pdf, imagenes, videos, y darle formato al texto con el editor de texto que tiene la aplicacion.

Hay una seccion para comentar los articulos.

## /profile

Profile para el usuario se limita a su perfil personal.

Para el administrador, le permite ver a todos y cada uno de los usuarios y sus perfiles de ser necesario. Dandole la oportunidad de desactivar la cuenta o verificar datos.

## /store

Espacio para la tienda virtual. Donde se ofrecen los productos y servicios disponibles. Los usuarios pueden crear productos y servicios, pero su publicacion requiere permiso del administrador.

Lista los productos por categorias y permite agregarlos al carrito desde la tienda.

## /users
Lista general de usuarios, la privacidad de esta lista depende del administrador.

Pagina que puede llegar a ser redundante sin necesidad.

## /admin

Seccion especial para el administrador, desde donde puede leer los articulos que no han sido publicados. Cargar documentos, subir fotos, escribir articulos propios, dar de baja/aprobar productos/servicios.

Verificar compras, recopilar data para realizar estadisticas de los usuarios... etc etc etc. Funcionalidad a desarrollarse en medida de la necesidad del administrador.





# Notes

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

This is a Next.js project bootstrapped with create-next-app.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
