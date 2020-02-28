<html>
<h3> Administra tus productos de milanuncios.com </h3>
<img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.milanuncios.com%2F&psig=AOvVaw1IEQzs52pmTM7CbPKzMwMt&ust=1582988355082000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjfgbPB9OcCFQAAAAAdAAAAABAE'/>

Esta Web App hace más rápido el proceso de renovar anuncios en milanuncios. No es un Bot pero disminuye el tiempo y esfuerzo humano por cantidad de clicks para renovar los anuncios de cada productos.

<h4>Features: </h4>
<li>Despliega progresivamente la web de renovación de cada anuncio que tengas en milanuncios.com</li>
<li>Permite agregar las Id's de los anuncios de milanuncios a tu base de datos en Firebase.com para que poder renovarlos facilmente</li>
<li>Permite eliminar los anuncios que ya no desees desplegar en la App.</li>

</html>

Instrucciones:

1. `git clone https://github.com/progamandoconro/admin-milanuncios && cd admin-milanuncios`

2. Crea un proyecto Web en Firebase.com, agregar las credenciales del mismo en `src/storage/constans.js` y cambiar las reglas de seguridad de la "realtime database" a:

```
 {
  "rules": {
      ".read": "auth != null",
      ".write": "auth != null"
  }
}
```

y habilitar la opción email/password en la `Authentication` del proyecto creado.

Paso a paso: https://dzone.com/articles/how-to-integrate-react-application-using-firebase-1.

3. `npm start`

Uso:

1. Agrega las Ids de los productos de milanuncios que desees utilizar (9 números) con esta App.

2. Asegurate de estar autenticado en milanuncios y click a siguiente y renovar.

3. Repite el proceso hasta que no tengas más productos por renovar.

4. Para borrar algún anuncio, ingresa la key de 20 dígigtos asociada a la Id que desees eliminar.

Esta App se puede complementar con `xdotool` para automatizar todo el proceso.

Si me quieres donar un shot de Tequila, programandoconro@hotmail.com es mi paypal.
