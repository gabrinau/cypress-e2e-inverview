# CYPRESS.IO

Repositorio con estructura basica de cypress para hacer prueba de E2E.

## Casos de prueba exitosos

### Registro de nuevo usuario e inicio de sesión
1. Dirigirse a: (https://www.demoblaze.com/index.html)

2. Hacer click en "Sign Up"

3. Se abre ventana modal de Sign Up.

4. Ingresar un nuevo nombre de usuario en el input "Username"

5. Ingresar una contraseña válida en el input "Password"

6. Hacer clic en el botón "Sign up"

7. Se confirma la creación de la cuenta mediante el alert "Sign up successful."

8. Hacer click en el botón "Ok"



### Agregar productos al carro y finalizar compra
1. Dirigirse a: (https://www.demoblaze.com/index.html)

2. Hacer click en "Samsung Galaxy S6"

3. Hacer click en el botón "Add to cart"

4. Se confirma que se agregó el producto en el carro mediante el alert "Product added."

5. Hacer clic en "Cart"

6. Hacer click en "Place Order"

7. Se abre ventana modal

8. Se completa el formulario con los campos: Name, Country, City, Card, Month, Year

9. Hacer click en "Purchase"

10. Hacer clic en el botón "Ok" para confirmar la compra exitosa

11. Hacer click en el botón "Ok"


## Casos de prueba no exitosos

### Nombre de usuario ya existente en el registro

1. Dirigirse a: (https://www.demoblaze.com/index.html)

2. Hacer click en "Sign Up"

3. Se abre ventana modal de Sign Up.

4. Ingresar un nombre de usuario existente en el input "Username"

5. Ingresar una contraseña válida en el input "Password"

6. Hacer clic en el botón "Sign up"

7. Se notifica que el nombre de usuario ya existe mediante el alert "This user already exist."

8. Hacer click en el botón "Ok"

### Contraseña incorrecta en el inicio de sesión

1. Dirigirse a: (https://www.demoblaze.com/index.html)

2. Hacer click en "Log In"

3. Se abre ventana modal de Log In.

4. Ingresar un usuario existente en el input "Username"

5. Ingresar una contraseña inválida en el input "Password"

6. Hacer clic en el botón "Log In"

7. Se notifica que se ingresó una contraseña incorrecta mediante el alert "Wrong password."

8. Hacer click en el botón "Ok"
